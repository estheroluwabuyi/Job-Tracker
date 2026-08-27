import { Link } from "react-router-dom";
import Logo from "../../hero/Logo";
import { useAuth } from "../../../contexts/AuthContext";
import SidebarLinks from "./SidebarLinks";
import { LuMail } from "react-icons/lu";

export default function Sidebar() {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    // toast.success("Signed out successfully");
    navigate("/");
  };

  return (
    <div className="h-full bg-bg flex items-center flex-col">
      <div className=" bg-red-0 w-full flex justify-center items-center">
        <Link to="/" className="-ml-10 ">
          <Logo
            logoHeight="h-25 xs:h-30"
            textSize="text-[1.5rem] xs:text-[2.7rem]"
          />
        </Link>
      </div>

      <div className="flex flex-col items-center w-full p-5  ">
        <div className="w-[90px] h-[90px] rounded-full bg-gradient-to-r from-[#067368] to-[#00B69B] flex justify-center items-center shrink-0 p-2">
          <img
            src="/images/avatar.jpg"
            className=" rounded-full w-full h-full object-cover"
            alt="avatar"
          />
        </div>

        <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-primary/5 text-primary/80">
          <LuMail size={15} strokeWidth={2} />
          <span className="text-[1.2rem] font-manrope font-medium tracking-wide">
            {user.user_metadata.email}
          </span>
        </div>
      </div>

      <div className="">
        <SidebarLinks signOut={handleSignOut} />
      </div>
    </div>
  );
}
