import { FaEdit, FaLink, FaTrashAlt } from "react-icons/fa";
import { defaultJobs } from "../utils/defaultJobs";

function Homepage() {
  const statusStyles = {
    Applied: "bg-blue-500 text-white",
    Interviewed: "bg-amber-500 text-white",
    Offered: "bg-green-500 text-white",
    Rejected: "bg-red-600 text-white",
    Ignored: "bg-gray-400 text-white",
  };

  return (
    // <div className="mt-15 flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
    <div className="mt-20  pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
      {defaultJobs.map((job, i) => (
        <div
          key={i}
          className="min-w-[280px] max-w-[320px]  shadow-xl bg-white rounded-3xl p-8"
        >
          <div>
            <h2 className="text-[1.8rem] font-monda font-bold tracking-wide">
              {job.position}
            </h2>
            <span
              className={`px-3 py-1 rounded-lg text-[1.1rem] uppercase font-semibold ${statusStyles[job.status]}`}
            >
              {job.status}
            </span>
          </div>

          <div className="text-text/70 flex flex-col gap-2 my-4">
            <h3>{job.company}</h3>
            <h3>{job.dateApplied}</h3>
          </div>

          <div className=" bg-gray/20 rounded-xl  p-4 my-4">
            <h4 className="uppercase text-[1.05rem] tracking-wider text-text/60 font-medium">
              Notes
            </h4>
            <p className="text-text/80 tracking-wide text-[1.2rem]">
              {job.notes}
            </p>
          </div>

          <div className="flex justify-between">
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              <button>
                <FaLink size={17} />
              </button>
            </a>

            <div className="flex justify-center items-center gap-7">
              <button>
                <FaEdit size={17} />
              </button>

              <button>
                <FaTrashAlt size={17} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Homepage;
