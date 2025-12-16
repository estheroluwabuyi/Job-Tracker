import { createContext, useContext, useEffect, useState } from "react";
import { defaultJobs } from "../data/defaultJobs";

const JobContext = createContext();

function JobProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [jobData, setJobData] = useState(defaultJobs);

  // Form states
  const [applicationLink, setApplicationLink] = useState("");
  const [date, setDate] = useState(new Date());
  const [status, setStatus] = useState("Applied");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
  };

  //prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  // Handle outside click
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  // Handle Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showModal, setShowModal]);

  const handleAddJob = () => {
    console.log("JOB");
  };

  return (
    <JobContext.Provider
      value={{
        showModal,
        setShowModal,
        jobData,
        setJobData,
        handleOutsideClick,
        handleCloseModal,
        applicationLink,
        setApplicationLink,
        date,
        setDate,
        status,
        setStatus,
        position,
        setPosition,
        company,
        setCompany,
        notes,
        setNotes,
        handleAddJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

function useJob() {
  const context = useContext(JobContext);

  if (context === undefined)
    throw new Error("useJob must be used within a JobProvider");
  return context;
}

export { JobContext, JobProvider, useJob };
