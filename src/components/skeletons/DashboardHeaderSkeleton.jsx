export default function DashboardHeaderSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center gap-4">
        <div className="h-8 sm:h-12 w-56 sm:w-80 rounded bg-border/60" />
        <div className="h-6 sm:h-12 w-6 sm:w-8 rounded bg-border/60" />
      </div>
      <div className="mt-3 h-5 sm:h-10 w-48 sm:w-72 rounded bg-border/60" />
    </div>
  );
}
