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
    <div>
      {defaultJobs.map((job, i) => (
        <div key={i}>
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

<div className="text-text/70"><h3 >{job.company}</h3>
          <h3>{job.dateApplied}</h3>
          </div>
          

          <div>
            <h4>Notes</h4>
            <p>{job.notes}</p>
          </div>

          <div>
            <button>
              <FaEdit />
            </button>
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              <button>
                <FaLink />
              </button>
            </a>
            <button>
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Homepage;
