import { useAuth } from "../contexts/AuthContext";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardNavbar from "../components/dashboard/navbar/DashboardNavbar";
import DashboardStats from "../components/dashboard/DashboardStats";

function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <DashboardLayout>
      <DashboardStats />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui impedit iure
      ab consequatur in voluptatem, voluptas autem error itaque dignissimos eos!
      Sunt quisquam molestiae voluptas obcaecati consequuntur repellat nesciunt
      ipsam blanditiis. Itaque unde officia omnis ea dolores quisquam provident
      illum impedit beatae ducimus aliquam commodi illo aperiam nulla quibusdam
      laboriosam veritatis vitae praesentium, adipisci possimus debitis vel,
      numquam fuga perferendis! Rem inventore commodi dicta fugit ea voluptatum
      ut architecto sit?
    </DashboardLayout>
  );
}

export default Dashboard;
