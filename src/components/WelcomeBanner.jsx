import { useAuth } from "../contexts/AuthContext";
import { useJob } from "../contexts/JobContext";
import { getGreeting, getUserFirstName } from "../helper/getGreeting";
import { getThirdStat } from "../helper/JobStats";

function WelcomeBanner() {
  const { user } = useAuth();
  const { jobData } = useJob?.() || { jobData: [] };

  const stats = {
    total: jobData.length,
    active: jobData.filter((j) => ["Applied", "Interviewed"].includes(j.status))
      .length,
    offers: jobData.filter((j) => j.status === "Offered").length,
    applied: jobData.filter((j) => j.status === "Applied").length,
    interviews: jobData.filter((j) => j.status === "Interviewed").length,
  };

  const thirdStat = getThirdStat(stats);
  const firstName = getUserFirstName(user);

  return (
    <div className="mb-8 px-6 py-8 bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
      {/* Greeting */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          {getGreeting()}, <span className="text-blue-600">{firstName}</span>
        </h1>
        <p className="text-gray-600 text-lg">
          {`Tracking ${stats.total} job${stats.total !== 1 ? "s" : ""}`}
          <span className="ml-2 text-green-500 font-medium">{` • ${stats.active} active`}</span>
        </p>
      </div>

      {/* Stats Grid */}
      {stats.total > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {/* Total Jobs */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 text-center hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="text-4xl font-bold text-blue-600">
                {stats.total}
              </div>
            </div>
            <div className="text-gray-700 font-medium text-lg">Total {`Job${stats.total !== 1 ? "s" : ""}`}</div>
            <div className="text-sm text-gray-500 mt-1">
              Applications tracked
            </div>
          </div>

          {/* Active */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100 text-center hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="text-4xl font-bold text-amber-600">
                {stats.active}
              </div>
            </div>
            <div className="text-gray-700 font-medium text-lg">Active</div>
            <div className="text-sm text-gray-500 mt-1">In progress</div>
          </div>

          <div
            className={`bg-white p-6 rounded-xl shadow-sm border ${
              thirdStat.color === "green"
                ? "border-green-100"
                : thirdStat.color === "purple"
                  ? "border-purple-100"
                  : "border-blue-100"
            } text-center hover:shadow-md transition-shadow duration-300`}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div
                className={`text-4xl font-bold ${
                  thirdStat.color === "green"
                    ? "text-green-600"
                    : thirdStat.color === "purple"
                      ? "text-purple-600"
                      : "text-blue-600"
                }`}
              >
                {thirdStat.value}
              </div>
            </div>
            <div className="text-gray-700 font-medium text-lg">
              {thirdStat.label}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {thirdStat.subtext}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WelcomeBanner;
