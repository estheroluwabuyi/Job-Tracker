import { IoIosAdd } from "react-icons/io"
import { useJob } from "../contexts/JobContext";

function AddJob() {
    const { test, setTest } = useJob();

    const handleClick = () => {
        setTest('YAY!!!');
        console.log(test)
    }

    return (
        <button className="self-end text-background bg-blue w-30 h-30 rounded-full flex flex-col justify-center items-center px-1 py-2 mt-10" onClick={handleClick}>
            <IoIosAdd className="text-[5rem] rounded-full " />
            <div className="text-[1.07rem] -translate-y-3 tracking-wide font-bold">Add Job</div>
        </button>
    )
}

export default AddJob
