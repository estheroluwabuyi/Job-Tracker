import { useAuth } from "../contexts/AuthContext";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardNavbar from "../components/dashboard/navbar/DashboardNavbar";
import DashboardStats from "../components/dashboard/DashboardStats";
import RecentApplicationsTable from "../components/dashboard/RecentApplicationsTable";

function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <DashboardLayout>
      <div className="px-8">
        <DashboardStats />

        <RecentApplicationsTable />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
