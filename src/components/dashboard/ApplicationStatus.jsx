import { useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import CardsHeader from "../ui/SectionHeader";
import { useJob } from "../../contexts/JobContext";

const statusCategories = [
  { id: "applied", label: "Applied", color: "#3b82f6", matches: ["applied"] },
  {
    id: "interviewed",
    label: "Interviewed",
    color: "#7c3aed",
    matches: ["interviewed", "interview"],
  },
  {
    id: "rejected",
    label: "Rejected",
    color: "#dc2626",
    matches: ["rejected"],
  },
  {
    id: "offered",
    label: "Offered",
    color: "#0f766e",
    matches: ["offered", "offer"],
  },
  {
    id: "noResponse",
    label: "No Response",
    color: "#d97706",
    matches: ["no response", "no_response", "noresponse"],
  },
];

function countApplicationsByStatus(jobs) {
  return statusCategories.map((category) => {
    const count = jobs.filter((job) =>
      category.matches.includes(
        String(job.status ?? "")
          .trim()
          .toLowerCase(),
      ),
    ).length;

    return { ...category, count };
  });
}

function ApplicationStatus() {
  const { jobData, loading } = useJob();

  const statusCounts = useMemo(
    () => countApplicationsByStatus(jobData ?? []),
    [jobData],
  );

  const totalApplications = statusCounts.reduce(
    (sum, category) => sum + category.count,
    0,
  );

  const pieData = statusCounts.filter((category) => category.count > 0);

  return (
    <div className="bg-bg p-7 rounded-[10px]">
      <CardsHeader
        title="Application Status"
        subtitle="Where do your applications currently stand?"
      />

      {loading ? (
        <div className="h-60 flex items-center justify-center text-text-secondary">
          Loading...
        </div>
      ) : totalApplications === 0 ? (
        <div className="h-60 flex items-center justify-center text-text-secondary">
          No applications yet
        </div>
      ) : (
        <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row">
          <div className="relative w-full sm:w-1/2">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="count"
                  nameKey="label"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={2}
                  stroke="none"
                >
                  {pieData.map((category) => (
                    <Cell key={category.id} fill={category.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center font-manrope">
              <span className="text-[2.8rem] font-bold leading-none">
                {totalApplications}
              </span>
              <span className="mt-1 text-[1.2rem] text-text-secondary">
                total
              </span>
            </div>
          </div>

          <ul className="w-full sm:w-1/2 space-y-3 font-manrope">
            {statusCounts.map((category) => {
              const percentage = Math.round(
                (category.count / totalApplications) * 100,
              );

              return (
                <li
                  key={category.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full shrink-0"
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="font-medium">{category.label}</span>
                  </div>
                  <div className="flex items-center gap-15 text-text-secondary tabular-nums">
                    <span className="w-8 text-right font-bold">
                      {category.count}
                    </span>
                    <span className="w-12 text-right">{percentage}%</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ApplicationStatus;
