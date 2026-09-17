import { useState } from "react";
import { useJob } from "../../contexts/JobContext";
import RecentApplicationsToolbar from "./RecentApplicationsToolbar";

function RecentApplicationsTable() {
  const [filter, setFilter] = useState("All Applications");
  const [query, setQuery] = useState("");

  const { jobData } = useJob();

  return (
    <section className="py-4">
      <h2 className="text-[2rem] font-medium tracking-tight mb-4">
        Recent Applications
      </h2>

      <h1></h1>

      <RecentApplicationsToolbar
        filter={filter}
        onFilterChange={setFilter}
        query={query}
        onQueryChange={setQuery}
      />
    </section>
  );
}

export default RecentApplicationsTable;
