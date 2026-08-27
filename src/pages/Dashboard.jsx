import { useAuth } from "../contexts/AuthContext";
import DashboardLayout from "../components/dashboard/DashboardLayout";

function Dashboard() {
  const { user, signOut } = useAuth();
  console.log("User in Dashboard:", user);

  return <DashboardLayout>HALO</DashboardLayout>;
}

export default Dashboard;
