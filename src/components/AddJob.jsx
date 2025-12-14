import { useJob } from "../contexts/JobContext";
import { FaPlus } from "react-icons/fa";

function AddJob() {
  const { toggleHomepage, setToggleHomepage } = useJob();

  const handleHomepageToggle = () => {
    setToggleHomepage(false);
  };

  return (
    <button
      className="fixed bottom-0 right-0 mr-16 mb-16 xl:mr-25 xl:mb-25 2xl:mr-30 2xl:mb-30 z-100 text-background bg-blue w-20 h-20 rounded-full flex flex-col justify-center items-center px-1 py-2"
      onClick={handleHomepageToggle}
    >
      <FaPlus className="text-[3rem] rounded-full p-1 " />
      {/* <div className="text-[1rem] -translate-y-1 p-1 tracking-wide font-bold">
        Add Job
      </div> */}
    </button>
  );
}

export default AddJob;
