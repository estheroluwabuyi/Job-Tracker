import { MdError } from "react-icons/md";
import { useJob } from "../contexts/JobContext";

function DeleteJobModal() {
  const {
    showDeleteModal,
    jobToDelete,
    confirmDelete,
    cancelDelete,
    isDeleting,
  } = useJob();

  return (
    showDeleteModal && (
      <div
        className="fixed inset-0 bg-black/40 flex items-center justify-center backdrop-blur-xs z-600 p-4"
        onClick={(e) => e.target === e.currentTarget && cancelDelete()}
      >
        <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full">
          <h3 className="text-[1.8rem] font-monda font-bold mb-4">
            Delete Application
          </h3>

          <p className="text-[1.2rem] text-gray-700 mb-2">
            Are you sure you want to delete:
          </p>

          {jobToDelete && (
            <div className="bg-gray-50 p-4 rounded-xl mb-6">
              <p className="font-semibold text-[1.2rem]">
                {jobToDelete.position} at{" "}
                <span className="text-gray-600"> {jobToDelete.company}</span>
              </p>
            </div>
          )}

          <p className="text-gray-600 mb-8 flex items-center gap-2">
            <span className="text-red-600 text-[1.5rem]">
              <MdError />
            </span>
            This action cannot be undone.
          </p>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              disabled={isDeleting}
              className="px-6 py-3 rounded-xl border border-gray text-gray hover:bg-gray/10 transition disabled:opacity-50"
              onClick={cancelDelete}
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={isDeleting}
              className="px-6 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition disabled:opacity-50 flex items-center gap-2"
              onClick={confirmDelete}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default DeleteJobModal;
