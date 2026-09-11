import { Link, NavLink } from "react-router-dom";
import { LuLogOut, LuPanelLeftOpen } from "react-icons/lu";
import {
  LuLayoutDashboard,
  LuBriefcaseBusiness,
  LuChartNoAxesCombined,
  LuBookmark,
  LuSettings,
} from "react-icons/lu";
import { useAuth } from "../../../contexts/AuthContext";
import Logo from "../../hero/Logo";

const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LuLayoutDashboard,
  },
  {
    name: "My Applications",
    path: "/applications",
    icon: LuBriefcaseBusiness,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: LuChartNoAxesCombined,
  },
  {
    name: "Saved Jobs",
    path: "/saved-jobs",
    icon: LuBookmark,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: LuSettings,
  },
];

export default function CollapsedSidebar({ onOpen }) {
  const { signOut } = useAuth();

  return (
    <div className="h-full bg-bg flex flex-col items-center pt-4 gap-7 ">
      <Link
        to="/"
        className="flex items-center justify-center"
        aria-label="Go to homepage"
      >
        <img
          src="/images/logo.png"
          alt="JobTrack"
          width={100}
          height={100}
          className="w-[80px] h-auto"
        />
      </Link>

      <button
        onClick={onOpen}
        className="p-3 rounded-xl text-text-secondary hover:bg-bg-muted hover:text-text transition-colors mb-5"
        aria-label="Open sidebar"
      >
        <LuPanelLeftOpen size={25} />
      </button>

      <nav className="flex flex-col gap-5">
        {links.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            title={name}
            className={({ isActive }) =>
              `w-12 h-12 flex items-center justify-center rounded-xl transition-all ${
                isActive
                  ? "bg-primary text-bg"
                  : "text-text-secondary hover:bg-primary/10 hover:text-primary"
              }`
            }
          >
            <Icon size={21} strokeWidth={2} />
          </NavLink>
        ))}

        <button
          onClick={signOut}
          className="flex items-center gap-4  mt-10 w-full rounded-xl text-[1.4rem] font-medium text-text-secondary hover:bg-red-500/10 hover:text-red-500 transition-all p-1.5"
          title="Log out"
        >
          <LuLogOut size={21} strokeWidth={2} />
        </button>
      </nav>
    </div>
  );
}
