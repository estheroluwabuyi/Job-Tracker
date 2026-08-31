import Sidebar from "./sidebar/Sidebar";
import DashboardNavbar from "./navbar/DashboardNavbar";

function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-[275px_1fr] 2xl:grid-cols-[336px_1fr] h-screen bg-bg-muted">
      <aside>
        <Sidebar />
      </aside>

      <main className="h-screen overflow-y-auto">
        <DashboardNavbar />
        <div className="">{children}</div>
      </main>
    </div>
  );
}

export default DashboardLayout;
