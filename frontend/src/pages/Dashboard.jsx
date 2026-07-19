import { useEffect, useState } from "react";
import axios from "axios";
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

  useEffect(() => {

    if (!loading && dbUser?._id) {
      fetchDashboard();
    }

  }, [loading, dbUser]);

  const fetchDashboard = async () => {

    try {

      const { data } = await axios.get(
        `http://localhost:5000/api/dashboard/owner/${dbUser._id}`
      );

      setDashboardData(data);

    } catch (err) {

      console.log(err);

    }

  };

  if (loading || !dbUser) {

    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );

  }

  return (

    <div className="min-h-screen bg-pink-50 flex">

      <DashboardSidebar />

      <div className="flex-1 overflow-y-auto">

        <div className="p-8">

          <DashboardNavbar />

          <WelcomeCard data={dashboardData} />

          <StatsCards data={dashboardData} />

          <QuickActions />

          <div className="grid lg:grid-cols-2 gap-8 mt-8">

            <SentimentAnalytics breakdown={dashboardData?.sentimentBreakdown} />

            <RatingSummary />

          </div>

          <ReviewTrendChart />

          <AIInsights />

          <div className="grid lg:grid-cols-2 gap-8 mt-8">

            <AISummaryCard />

            <NegativeAlerts alerts={dashboardData?.negativeAlerts} />

          </div>

          <RecentReviews reviews={dashboardData?.recentReviews} />

          <TopKeywords keywords={dashboardData?.topKeywords} />

        </div>

      </div>

    </div>

  );

}

export default Dashboard;