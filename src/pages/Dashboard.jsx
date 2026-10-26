import { useAuth } from "../contexts/AuthContext";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardNavbar from "../components/dashboard/navbar/DashboardNavbar";
import DashboardStats from "../components/dashboard/DashboardStats";
import RecentApplicationsTable from "../components/dashboard/RecentApplicationsTable";
import { useJob } from "../contexts/JobContext";
import DashboardEmptyState from "../components/dashboard/DashboardEmptyState";
import Loader from "../components/ui/Loader";
import ApplicationActivity from "../components/dashboard/ApplicationActivity";
import ApplicationStatus from "../components/dashboard/ApplicationStatus";

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

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <ApplicationActivity />
              <ApplicationStatus />
            </div>

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
