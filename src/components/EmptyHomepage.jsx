import { CgNotes } from "react-icons/cg"
import { IoIosAdd, IoIosAddCircle } from "react-icons/io"
import { IoAdd } from "react-icons/io5"

function EmptyHomepage() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 ">
            <div className="pt-40 relative ">
                <CgNotes className="text-[20rem] text-blue-500 translate" />

                <div><IoIosAdd className="text-[6.5rem] absolute bottom-0 right-5 text-background bg-blue-500 rounded-full" /></div>

            </div>

            <div className="text-center tracking-wide ">
                <h2 className="text-[2rem] font-semibold mt-4 font-monda"> No job applications added yet </h2>
                <p className="text-text/80 mt-2 text-[1.5rem]"> Start by adding your first application. </p></div>

            <div></div>
        </section>
    )
}

export default EmptyHomepage
