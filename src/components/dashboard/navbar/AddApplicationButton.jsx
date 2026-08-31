import { FaPlus } from "react-icons/fa";

function AddApplicationButton() {
  return (
    <button className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-primary text-bg text-[1.4rem] font-medium hover:bg-primary/90 transition-colors">
      <FaPlus size={14} />
      Add Application
    </button>
  );
}

export default AddApplicationButton;
