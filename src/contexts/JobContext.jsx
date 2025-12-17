import { createContext, useContext, useEffect, useState } from "react";
import { defaultJobs } from "../data/defaultJobs";

const initialForm = {
  position: "",
  status: "Applied",
  company: "",
  date: new Date(),
  notes: "",
  applicationLink: "",
};

const JobContext = createContext();

function JobProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  // const [jobData, setJobData] = useState(defaultJobs);
  const [jobData, setJobData] = useState(() => {
    const saved = localStorage.getItem("jobItems");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("jobItems", JSON.stringify(jobData));
  }, [jobData]);

  // Form states
  const [jobForm, setJobForm] = useState(initialForm);

  // Function to update field in form
  const updateJobForm = (field, value) => {
    setJobForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Function to close modal when cancel is clicked
  const handleCloseModal = () => {
    setShowModal(false);
    setJobForm(initialForm);
  };

  // Function to add new job when save job is clicked
  const handleAddJob = () => {
    const newJob = {
      ...jobForm,
      id: Date.now(),
      date: jobForm.date.toISOString(),
    };

    setJobData((prev) => [newJob, ...prev]);
    setJobForm(initialForm);
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

  return (
    <JobContext.Provider
      value={{
        showModal,
        setShowModal,
        jobData,
        setJobData,
        handleOutsideClick,
        handleCloseModal,
        handleAddJob,
        jobForm,
        setJobForm,
        updateJobForm,
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
