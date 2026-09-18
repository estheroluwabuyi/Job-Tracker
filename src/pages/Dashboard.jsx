import { useAuth } from "../contexts/AuthContext";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardNavbar from "../components/dashboard/navbar/DashboardNavbar";
import DashboardStats from "../components/dashboard/DashboardStats";
import RecentApplicationsTable from "../components/dashboard/RecentApplicationsTable";
import { useJob } from "../contexts/JobContext";
import DashboardEmptyState from "../components/dashboard/DashboardEmptyState";

function Dashboard() {
  const { user, signOut } = useAuth();
  const { jobData, loading } = useJob();

  return (
    <DashboardLayout>
      {jobData.length === 0 ? (
        <div className="px-8">
          <DashboardEmptyState />
        </div>
      ) : (
        <div className="px-8">
          <DashboardStats />
          <RecentApplicationsTable />
        </div>
      )}
    </DashboardLayout>
  );
}

export default Dashboard;
