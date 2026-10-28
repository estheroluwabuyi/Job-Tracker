import { useMemo, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import CardsHeader from "../ui/SectionHeader";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useJob } from "../../contexts/JobContext";

const periods = {
  7: { label: "Last 7 days", unit: "day", count: 7 },
  30: { label: "Last 30 days", unit: "day", count: 30 },
  "3months": { label: "Last 3 months", unit: "week", count: 13 },
  "6months": { label: "Last 6 months", unit: "month", count: 6 },
  "12months": { label: "Last 12 months", unit: "month", count: 12 },
  all: { label: "All time", unit: "month", count: null },
};

const getJobDate = (job) => new Date(job.date);

const startOfWeek = (d) => {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  x.setDate(x.getDate() - ((x.getDay() + 6) % 7));
  return x;
};

const dayKey = (d) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
const weekKey = (d) => dayKey(startOfWeek(d));
const monthKey = (d) => `${d.getFullYear()}-${d.getMonth()}`;

const KEY_FN = { day: dayKey, week: weekKey, month: monthKey };

function buildChartData(jobs, periodId) {
  const { unit } = periods[periodId];
  let { count } = periods[periodId];
  const now = new Date();

  if (count === null) {
    const times = jobs
      .map((j) => getJobDate(j).getTime())
      .filter((t) => !Number.isNaN(t));
    const earliest = times.length ? new Date(Math.min(...times)) : now;
    count =
      (now.getFullYear() - earliest.getFullYear()) * 12 +
      (now.getMonth() - earliest.getMonth()) +
      1;
  }

  const buckets = [];

  for (let i = count - 1; i >= 0; i--) {
    let d;
    let label;

    if (unit === "day") {
      d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      label = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    } else if (unit === "week") {
      d = startOfWeek(now);
      d.setDate(d.getDate() - i * 7);
      label = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    } else {
      d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      label = d.toLocaleDateString("en-US", {
        month: "short",
        year: "2-digit",
      });
    }

    buckets.push({ key: KEY_FN[unit](d), date: label, applications: 0 });
  }

  const lookup = new Map(buckets.map((b) => [b.key, b]));

  jobs.forEach((job) => {
    const d = getJobDate(job);
    if (Number.isNaN(d.getTime())) return;
    const bucket = lookup.get(KEY_FN[unit](d));
    if (bucket) bucket.applications += 1;
  });

  return buckets;
}

function ApplicationActivity() {
  const { jobData, loading } = useJob();
  const [period, setPeriod] = useState("12months");

  const chartData = useMemo(
    () => buildChartData(jobData ?? [], period),
    [jobData, period],
  );

  const total = chartData.reduce((sum, b) => sum + b.applications, 0);

  return (
    <div className="bg-bg p-7 rounded-[10px]">
      <div className="flex flex-col sm:flex-row  items-center justify-between gap-4">
        <CardsHeader
          title="Application Activity"
          subtitle="How much have you been applying?"
        />
        <div className="relative shrink-0">
          <select
            name="activity-period"
            id="activity-period"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="appearance-none cursor-pointer rounded-[5px] border border-border bg-bg py-2.5 pl-4 pr-10 outline-none transition-colors hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/10 sm:text-[1.5rem] font-medium font-manrope"
          >
            {Object.entries(periods).map(([value, { label }]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>

          <BiChevronDown
            size={20}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 font-manrope">
        <span className="text-[3.5rem] font-bold">{total}</span>
        <span className="text-text-secondary/80 text-[1.2rem] sm:text-[1.5rem] tracking-wide mt-4.5 font-medium">
          {total === 1 ? "application" : "applications"}
        </span>
      </div>

      {loading ? (
        <div className="h-60 flex items-center justify-center text-text-secondary">
          Loading...
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={240}>
          <BarChart
            data={chartData}
            margin={{ top: 12, right: 8, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11 }}
              interval="preserveStartEnd"
              minTickGap={15}
            />
            <YAxis
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar
              dataKey="applications"
              name="Applications"
              fill="#0f766e"
              radius={[4, 4, 0, 0]}
              maxBarSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ApplicationActivity;
