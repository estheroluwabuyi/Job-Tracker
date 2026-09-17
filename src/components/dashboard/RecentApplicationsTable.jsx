import { useState } from "react";
import { useJob } from "../../contexts/JobContext";
import RecentApplicationsToolbar from "./RecentApplicationsToolbar";

function RecentApplicationsTable() {
  const [filter, setFilter] = useState("All Applications");
  const [query, setQuery] = useState("");

  const { jobData } = useJob();
  console.log(jobData);

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
      <h2 className="text-[2rem] font-medium tracking-tight mb-7">
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

      {filteredJob.length === 0 && (
        <p className="text-text-secondary/70">
          No applications match your search.
        </p>
      )}
    </section>
  );
}

export default RecentApplicationsTable;
