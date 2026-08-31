import Sidebar from "./sidebar/Sidebar";
import { useJob } from "../../contexts/JobContext";
import { useAuth } from "../../contexts/AuthContext";

function DashboardLayout({ children }) {
  const { jobData } = useJob();
  const { user, signOut } = useAuth();

  return (
    <div className="grid grid-cols-[275px_1fr] 2xl:grid-cols-[336px_1fr] h-screen bg-bg-muted">
      <aside>
        <Sidebar />
      </aside>

      <main className="h-screen overflow-y-auto">
        <div className="">{children}</div>
      </main>
    </div>
  );
}

export default DashboardLayout;
