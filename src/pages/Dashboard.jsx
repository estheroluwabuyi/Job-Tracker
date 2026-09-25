import { useAuth } from "../contexts/AuthContext";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardNavbar from "../components/dashboard/navbar/DashboardNavbar";
import DashboardStats from "../components/dashboard/DashboardStats";
import RecentApplicationsTable from "../components/dashboard/RecentApplicationsTable";
import { useJob } from "../contexts/JobContext";
import DashboardEmptyState from "../components/dashboard/DashboardEmptyState";
import Loader from "../components/ui/Loader";

function Dashboard() {
  const { jobData, loading } = useJob();

  const hasApplications = jobData.length > 0;

  return (
    <DashboardLayout>
      <div className="px-8">
        {loading ? (
          <Loader />
        ) : hasApplications ? (
          <>
            <DashboardStats />
            <RecentApplicationsTable />
          </>
        ) : (
          <DashboardEmptyState />
        )}
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
