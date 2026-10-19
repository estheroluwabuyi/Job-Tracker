import { BiChevronDown } from "react-icons/bi";
import CardsHeader from "../ui/CardsHeader";

function ApplicationActivity() {
  return (
    <div className="bg-bg p-5 rounded-[10px] ">
      <div className="flex items-center justify-between gap-4">
        <CardsHeader
          title="Application Activity"
          subtitle="How much have you been applying?"
        />
        <div className="relative shrink-0">
          <select
            name="activity-period"
            id="activity-period"
            defaultValue="30"
            className="appearance-none cursor-pointer rounded-[5px] border border-border bg-bg py-2.5 pl-4 pr-10 outline-none transition-colors hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/10 sm:text-[1.5rem] font-medium font-manrope"
          >
            <option value="30">Last 30 days</option>
            <option value="7">Last 7 days</option>
            <option value="3months">Last 3 months</option>
            <option value="6months">Last 6 months</option>
          </select>

          <BiChevronDown
            size={20}
            strokeWidth={1.8}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <span className="font-manrope text-[3.5rem] font-bold">18</span>
        <span className="font-inter text-text-secondary/80 text-[1.2rem] sm:text-[1.5rem] tracking-wide mt-3">
          applications
        </span>
      </div>
    </div>
  );
}

export default ApplicationActivity;
