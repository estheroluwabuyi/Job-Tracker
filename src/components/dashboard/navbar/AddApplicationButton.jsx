import { FaPlus } from "react-icons/fa";

function AddApplicationButton() {
  return (
    <button
      className="
        flex items-center justify-center shrink-0
        w-12 h-12 sm:w-auto sm:h-auto
        sm:px-5 sm:py-3.5
        rounded-xl
        bg-primary text-bg
        text-[1.4rem] font-medium
        hover:bg-primary/90
        transition-colors
        gap-3
      "
      aria-label="Add application"
      title="Add application"
    >
      <FaPlus size={14} />

      <span className="hidden md:inline">Add Application</span>
    </button>
  );
}

export default AddApplicationButton;
