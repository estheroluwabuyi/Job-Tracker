import { CgNotes } from "react-icons/cg";
import { useAuth } from "../contexts/AuthContext";
import { getGreeting, getUserFirstName } from "../helper/getGreeting";

function EmptyHomepage() {
  const { user } = useAuth();

  const firstName = getUserFirstName(user);

  return (
    <section className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 ">
      <div>
        <CgNotes className="text-[20rem] text-blue " />
      </div>

      <div className="text-center tracking-wide ">
        <h2 className="text-[2rem] font-semibold mb-4 text-gray-800 leading-tight">
          {getGreeting()}, <span className="text-blue-600">{firstName}</span>
          <br />
          Ready to begin your journey?
        </h2>

        <div className="bg-linear-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 my-4">
          <p className="text-gray-700 text-[1.4rem] font-medium italic">
            "Your dream job is waiting."
          </p>
          <p className="text-gray-600 text-[1.15rem] font-medium mt-2">
            Start tracking your applications today.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EmptyHomepage;
