import { createContext, useContext, useState } from "react";

const JobContext = createContext();

function JobProvider({ children }) {
  const [toggleHomepage, setToggleHomepage] = useState(true);

  const value = { toggleHomepage, setToggleHomepage };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}

function useJob() {
  const context = useContext(JobContext);

  if (context === undefined)
    throw new Error("useJob must be used within a JobProvider");
  return context;
}

export { JobContext, JobProvider, useJob };
