import { Link } from "react-router-dom";
import Logo from "../../hero/Logo";
import { useAuth } from "../../../contexts/AuthContext";

export default function Sidebar() {
  const { user, signOut } = useAuth();

  return (
    <div className="h-full bg-bg flex items-center flex-col">
      <div className=" bg-red-0 border-b border-border p-2 w-full flex justify-center items-center">
        <Link to="/" className="-ml-10 ">
          <Logo
            logoHeight="h-25 xs:h-30"
            textSize="text-[1.5rem] xs:text-[2.7rem]"
          />
        </Link>
      </div>

      <div className="flex flex-col items-center w-full p-5 pt-5 border-b border-border">
        <div className="w-[90px] h-[90px] rounded-full bg-gradient-to-r from-[#067368] to-[#00B69B] flex justify-center items-center shrink-0 p-2">
          <img
            src="/images/avatar.jpg"
            className=" rounded-full w-full h-full object-cover"
            alt="avatar"
          />
        </div>

        <div className="text-center mt-7">
          <h3 className="text-[2.2rem] font-bold ">
            {user.user_metadata.name}
          </h3>
          <h4 className="text-[1.2rem] text-text-secondary/70 font-medium mt-1">
            {user.user_metadata.email}
          </h4>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}
