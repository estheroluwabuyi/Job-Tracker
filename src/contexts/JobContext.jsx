import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "./AuthContext";

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
  const { user } = useAuth();  
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [jobForm, setJobForm] = useState(initialForm);
  const [jobData, setJobData] = useState([]);  
  const [loading, setLoading] = useState(true);  

  // FETCH JOBS FROM SUPABASE
  useEffect(() => {
    if (user) {
      fetchJobs();
    } else {
      setJobData([]);  // Clear data if no user
      setLoading(false);
    }
  }, [user]);  // fetch again when user changes

  const fetchJobs = async () => {
    if (!user) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('user_id', user.id)  // get only jobs for the logged-in user
      .order('date', { ascending: false });  // most recent first
    
    if (error) {
      console.error('Error fetching jobs:', error);
      
    } else {
      setJobData(data || []);
    }
    setLoading(false);
  };

  // HANDLE ADD/UPDATE JOB
  const handleAddJob = async () => {  //  MAKE ASYNC
    if (!user) {
      console.error('No user logged in');
      return;
    }

    // Prepare job data for Supabase
    const jobToSave = {
      position: jobForm.position,
      status: jobForm.status,
      company: jobForm.company,
      date: jobForm.date.toISOString().split('T')[0],  // Format to YYYY-MM-DD
      notes: jobForm.notes,
      application_link: jobForm.applicationLink,  // underscore for Supabase column
      user_id: user.id  //  ASSOCIATE WITH USER
    };

    try {
      if (isEditing) {
        // UPDATE EXISTING JOB
        const { error } = await supabase
          .from('jobs')
          .update(jobToSave)
          .eq('id', jobForm.id)
          .eq('user_id', user.id);  // Only update user's own jobs
        
        if (error) throw error;
      } else {
        // ADD NEW JOB
        const { error } = await supabase
          .from('jobs')
          .insert([jobToSave]);
        
        if (error) throw error;
      }

      // Refresh jobs from database
      await fetchJobs();
      
      // Reset form and close modal
      setJobForm(initialForm);
      setIsEditing(false);
      setShowModal(false);
      
    } catch (error) {
      console.error('Error saving job:', error);
      // Optional: Show error message to user
      alert(`Error saving job: ${error.message}`);
    }
  };

  // HANDLE DELETE JOB
  const handleDeleteJob = async (id) => {
    if (!user) return;
    
    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        const { error } = await supabase
          .from('jobs')
          .delete()
          .eq('id', id)
          .eq('user_id', user.id);  //  Only delete user's own jobs
        
        if (error) throw error;
        
        // Refresh jobs from database
        await fetchJobs();
        
      } catch (error) {
        console.error('Error deleting job:', error);
        alert(`Error deleting job: ${error.message}`);
      }
    }
  };

  // START EDITING JOB
  const startEditJob = (job) => {
    setJobForm({
      id: job.id,
      position: job.position,
      status: job.status,
      company: job.company,
      date: new Date(job.date),
      notes: job.notes || "",
      applicationLink: job.application_link || "",  // application_link from Supabase
    });
    setIsEditing(true);
    setShowModal(true);
  };

  // CANCEL EDIT
  const cancelEdit = () => {
    setIsEditing(false);
    setJobForm(initialForm);
    setShowModal(false);
  };

  // UPDATE FORM FIELD
  const updateJobForm = (field, value) => {
    setJobForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // CLOSE MODAL
  const handleCloseModal = () => {
    setShowModal(false);
    setJobForm(initialForm);
    setIsEditing(false);
  };

  // PREVENT BODY SCROLL
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

  // HANDLE OUTSIDE CLICK
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
      setIsEditing(false);
      setJobForm(initialForm);
    }
  };

  // HANDLE ESCAPE KEY
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

  // PROVIDER VALUE
  return (
    <JobContext.Provider
      value={{
        showModal,
        setShowModal,
        jobData,
        setJobData,
        loading,  
        handleOutsideClick,
        handleCloseModal,
        handleAddJob,
        jobForm,
        isEditing,
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