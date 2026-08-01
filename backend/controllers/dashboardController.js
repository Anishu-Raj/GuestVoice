import User from "../models/User.js";
import Homestay from "../models/Homestay.js";
import Review from "../models/Review.js";

export const getOwnerDashboard = async (req, res) => {
  try {
    const { ownerId } = req.params;

    // Find Owner
    const owner = await User.findById(ownerId);

    if (!owner) {
      return res.status(404).json({
        success: false,
        message: "Owner not found",
      });
    }

    // Find Homestay
    const homestay = await Homestay.findOne({ ownerId });

    if (!homestay) {
      return res.status(404).json({
        success: false,
        message: "Homestay not found",
      });
    }

    // Fetch Reviews
    const reviews = await Review.find({
      homestayId: homestay._id,
    })
      .populate("userId", "name photo")
      .sort({ createdAt: -1 });

    // ---- Aggregate real AI data from the stored reviews ----

    const total = reviews.length || 1; // avoid divide-by-zero when there are no reviews yet

    const sentimentCounts = { Positive: 0, Neutral: 0, Negative: 0 };
    const topicCounts = {};
    const positiveTopicCounts = {};
    const negativeTopicCounts = {};

    reviews.forEach((r) => {
      sentimentCounts[r.sentiment] = (sentimentCounts[r.sentiment] || 0) + 1;

      (r.topics || []).forEach((topic) => {
        topicCounts[topic] = (topicCounts[topic] || 0) + 1;

        if (r.sentiment === "Positive") {
          positiveTopicCounts[topic] = (positiveTopicCounts[topic] || 0) + 1;
        } else if (r.sentiment === "Negative") {
          negativeTopicCounts[topic] = (negativeTopicCounts[topic] || 0) + 1;
        }
      });
    });

    const sentimentBreakdown = {
      positive: Math.round((sentimentCounts.Positive / total) * 100),
      neutral: Math.round((sentimentCounts.Neutral / total) * 100),
      negative: Math.round((sentimentCounts.Negative / total) * 100),
    };

    const topKeywords = Object.entries(topicCounts)
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);

    const guestsLoved = Object.keys(positiveTopicCounts)
      .sort((a, b) => positiveTopicCounts[b] - positiveTopicCounts[a])
      .slice(0, 4);

    const guestsMentioned = Object.keys(negativeTopicCounts)
      .sort((a, b) => negativeTopicCounts[b] - negativeTopicCounts[a])
      .slice(0, 4);

    const negativeAlerts = reviews
      .filter((r) => r.sentiment === "Negative" && r.aiRecommendation)
      .slice(0, 5)
      .map((r) => ({
        issue: r.aiRecommendation,
        review: r.review,
        reviewId: r._id,
      }));

    // Star rating distribution (5 down to 1)
    const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach((r) => {
      const star = Math.round(r.rating);
      if (ratingCounts[star] !== undefined) ratingCounts[star]++;
    });

    const ratingDistribution = [5, 4, 3, 2, 1].map((star) => ({
      star,
      count: ratingCounts[star],
      percent: Math.round((ratingCounts[star] / total) * 100),
    }));

    // Monthly review trend (last 6 months, oldest first)
    const monthLabels = [];
    const monthKeyFor = (date) =>
      `${date.getFullYear()}-${date.getMonth()}`;

    const now = new Date();
    const monthCounts = {};

    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = monthKeyFor(d);
      monthCounts[key] = 0;
      monthLabels.push({
        key,
        month: d.toLocaleString("en-US", { month: "short" }),
      });
    }

    reviews.forEach((r) => {
      const key = monthKeyFor(new Date(r.createdAt));
      if (monthCounts[key] !== undefined) monthCounts[key]++;
    });

    const monthlyTrend = monthLabels.map(({ key, month }) => ({
      month,
      reviews: monthCounts[key],
    }));

    // AI-generated-style insights derived from real aggregated data
    const topPositiveKeyword = topKeywords[0]?.word;
    const topNegativeReview = reviews.find((r) => r.sentiment === "Negative");

    const aiInsights = [];

    if (topPositiveKeyword) {
      aiInsights.push({
        type: "positive",
        title: "Positive Trend",
        description: `Guests frequently mention "${topPositiveKeyword}" in a good light.`,
      });
    }

    if (topNegativeReview) {
      aiInsights.push({
        type: "warning",
        title: "Needs Attention",
        description:
          topNegativeReview.aiRecommendation ||
          "A recent review flagged an issue worth checking.",
      });
    }

    if (sentimentBreakdown.negative > 0) {
      aiInsights.push({
        type: "recommendation",
        title: "AI Recommendation",
        description:
          "Address the flagged negative reviews to improve guest satisfaction.",
      });
    }

    // Dashboard Response
    res.status(200).json({
      success: true,

      owner: {
        id: owner._id,
        name: owner.name,
        email: owner.email,
        photo: owner.photo,
      },

      homestay,

      stats: {
        averageRating: homestay.averageRating,
        totalReviews: homestay.totalReviews,
      },

      sentimentBreakdown,
      topKeywords,
      negativeAlerts,
      ratingDistribution,
      monthlyTrend,
      aiInsights,
      guestsLoved,
      guestsMentioned,
      topRecommendation: negativeAlerts[0]?.issue || "",

      recentReviews: reviews.slice(0, 5),
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};