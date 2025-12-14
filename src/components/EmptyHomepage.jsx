import { CgNotes } from "react-icons/cg";

function EmptyHomepage() {
  return (
    <section className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 ">
      <div>
        <CgNotes className="text-[20rem] text-blue " />
      </div>

      <div className="text-center tracking-wide ">
        <h2 className="text-[1.8rem] font-semibold mt-4">
          No job applications added yet,
        </h2>
        <p className="text-text/80 mt-2 text-[1.4rem] font-medium">
          Start by adding your first application.
        </p>
      </div>
    </section>
  );
}

export default EmptyHomepage;
