import { useEffect, useState } from "react";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";

import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import StatsCards from "../components/dashboard/StatsCards";
import AISummaryCard from "../components/dashboard/AISummaryCard";
import RecentReviews from "../components/dashboard/RecentReviews";
import NegativeAlerts from "../components/dashboard/NegativeAlerts";
import TopKeywords from "../components/dashboard/TopKeywords";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import QuickActions from "../components/dashboard/QuickActions";
import SentimentAnalytics from "../components/dashboard/SentimentAnalytics";
import RatingSummary from "../components/dashboard/RatingSummary";
import ReviewTrendChart from "../components/dashboard/ReviewTrendChart";
import AIInsights from "../components/dashboard/AIInsights";

function Dashboard() {

  const { dbUser, loading } = useAuth();

  const [dashboardData, setDashboardData] = useState(null);
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [dashboardError, setDashboardError] = useState("");

  useEffect(() => {

    if (!loading && dbUser?._id) {
      fetchDashboard();
    }

  }, [loading, dbUser]);

  const fetchDashboard = async () => {

    setDashboardLoading(true);
    setDashboardError("");

    try {

      const { data } = await API.get(`/dashboard/owner/${dbUser._id}`);

      setDashboardData(data);

    } catch (err) {

      console.log(err);

      setDashboardError(
        err.response?.data?.message ||
          "Couldn't load your dashboard right now. Please try again."
      );

    } finally {

      setDashboardLoading(false);

    }

  };

  if (loading || !dbUser) {

    return (
      <div className="min-h-screen flex justify-center items-center bg-blush-50">
        <span className="w-8 h-8 border-4 border-rose-200 border-t-rose-600 rounded-full animate-spin" />
      </div>
    );

  }

  return (

    <div className="min-h-screen bg-blush-100 flex">

      <DashboardSidebar homestayName={dashboardData?.homestay?.name} />

      <div className="flex-1 overflow-y-auto bg-dot-grid">

        <div className="p-8">

          <DashboardNavbar />

          {dashboardLoading ? (

            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <span className="w-10 h-10 border-4 border-rose-200 border-t-rose-600 rounded-full animate-spin" />
              <p className="text-gray-400">Loading your dashboard...</p>
            </div>

          ) : dashboardError ? (

            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <p className="text-red-500">{dashboardError}</p>
              <button
                onClick={fetchDashboard}
                className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-xl transition"
              >
                Retry
              </button>
            </div>

          ) : (

            <>

              <WelcomeCard data={dashboardData} />

              <StatsCards data={dashboardData} />

              <QuickActions homestayId={dashboardData?.homestay?._id} />

              <div id="analytics-section" className="grid lg:grid-cols-2 gap-8 mt-8 scroll-mt-8">

                <SentimentAnalytics breakdown={dashboardData?.sentimentBreakdown} />

                <RatingSummary distribution={dashboardData?.ratingDistribution} />

              </div>

              <ReviewTrendChart trend={dashboardData?.monthlyTrend} />

              <AIInsights insights={dashboardData?.aiInsights} />

              <div id="ai-summary-section" className="grid lg:grid-cols-2 gap-8 mt-8 scroll-mt-8">

                <AISummaryCard
                  hasData={!!dashboardData}
                  loved={dashboardData?.guestsLoved}
                  mentioned={dashboardData?.guestsMentioned}
                  recommendation={dashboardData?.topRecommendation}
                />

                <NegativeAlerts alerts={dashboardData?.negativeAlerts} />

              </div>

              <div id="recent-reviews-section" className="scroll-mt-8">
                <RecentReviews reviews={dashboardData?.recentReviews} />
              </div>

              <TopKeywords keywords={dashboardData?.topKeywords} />

            </>

          )}

        </div>

      </div>

    </div>

  );

}

export default Dashboard;
