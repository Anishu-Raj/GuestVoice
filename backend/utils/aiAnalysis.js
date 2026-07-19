// backend/utils/aiAnalysis.js
// Calls Gemini to analyze a guest review: sentiment, topics, summary,
// an improvement recommendation for the owner, and a confidence score.
// If GEMINI_API_KEY is missing or the API call fails for any reason,
// we fall back to a simple keyword-based analysis so review submission
// NEVER breaks just because the AI call failed.

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent";

function fallbackAnalysis(reviewText, rating) {
  const text = (reviewText || "").toLowerCase();

  const negativeWords = [
    "bad", "worst", "dirty", "rude", "poor", "terrible",
    "noisy", "smell", "broken", "late", "disappointed",
  ];
  const positiveWords = [
    "good", "great", "excellent", "amazing", "clean",
    "friendly", "comfortable", "loved", "best", "wonderful",
  ];

  const hasNegative = negativeWords.some((w) => text.includes(w));
  const hasPositive = positiveWords.some((w) => text.includes(w));

  let sentiment = "Neutral";
  if (rating >= 4 && !hasNegative) sentiment = "Positive";
  else if (rating <= 2 || hasNegative) sentiment = "Negative";
  else if (hasPositive) sentiment = "Positive";

  return {
    sentiment,
    topics: [],
    summary: reviewText?.slice(0, 140) || "",
    aiRecommendation:
      sentiment === "Negative"
        ? "Guest flagged an issue in this review — check the details and follow up."
        : "",
    confidence: 0.4, // low confidence, this is the non-AI fallback
  };
}

export async function generateOwnerReply(reviewText, rating, sentiment) {
  const apiKey = process.env.GEMINI_API_KEY;

  const fallbackReply =
    sentiment === "Negative"
      ? "Thank you for your honest feedback. We're sorry your stay didn't meet expectations, and we're already looking into the issue you raised. We'd love another chance to host you."
      : "Thank you so much for your kind words! We're thrilled you enjoyed your stay and hope to welcome you back again soon.";

  if (!apiKey) {
    console.log("⚠️  GEMINI_API_KEY not set — using fallback reply");
    return fallbackReply;
  }

  const prompt = `You are a homestay owner replying to a guest review. Keep it warm,
specific to what the guest said, and under 60 words. Do not use emojis.

Guest review (rating ${rating}/5, sentiment: ${sentiment}): "${reviewText}"

Write only the reply text, nothing else — no quotes, no markdown, no labels.`;

  try {
    const response = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.5 },
      }),
    });

    if (!response.ok) {
  const errorBody = await response.text();
  throw new Error(`Gemini API error: ${response.status} — ${errorBody}`);
}

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    return rawText.trim() || fallbackReply;

  } catch (error) {
    console.log("⚠️  Gemini reply generation failed, using fallback:", error.message);
    return fallbackReply;
  }
}

export async function analyzeReview(reviewText, rating) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.log("⚠️  GEMINI_API_KEY not set — using fallback analysis");
    return fallbackAnalysis(reviewText, rating);
  }

  const prompt = `You are analyzing a homestay guest review for the owner's dashboard.
Review (rating ${rating}/5): "${reviewText}"

Respond ONLY with valid JSON, no markdown, in exactly this shape:
{
  "sentiment": "Positive" | "Neutral" | "Negative",
  "topics": [array of up to 4 short topic keywords, e.g. "cleanliness", "staff", "wifi", "food"],
  "summary": "one short sentence summarizing the review",
  "aiRecommendation": "one short actionable suggestion for the homestay owner (empty string if review is fully positive)",
  "confidence": number between 0 and 1
}`;

  try {
    const response = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.3 },
      }),
    });

    if (!response.ok) {
  const errorBody = await response.text();
  throw new Error(`Gemini API error: ${response.status} — ${errorBody}`);
}

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    const cleaned = rawText.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    return {
      sentiment: parsed.sentiment || "Neutral",
      topics: Array.isArray(parsed.topics) ? parsed.topics.slice(0, 4) : [],
      summary: parsed.summary || "",
      aiRecommendation: parsed.aiRecommendation || "",
      confidence:
        typeof parsed.confidence === "number" ? parsed.confidence : 0.7,
    };
  } catch (error) {
    console.log("⚠️  Gemini analysis failed, using fallback:", error.message);
    return fallbackAnalysis(reviewText, rating);
  }
}
