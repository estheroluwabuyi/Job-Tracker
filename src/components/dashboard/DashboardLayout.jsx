import Sidebar from "./sidebar/Sidebar";
import DashboardNavbar from "./navbar/DashboardNavbar";

import { useState } from "react";
import CollapsedSidebar from "./sidebar/CollapasedSidebar";

// function DashboardLayout({ children }) {
//   return (
//     <div className="grid grid-cols-[275px_1fr] 2xl:grid-cols-[336px_1fr] h-screen bg-bg-muted">
//       <aside>
//         <Sidebar />
//       </aside>

//       <main className="h-screen overflow-y-auto">
//         <DashboardNavbar />
//         <div className="">{children}</div>
//       </main>
//     </div>
//   );
// }

// export default DashboardLayout;

// import { useState } from "react";
// import Sidebar from "./sidebar/Sidebar";
// import DashboardNavbar from "./navbar/DashboardNavbar";
// import CollapsedSidebar from "./sidebar/CollapsedSidebar";

// function DashboardLayout({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   return (
//     <div
//       className={`grid h-screen bg-bg-muted transition-[grid-template-columns] duration-300 ${
//         sidebarOpen ? "grid-cols-[275px_1fr]" : "grid-cols-[64px_1fr]"
//       }`}
//     >
//       <aside>
//         {sidebarOpen ? (
//           <Sidebar onClose={() => setSidebarOpen(false)} />
//         ) : (
//           <CollapsedSidebar onOpen={() => setSidebarOpen(true)} />
//         )}
//       </aside>

//       <main className="h-screen overflow-y-auto">
//         <DashboardNavbar />

//         <div>{children}</div>
//       </main>
//     </div>
//   );
// }

// export default DashboardLayout;

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={`grid h-screen bg-bg-muted transition-[grid-template-columns] duration-300 ${
        sidebarOpen ? "grid-cols-[275px_1fr]" : "grid-cols-[64px_1fr]"
      }`}
    >
      <aside>
        {sidebarOpen ? (
          <Sidebar onClose={() => setSidebarOpen(false)} />
        ) : (
          <CollapsedSidebar onOpen={() => setSidebarOpen(true)} />
        )}
      </aside>

      <main className="h-screen overflow-y-auto">
        <DashboardNavbar />

        <div>{children}</div>
      </main>
    </div>
  );
}

export default DashboardLayout;
