import { createContext, useContext, useState } from "react";
import { defaultJobs } from "../data/defaultJobs";

const JobContext = createContext();

function JobProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [jobData, setJobData] = useState(defaultJobs);

  const value = { showModal, setShowModal, jobData, setJobData };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}

function useJob() {
  const context = useContext(JobContext);

  if (context === undefined)
    throw new Error("useJob must be used within a JobProvider");
  return context;
}

export { JobContext, JobProvider, useJob };
