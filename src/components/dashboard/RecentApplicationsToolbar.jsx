import { IoIosSearch } from "react-icons/io";
import { LuChevronDown } from "react-icons/lu";

const statusOptions = [
  "All Applications",
  "Interviewed",
  "Offered",
  "Rejected",
  "No Response",
];

function RecentApplicationsToolbar({
  filter,
  onFilterChange,
  query,
  onQueryChange,
}) {
  return (
    <div className="flex max-w-[300px] sm:max-w-[600px] gap-5 flex-col sm:flex-row mb-5">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="w-full text-[1.5rem] p-5 pl-15 border-none outline-none rounded-md mr-7 placeholder:text-text-secondary"
          style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        <IoIosSearch
          className="absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none ml-3 text-text-secondary"
          size={22}
        />
      </div>

      <div className="relative  shrink-0">
        <select
          className="appearance-none border-none outline-none rounded-md
               p-5 text-[1.5rem] font-medium
             text-foreground cursor-pointer min-w-[200px] focus:ring-2 focus:ring-primary/40 w-full sm:w-auto"
          style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <LuChevronDown
          className="absolute top-1/2 -translate-y-1/2 right-0 mr-5 pointer-events-none text-text-secondary"
          size={22}
        />
      </div>
    </div>
  );
}

export default RecentApplicationsToolbar;

// const [filter, setFilter] = useState("All Applications");
//   const [query, setQuery] = useState("");

//  {filteredJob.length === 0 && (
//         <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
//           <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-[10rem] w-[10rem] text-text-secondary"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A3.375 3.375 0 0 1 11.25 4.875v-1.5A3.375 3.375 0 0 0 7.875 0H6.75A3.375 3.375 0 0 0 3.375 3.375v17.25A3.375 3.375 0 0 0 6.75 24h10.125a3.375 3.375 0 0 0 3.375-3.375v-1.5"
//               />
//             </svg>
//           </div>

//           <h3 className="mb-1 text-[2rem] font-medium">
//             No applications found
//           </h3>

//           <p className="max-w-sm text-text-secondary/70">
//             Try adjusting your search or filter to find what you're looking for.
//           </p>
//         </div>
//       )}

// const filteredJob = jobData.slice(0, 5).filter((job) => {
//   const matchesFilter =
//     filter === "All Applications" || job.status === filter;

//   const matchPosition = job.position
//     .trim()
//     .toLowerCase()
//     .includes(query.trim().toLowerCase());

//   const matchCompany = job.company
//     .trim()
//     .toLowerCase()
//     .includes(query.trim().toLowerCase());

//   return (matchPosition || matchCompany) && matchesFilter;
// });
