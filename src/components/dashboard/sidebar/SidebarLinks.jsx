import { NavLink } from "react-router-dom";
import {
  LuLayoutDashboard,
  LuBriefcaseBusiness,
  LuChartNoAxesCombined,
  LuBookmark,
  LuSettings,
  LuLogOut,
} from "react-icons/lu";

function SidebarLinks({ signOut }) {
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

  return (
    <nav className="w-full px-5">
      <div className="flex flex-col gap-5">
        {links.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-4 rounded-xl text-[1.4rem] font-medium transition-all ${
                isActive
                  ? "bg-primary text-white"
                  : "text-text-secondary hover:bg-primary/10 hover:text-primary"
              }`
            }
          >
            <Icon size={22} strokeWidth={2} />
            <span>{name}</span>
          </NavLink>
        ))}
      </div>

      <button
        onClick={signOut}
        className="flex items-center gap-4 px-5 py-4 mt-8 w-full rounded-xl text-[1.4rem] font-medium text-text-secondary hover:bg-red-500/10 hover:text-red-500 transition-all"
      >
        <LuLogOut size={22} strokeWidth={2} />
        <span>Log out</span>
      </button>
    </nav>
  );
}

export default SidebarLinks;
