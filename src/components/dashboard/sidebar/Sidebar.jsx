import { Link } from "react-router-dom";
import Logo from "../../hero/Logo";
import { useAuth } from "../../../contexts/AuthContext";
import SidebarLinks from "./SidebarLinks";
import { LuMail, LuPanelLeftClose } from "react-icons/lu";

export default function Sidebar({ onClose }) {
  const { user, signOut, handleSignOut } = useAuth();

  return (
    <div className="h-full bg-bg flex items-center flex-col">
      <div className="w-full flex items-center justify-between px-12 md:px-6 pt-3 max-w-[600px]">
        <Link to="/" className="-10">
          <Logo textSize="text-[1.5rem] xs:text-[2.7rem]" />
        </Link>

        <button
          onClick={onClose}
          className="p-2 rounded-lg text-text-secondary hover:bg-bg-muted hover:text-text transition-colors"
          aria-label="Collapse sidebar"
        >
          <LuPanelLeftClose size={24} />
        </button>
      </div>

      <div className="flex flex-col items-center w-full p-5 ">
        <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-r from-[#067368] to-[#00B69B] flex justify-center items-center shrink-0 p-2">
          <img
            src="/images/avatar-2.svg"
            className="rounded-full w-full h-full object-cover"
            alt="avatar"
          />
        </div>

        <div className="text-center mt-5">
          <h3 className="text-[2.1rem] font-bold">{user.user_metadata.name}</h3>

          <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-primary/5 text-primary/80">
            <LuMail size={15} strokeWidth={2} />

            <h4 className="text-[1.25rem] font-medium tracking-wide ">
              {user.user_metadata.email}
            </h4>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[300px] sm:max-w-[200px]">
        <SidebarLinks signOut={signOut} />
      </div>
    </div>
  );
}
