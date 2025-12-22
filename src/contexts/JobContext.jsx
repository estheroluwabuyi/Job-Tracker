import { createContext, useContext, useEffect, useState } from "react";

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
  const [isEditing, setIsEditing] = useState(false);
  const [jobForm, setJobForm] = useState(initialForm);

  const [jobData, setJobData] = useState(() => {
    const saved = localStorage.getItem("jobItems");
    return saved ? JSON.parse(saved) : [];
  });

  // Function to handle both add and update
  const handleAddJob = () => {
    if (isEditing) {
      // Update existing job
      setJobData((prev) =>
        prev.map((job) => (job.id === jobForm.id ? { ...jobForm } : job)),
      );
      setIsEditing(false);
    } else {
      // Add new job
      const newJob = {
        ...jobForm,
        id: Date.now(),
        date: jobForm.date.toISOString(),
      };
      setJobData((prev) => [newJob, ...prev]);
    }

    setJobForm(initialForm);
    setShowModal(false);
  };

  // Function to cancel edit
  const cancelEdit = () => {
    setIsEditing(false);
    setJobForm(initialForm);
    setShowModal(false);
  };

  // Function to start editing a job
  const startEditJob = (job) => {
    setJobForm({
      id: job.id,
      date: new Date(job.date),
      status: job.status,
      position: job.position,
      company: job.company,
      notes: job.notes || "",
      applicationLink: job.applicationLink || "",
    });
    setIsEditing(true);
    setShowModal(true);
  };

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("jobItems", JSON.stringify(jobData));
  }, [jobData]);

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

  // Function to delete job
  const handleDeleteJob = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      setJobData((job) => job.filter((item) => item.id !== id));
    }
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
        isEditing,
        setJobForm,
        updateJobForm,
        handleDeleteJob,
        cancelEdit,
        startEditJob,
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
