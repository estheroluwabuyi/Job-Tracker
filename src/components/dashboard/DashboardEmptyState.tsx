import { FaPlus } from "react-icons/fa";

export default function DashboardEmptyState() {
  return (
    <section className="mt-8 flex min-h-[calc(100vh-15rem)] flex-col items-center justify-center rounded-xl border border-border bg-bg px-8 text-center">
      <h2 className="font-manrope text-[1.7rem] sm:text-[2rem] font-bold capitalize">
        Start tracking your job search
      </h2>

      <p className="mt-3 max-w-[450px] sm:text-[1.4rem] text-text-secondary tracking-wide ">
        Add your first job application to start tracking your progress.
      </p>

      <button className="mt-6 flex items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 sm:text-[1.4rem] font-medium capitalize text-bg  hover:bg-primary/90 text-nowrap">
        <FaPlus size={14} />
        Add your first application
      </button>
    </section>
  );
}
