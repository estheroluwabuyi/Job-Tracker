import { FaEdit, FaLink, FaTrashAlt } from "react-icons/fa";
import { useJob } from "../contexts/JobContext";
import { formatDateForDisplay } from "../helper/formatDate";
import { useFilter } from "../contexts/FilterContext";
import { HiOutlineInbox } from "react-icons/hi2";

import DeleteJobModal from "./DeleteJobModal";

function Homepage() {
  const { startEditJob, handleDeleteClick } = useJob();

  const { filteredJobs, statusFilter } = useFilter();

  const statusStyles = {
    Applied: "bg-blue-500 text-background",
    Interviewed: "bg-amber-500 text-background",
    Offered: "bg-green-500 text-background",
    Rejected: "bg-red-600 text-background",
    Ignored: "bg-gray-400 text-background",
  };

  return (
    <div className="mt-20 pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 auto-rows-fr">
      {filteredJobs.length === 0 ? (
        // No jobs message
        <div className="col-span-full flex flex-col items-center justify-center text-center mt-20">
          <HiOutlineInbox size={64} className="mb-4 text-blue-300" />
          <h3 className="text-[1.8rem] font-semibold mb-2 text-gray-800">
            No {statusFilter.toLowerCase()} jobs yet
          </h3>
          <p className="text-[1.4rem] text-gray-600 max-w-[320px] mb-4">
            This filter is empty, but that's okay!
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100 max-w-md">
            <p className="text-gray-700 text-lg">
              {statusFilter === "Applied" &&
                "Your first application is waiting to be added!"}
              {statusFilter === "Interviewed" &&
                "Interviews will appear here once scheduled."}
              {statusFilter === "Offered" &&
                "Offers will show up here when they arrive!"}
              {statusFilter === "Rejected" &&
                "Rejections are just redirections. Keep going!"}
              {!["Applied", "Interviewed", "Offered", "Rejected"].includes(
                statusFilter,
              ) && "Try a different filter or add a new job."}
            </p>
          </div>
        </div>
      ) : (
        filteredJobs.map((job) => (
          <div
            key={job.id}
            className="w-full xs:min-w-[280px] max-w-[320px] shadow-xl bg-white rounded-3xl p-8 flex flex-col h-full"
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

            <div className=" bg-gray/20 rounded-xl  p-4 my-4 grow">
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
                job.application_link ? "flex justify-between mt-10" : "mt-auto"
              }
            >
              {job.application_link && (
                <a
                  href={job.application_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <FaLink size={17} />
                  </button>
                </a>
              )}

              <div className="flex justify-end items-center gap-7 ml-auto">
                <button onClick={() => startEditJob(job)}>
                  <FaEdit size={17} />
                </button>

                <button onClick={() => handleDeleteClick(job)}>
                  <FaTrashAlt size={17} />
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      <DeleteJobModal />
    </div>
  );
}

export default Homepage;
