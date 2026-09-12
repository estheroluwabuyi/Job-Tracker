import Sidebar from "./sidebar/Sidebar";
import DashboardNavbar from "./navbar/DashboardNavbar";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import CollapsedSidebar from "./sidebar/CollapasedSidebar";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div
      className={`grid h-screen bg-bg-muted transition-[grid-template-columns] duration-500 ease-linear ${
        sidebarOpen
          ? "grid-cols-[100%_1fr] sm:grid-cols-[275px_1fr]"
          : "grid-cols-[64px_1fr]"
      }`}
    >
      <aside className="overflow-x-hidden">
        {sidebarOpen ? (
          <Sidebar onClose={() => setSidebarOpen(false)} />
        ) : (
          <CollapsedSidebar onOpen={() => setSidebarOpen(true)} />
        )}
      </aside>

      <main className="h-screen overflow-y-auto">
        <DashboardNavbar />

        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default DashboardLayout;
