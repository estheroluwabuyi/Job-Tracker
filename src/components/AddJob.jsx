import { useJob } from "../contexts/JobContext";
import { FaPlus } from "react-icons/fa";

function AddJob() {
    const { test, setTest } = useJob();

    const handleClick = () => {
        setTest('YAY!!!');
        console.log(test)
    }

    return (
        <button className="self-end text-background bg-blue w-25.5 h-25.5 rounded-full flex flex-col justify-center items-center px-1 py-2 mt-10" onClick={handleClick}>
            <FaPlus className="text-[3rem] rounded-full p-1 " />
            <div className="text-[1rem] -translate-y-1 p-1 tracking-wide font-bold">Add Job</div>
        </button>
    )
}

export default AddJob
