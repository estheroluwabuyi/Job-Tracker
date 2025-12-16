import { useJob } from "../contexts/JobContext";

function AddJobModal() {
  const {
    handleCloseModal,
    handleOutsideClick,
    handleAddJob,
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
  } = useJob();


  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center backdrop-blur-xs z-500 p-4 xs:p-8"
      onClick={handleOutsideClick}
    >
      <form
        className="bg-white  rounded-3xl p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Title */}
        <h2 className="text-[1.8rem] font-monda font-bold text-center">
          Add Job Application
        </h2>

        {/* Position */}
        <div className="flex justify-center items-center gap-2 ">
          <label className="w-[35%] text-[1.2rem] font-semibold">
            Position
          </label>
          <input
            type="text"
            placeholder="e.g. Frontend Developer"
            className=" w-[65%] p-3 rounded-xl border border-gray/30 focus:outline-none focus:ring-2 focus:ring-blue"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>

        {/* Company */}
        <div className="flex justify-center items-center gap-2">
          <label className="w-[35%] text-[1.2rem] font-semibold">Company</label>
          <input
            type="text"
            placeholder="e.g. Google"
            className="w-[65%] p-3 rounded-xl border border-gray/30 focus:outline-none focus:ring-2 focus:ring-blue"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        {/* Application Link */}
        <div className="flex justify-center items-center gap-2">
          <label className="w-[35%] text-[1.2rem] font-semibold">
            Application Link
          </label>
          <input
            type="url"
            placeholder="https://..."
            className="w-[65%] p-3 rounded-xl border border-gray/30 focus:outline-none focus:ring-2 focus:ring-blue"
            value={applicationLink}
            onChange={(e) => setApplicationLink(e.target.value)}
          />
        </div>

        {/* Date */}
        <div className="flex justify-center items-center gap-2">
          <label className="w-[35%] text-[1.2rem] font-semibold">
            Date Applied
          </label>
          <input
            type="date"
            className="w-[65%] p-3 rounded-xl border border-gray/30 focus:outline-none focus:ring-2 focus:ring-blue"
            value={date.toISOString().split("T")[0]}
            onChange={(e) => setDate(new Date(e.target.value))}
          />
                  
        </div>

        {/* Status */}
        <div className="flex justify-center items-center gap-2">
          <label className="w-[35%] text-[1.2rem] font-semibold">Status</label>
          <select
            className="w-[65%] p-3 rounded-xl border border-gray/30 bg-white focus:outline-none focus:ring-2 focus:ring-blue"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Applied</option>
            <option>Interviewed</option>
            <option>Offered</option>
            <option>Rejected</option>
            <option>Ignored</option>
          </select>
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-2">
          <label className="text-[1.2rem] font-semibold">Notes</label>
          <textarea
            rows="4"
            placeholder="Optional notes..."
            className="p-3 rounded-xl border border-gray/30 resize-none focus:outline-none focus:ring-2 focus:ring-blue"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            className="px-6 py-3 rounded-xl border border-gray text-gray hover:bg-gray/10 transition"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue text-white font-semibold hover:bg-blue/90 transition"
            onClick={handleAddJob}
          >
            Save Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddJobModal;
