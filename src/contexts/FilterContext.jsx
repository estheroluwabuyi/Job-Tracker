import { createContext, useContext, useEffect, useState } from "react";
import { useJob } from "./JobContext";
const STATUSES = [
  "All Jobs",
  "Applied",
  "Interviewed",
  "Offered",
  "Rejected",
  "Ignored",
];

const FilterContext = createContext();

function FilterProvider({ children }) {
  const { jobData } = useJob();
  const [statusFilter, setStatusFilter] = useState(() => {
    const saved = localStorage.getItem("filterItems");
    return saved ? JSON.parse(saved) : "All Jobs";
  });

  const filteredJobs =
    statusFilter === "All Jobs"
      ? jobData
      : jobData.filter((job) => job.status === statusFilter);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("filterItems", JSON.stringify(statusFilter));
  }, [statusFilter]);

  return (
    <FilterContext.Provider
      value={{ filteredJobs, STATUSES, statusFilter, setStatusFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
}

function useFilter() {
  const context = useContext(FilterContext);

  if (context === undefined)
    throw new Error("useFilter must be used within a FilterProvider");
  return context;
}

export { FilterContext, FilterProvider, useFilter };
