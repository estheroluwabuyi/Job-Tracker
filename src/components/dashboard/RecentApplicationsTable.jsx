import { useState } from "react";
import { useJob } from "../../contexts/JobContext";
import RecentApplicationsToolbar from "./RecentApplicationsToolbar";

function RecentApplicationsTable() {
  const [filter, setFilter] = useState("All Applications");
  const [query, setQuery] = useState("");

  const { jobData } = useJob();

  const filteredJob = jobData.slice(0, 5).filter((job) => {
    const matchesFilter =
      filter === "All Applications" || job.status === filter;

    const matchPosition = job.position
      .trim()
      .toLowerCase()
      .includes(query.trim().toLowerCase());

    const matchCompany = job.company
      .trim()
      .toLowerCase()
      .includes(query.trim().toLowerCase());

    return (matchPosition || matchCompany) && matchesFilter;
  });

  return (
    <section className="py-4">
      <h2 className="text-[2rem] font-medium tracking-tight mb-4">
        Recent Applications
      </h2>

      <RecentApplicationsToolbar
        filter={filter}
        onFilterChange={setFilter}
        query={query}
        onQueryChange={setQuery}
      />

      {filteredJob.map((job) => (
        <div key={job.id}>{job.position}</div>
      ))}
    </section>
  );
}

export default RecentApplicationsTable;
