import { FaEdit, FaLink, FaTrashAlt } from "react-icons/fa";
import { useJob } from "../contexts/JobContext";
import { formatDateForDisplay } from "../helper/formatDate";
import { useFilter } from "../contexts/FilterContext";
import { HiOutlineInbox } from "react-icons/hi2";
import { supabase } from "../../lib/supabase";


console.log(supabase);

function Homepage() {
  const { handleDeleteJob, startEditJob } = useJob();
  const { filteredJobs, statusFilter } = useFilter();

  const statusStyles = {
    Applied: "bg-blue-500 text-background",
    Interviewed: "bg-amber-500 text-background",
    Offered: "bg-green-500 text-background",
    Rejected: "bg-red-600 text-background",
    Ignored: "bg-gray-400 text-background",
  };

  return (
    // <div className="mt-15 flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
    <div className="mt-20  pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
      {filteredJobs.length === 0 ? (
        <div className="col-span-full flex flex-col items-center justify-center text-center mt-20 text-text/70 ">
          <HiOutlineInbox size={64} className="mb-4 text-text/40" />

          <h3 className="text-[1.8rem] font-semibold mb-2">No jobs found</h3>

          <p className="text-[1.5rem] max-w-[320px]">
            You don’t have any{" "}
            <span className="font-semibold">{statusFilter}</span> jobs yet.
          </p>
          <p className="mt-2 text-text/50 tracking-wide">
            Try switching filters or add a new job.
          </p>
        </div>
      ) : (
        filteredJobs.map((job) => (
          <div
            key={job.id}
            className="min-w-[280px] max-w-[320px]  shadow-xl bg-white rounded-3xl p-8"
          >
            <div>
              <h2 className="mb-3 text-[1.8rem] font-monda font-bold tracking-wide">
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
              <h3>{formatDateForDisplay(job.date)}</h3>
            </div>

            <div className=" bg-gray/20 rounded-xl  p-4 my-4">
              <h4 className="uppercase text-[1.05rem] tracking-wider text-text/60 font-medium">
                Notes
              </h4>
              <p
                className={`tracking-wide text-[1.2rem] ${
                  job.notes ? "text-text/80" : "text-text/40 italic"
                }`}
              >
                {job.notes || "No notes added"}
              </p>
            </div>

            <div
              className={
                job.applicationLink ? "flex justify-between mt-10" : "mt-10"
              }
            >
              {job.applicationLink && (
                <a
                  href={job.applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <FaLink size={17} />
                  </button>
                </a>
              )}

              <div className="flex justify-end items-center gap-7">
                <button onClick={() => startEditJob(job)}>
                  <FaEdit size={17} />
                </button>

                <button onClick={() => handleDeleteJob(job.id)}>
                  <FaTrashAlt size={17} />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Homepage;
