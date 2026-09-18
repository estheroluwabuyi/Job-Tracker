import { stats } from "../../data/stats";

export default function StatusBadge({ status }) {
  const statusStyle = stats.find((item) => item.status === status);

  return (
    <span
      className={`inline-flex rounded-[7px] tracking-wide font-manrope px-6 py-2 font-medium ${statusStyle?.iconBg} ${statusStyle?.iconColor}`}
    >
      {status}
    </span>
  );
}
