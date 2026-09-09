import { useAuth } from "../contexts/AuthContext";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardNavbar from "../components/dashboard/navbar/DashboardNavbar";
import DashboardStats from "../components/dashboard/DashboardStats";

function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <DashboardLayout>
      <DashboardStats />
    </DashboardLayout>
  );
}

export default Dashboard;
