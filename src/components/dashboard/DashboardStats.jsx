import { useJob } from "../../contexts/JobContext";
import { stats } from "../../data/stats";

function DashboardStats() {
  const { jobData, loading } = useJob();

  function getCount(status) {
    if (status === "Applied") return jobData.length;

    return jobData.filter((job) => job.status === status).length;
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-7 py-8 max-w-[1300px]">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className={`${stat.bg} border border-border rounded-2xl p-6  flex flex-col justify-center gap-5 relative overflow-hidden`}
          >
            <div className="relative z-10 flex items-center justify-between">
              <p className="text-[1.7rem] tracking-wide">{stat.label}</p>

              <div
                className={`rounded-xl p-2 ${stat.iconBg} ${stat.iconColor} flex items-center justify-center`}
              >
                <Icon size={30} strokeWidth={2} />
              </div>
            </div>

            <h2 className="relative z-10 text-[2rem] sm:text-[2.5rem] font-manrope font-bold">
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
