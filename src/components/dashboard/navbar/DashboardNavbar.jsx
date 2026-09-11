import { LuPartyPopper } from "react-icons/lu";
import { useAuth } from "../../../contexts/AuthContext";
import { useJob } from "../../../contexts/JobContext";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AddApplicationButton from "./AddApplicationButton";

const pageContent = {
  "/applications": {
    title: "Your Applications",
    subtitle: "Keep track of the jobs you've applied for",
  },
  "/analytics": {
    title: "Your Analytics",
    subtitle: "See how your job search is progressing",
  },
  "/saved-jobs": {
    title: "Saved Jobs",
    subtitle: "Keep interesting opportunities in one place",
  },
  "/settings": {
    title: "Settings",
    subtitle: "Manage your profile, preferences, and account",
  },
};

export default function DashboardNavbar() {
  const { user } = useAuth();
  const { jobData } = useJob();

  const hasApplications = jobData.length > 0;

  const { pathname } = useLocation();
  const page = pageContent[pathname];

  const isDashboard = pathname === "/dashboard";

  return (
    <nav className="flex items-center justify-between py-6 px-8 bg-bg">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {isDashboard ? (
            <>
              <h1 className="text-[1.55rem] sm:text-[2.5rem] gap-5 font-manrope font-bold flex items-center">
                {hasApplications
                  ? `Welcome back, ${user.user_metadata.name}`
                  : `Welcome, ${user.user_metadata.name}`}

                <LuPartyPopper className="text-primary -mt-2 text-[20px] sm:text-[35px]" />
              </h1>

              <p className="mt-2 text-[1.2rem] sm:text-[1.4rem] text-text-secondary/70 xs:text-nowrap">
                {hasApplications
                  ? "Here's a quick look at your job search"
                  : "Let's get your job search organized"}
              </p>
            </>
          ) : (
            <>
              <h1 className="text-[1.55rem] sm:text-[2.5rem] font-manrope font-bold">
                {page?.title}
              </h1>

              <p className="mt-2 max-w-[300px] text-[1.2rem] sm:text-[1.4rem] text-text-secondary/70 xs:text-nowrap">
                {page?.subtitle}
              </p>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center gap-3">
        {isDashboard && <AddApplicationButton />}
        {pathname === "/applications" && <AddApplicationButton />}
      </div>
    </nav>
  );
}
