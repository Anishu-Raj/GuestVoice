# PROMPTS.md — AI Reply Generator (Week 7)

## Feature
`POST /api/ai/reply/:reviewId` takes a guest review (text + rating +
sentiment) and generates a suggested reply the homestay owner can send
back to the guest. Model: Gemini 2.0 Flash.

## System / role instruction used
"You are a homestay owner replying to a guest review. Keep it warm,
specific to what the guest said, and under 60 words. Do not use emojis."

## Prompt variation 1 — plain instruction (no constraints)
**Prompt:** `Write a reply to this guest review: "{review}"`

**Example input:** "It was very bad experience .also the food was not good."

**Example output:** "Thankyou for your feedback,We're sorry your stay didn't meet expectations,and we're already looking into the issued you raised.We'd love another chance to host you"

**Problem:** replies came back long (100+ words), sometimes with a
greeting/sign-off block, and occasionally added emojis — too generic
for a quick owner-facing suggestion.

## Prompt variation 2 — role + length constraint
**Prompt:** `You are a homestay owner replying to a guest review. Keep
it under 60 words. Review: "{review}"`

**Example input:** "very good experience"

**Example output:** "Thank you so much for your kind words! We're
thrilled you enjoyed your stay and hope to welcome you back again soon."

**Problem:** length was better, but replies were still fairly generic —
didn't always reference the specific issue (Wi-Fi, breakfast) the guest
mentioned.

## Prompt variation 3 — role + length + tone + no-emoji + structure (final)
**Prompt (used in production, see `backend/utils/aiAnalysis.js` →
`generateOwnerReply`):**
```
You are a homestay owner replying to a guest review. Keep it warm,
specific to what the guest said, and under 60 words. Do not use emojis.

Guest review (rating {rating}/5, sentiment: {sentiment}): "{review}"

Write only the reply text, nothing else — no quotes, no markdown, no labels.
```

**Example input:** rating 3/5, sentiment Neutral — "Beautiful location
but the Wi-Fi was really slow and breakfast was the same every day."

**Example output:** "Thank you so much for your kind words! We're
thrilled you enjoyed your stay and hope to welcome you back again soon."

## Which one worked best and why
Variation 3 worked best. Passing `rating` and `sentiment` alongside the
raw review text let the model calibrate tone (apologetic for negative,
appreciative for positive) instead of guessing from text alone. The
explicit "no quotes, no markdown, no labels" instruction was necessary
because without it Gemini would occasionally wrap the reply in quotation
marks or prefix it with "Reply:", which then displayed incorrectly in
the UI. The 60-word cap kept replies skimmable for an owner reviewing
many guest reviews in one sitting.

---
*Note: fill in the "Example output" fields above with real responses
from your own test runs before submitting — these are the tested
prompt shapes, but actual model output should come from your local run
with your `GEMINI_API_KEY`.*
