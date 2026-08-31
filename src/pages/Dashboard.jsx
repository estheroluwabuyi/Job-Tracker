import { useAuth } from "../contexts/AuthContext";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardNavbar from "../components/dashboard/navbar/DashboardNavbar";

function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <DashboardLayout>
    
    </DashboardLayout>
  );
}

export default Dashboard;
