import { FaPlus } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { useAuth } from "../../../contexts/AuthContext";
import { useJob } from "../../../contexts/JobContext";

export default function DashboardNavbar() {
  const { user } = useAuth();
  const { jobData, loading } = useJob();
  console.log(jobData);

  const hasApplications = jobData.length > 0;

  return (
    <nav className="flex items-center justify-between p-8 bg-bg">
      <div>
        <h1 className="text-[3rem] gap-5 font-manrope font-bold flex items-center">
          {loading
            ? `Welcome, ${user.user_metadata.name}`
            : hasApplications
              ? `Welcome back, ${user.user_metadata.name}`
              : `Welcome, ${user.user_metadata.name}`}
          <LuPartyPopper size={35} className="text-primary -mt-2" />
        </h1>

        <p className="mt-2 text-[1.5rem] text-text-secondary/70">
          {loading
            ? "Getting your job search ready..."
            : hasApplications
              ? "Here's a quick look at your job search."
              : "Let's get your job search organized."}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary text-bg text-[1.5rem] font-medium hover:bg-primary/90 transition-colors">
          <FaPlus size={14} />
          Add Application
        </button>
      </div>
    </nav>
  );
}
