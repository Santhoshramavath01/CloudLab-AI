import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatsGrid from "../../components/dashboard/StatsGrid";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentWorkspaces from "../../components/dashboard/RecentWorkspaces";
import DockerStatus from "../../components/dashboard/DockerStatus";
import ActivityTimeline from "../../components/dashboard/ActivityTimeline";
import AIRecommendations from "../../components/dashboard/AIRecommendations";
function Dashboard() {
  return (
  <div className="mx-auto max-w-[1700px] space-y-10 px-2 pb-10">

      <WelcomeBanner />

      <StatsGrid />

      <QuickActions />

<div className="grid gap-8 xl:grid-cols-3">

    <div className="xl:col-span-2">

        <RecentWorkspaces />

    </div>

    <AIRecommendations />

</div>

<div className="grid gap-8 xl:grid-cols-2">

    <DockerStatus />

    <ActivityTimeline />

</div>

    </div>
  );
}

export default Dashboard;