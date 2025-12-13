import { CgNotes } from "react-icons/cg"
import { FaPlus } from "react-icons/fa"

function EmptyHomepage() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 ">
            <div className="pt-25 relative ">
                <CgNotes className="text-[20rem] text-blue " />

                <div className=" border-5 rounded-full border-blue bg-background absolute bottom-0 right-5 p-2">
                    <FaPlus className="text-[3rem]  text-blue " /></div>

            </div>

            <div className="text-center tracking-wide ">
                <h2 className="text-[2rem] font-semibold mt-4"> No job applications added yet </h2>
                <p className="text-text/80 mt-2 text-[1.5rem] font-medium"> Start by adding your first application. </p></div>
        </section>
    )
}

export default EmptyHomepage
