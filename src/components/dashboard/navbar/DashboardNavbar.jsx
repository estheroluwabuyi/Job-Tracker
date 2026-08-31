import { FaPlus } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { useAuth } from "../../../contexts/AuthContext";
import { useJob } from "../../../contexts/JobContext";
import { useLocation } from "react-router-dom";
import AddApplicationButton from "./AddApplicationButton";

const pageContent = {
  "/applications": {
    title: "Your Applications",
    subtitle: "Keep track of the jobs you've applied for.",
  },
  "/analytics": {
    title: "Your Analytics",
    subtitle: "See how your job search is progressing.",
  },
  "/saved-jobs": {
    title: "Saved Jobs",
    subtitle: "Keep interesting opportunities in one place.",
  },
  "/settings": {
    title: "Settings",
    subtitle: "Manage your profile, preferences, and account.",
  },
};

export default function DashboardNavbar() {
  const { user } = useAuth();
  const { jobData } = useJob();

  const hasApplications = jobData.length > 0;

  const { pathname } = useLocation();
  const page = pageContent[pathname];

  return pathname === "/dashboard" ? (
    <nav className="flex items-center justify-between p-8 bg-bg">
      <div>
        <h1 className="text-[2.5rem] gap-5 font-manrope font-bold flex items-center">
          {hasApplications
            ? `Welcome back, ${user.user_metadata.name}`
            : `Welcome, ${user.user_metadata.name}`}
          <LuPartyPopper size={35} className="text-primary -mt-2" />
        </h1>

        <p className="mt-2 text-[1.4rem] text-text-secondary/70">
          {hasApplications
            ? "Here's a quick look at your job search."
            : "Let's get your job search organized."}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <AddApplicationButton/>
      </div>
    </nav>
  ) : (
    <nav className="flex items-center justify-between p-8 bg-bg">
      <div>
        <h1 className="text-[2.5rem] font-manrope font-bold">{page?.title}</h1>

        <p className="mt-2 text-[1.4rem] text-text-secondary/70">
          {page?.subtitle}
        </p>
      </div>

      {pathname === "/applications" && <AddApplicationButton />}
    </nav>
  );
}
