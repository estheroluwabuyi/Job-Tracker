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
