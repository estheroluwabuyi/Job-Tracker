import { Link } from "react-router-dom";
import { useJob } from "../../contexts/JobContext";
import { formatDateForDisplay } from "../../helper/formatDate";
import TableSkeleton from "../skeletons/TableSkeleton";
import StatusBadge from "../ui/StatusBadge";

function RecentApplicationsTable() {
  const { jobData, loading } = useJob();

  console.log(jobData);

  return (
    <section className="py-4 overflow-x-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[1.5rem] sm:text-[1.8rem] font-medium tracking-tight font-manrope">
          Recent Applications
        </h2>

        <Link
          to="/applications"
          className="rounded-lg px-8 py-3 sm:text-[1.5rem] font-medium text-primary transition-colors hover:bg-primary/10"
        >
          View All
        </Link>
      </div>

      <table
        className="w-full border-collapse bg-bg "
        style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
      >
        <thead className="text-left text-text-secondary border-b border-border sm:text-[1.5rem] table-fixed font-semibold font-manrope">
          <tr>
            <th className="w-[25%] px-8 py-6 ">Company</th>
            <th className="w-[25%] px-8 py-6 ">Position</th>
            <th className="w-[16.67%] px-8 py-6 ">Status</th>
            <th className="w-[16.67%] px-8 py-6 ">Applied</th>
            <th className="w-[16.67%] px-8 py-6">Added</th>
          </tr>
        </thead>

        <tbody className="text-[1rem] sm:text-[1.4rem]">
          {loading ? (
            <TableSkeleton />
          ) : (
            jobData.slice(0, 5).map((job) => (
              <tr
                key={job.id}
                className="border-b border-border last:border-b-0"
              >
                <td className="px-8 py-5">{job.company}</td>
                <td className="px-8 py-5">{job.position}</td>

                <td className="px-8 py-5">
                  <StatusBadge status={job.status} />
                </td>

                <td className="px-8 py-5">{formatDateForDisplay(job.date)}</td>
                <td className="px-8 py-4">
                  {formatDateForDisplay(job.created_at)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}

export default RecentApplicationsTable;
