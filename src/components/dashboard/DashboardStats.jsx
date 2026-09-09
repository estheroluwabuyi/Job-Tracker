import {
  LuBriefcaseBusiness,
  LuCalendarCheck,
  LuBadgeCheck,
  LuCircleX,
  LuClock3,
} from "react-icons/lu";
import { useJob } from "../../contexts/JobContext";
import { defaultJobs } from "../../data/defaultJobs";

const stats = [
  {
    label: "Applied",
    status: null,
    icon: LuBriefcaseBusiness,
    bg: "bg-sky-500/5",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-600",
    gradient: "linear-gradient(45deg, #38bdf8, #0284c7)",
  },
  {
    label: "Interviewed",
    status: "Interviewed",
    icon: LuCalendarCheck,
    bg: "bg-violet-500/5",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
    gradient: "linear-gradient(45deg, #a78bfa, #7c3aed)",
  },
  {
    label: "Offered",
    status: "Offered",
    icon: LuBadgeCheck,
    bg: "bg-primary/5",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    gradient: "linear-gradient(45deg, #2dd4bf, #0f766e)",
  },
  {
    label: "Rejected",
    status: "Rejected",
    icon: LuCircleX,
    bg: "bg-red-500/5",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500",
    gradient: "linear-gradient(45deg, #fb7185, #dc2626)",
  },
  {
    label: "No Response",
    status: "No Response",
    icon: LuClock3,
    bg: "bg-amber-500/5",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
    gradient: "linear-gradient(45deg, #fbbf24, #d97706)",
  },
];

function DashboardStats() {
  const { jobData } = useJob();
  console.log(defaultJobs);

  function getCount(status) {
    if (!status) return jobData.length;

    return jobData.filter((job) => job.status === status).length;
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-7 p-6 max-w-[1300px]">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className={`${stat.bg} border border-border rounded-2xl p-6  flex flex-col justify-center gap-5 relative overflow-hidden`}
          >
            <div className="relative z-10 flex items-center justify-between">
              <p className="text-[1.8rem] font-manrope tracking-wide">
                {stat.label}
              </p>

              <div
                className={`rounded-xl p-2 ${stat.iconBg} ${stat.iconColor} flex items-center justify-center`}
              >
                <Icon size={30} strokeWidth={2} />
              </div>
            </div>

            <h2 className="relative z-10 text-[2.7rem] font-monda font-bold">
              {getCount(stat.status)}
            </h2>

            <div
              className="absolute -left-20 top-25 h-[140%] w-[150%] rotate-[-13deg] opacity-[0.07] pointer-events-none"
              style={{ background: stat.gradient }}
            />
          </div>
        );
      })}
    </section>
  );
}

export default DashboardStats;
