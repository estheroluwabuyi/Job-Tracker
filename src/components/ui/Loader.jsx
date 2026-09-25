import TableSkeleton from "../skeletons/TableSkeleton";

function Loader() {
  return (
    <div className="flex justify-center items-center h-[70vh] bg-bg">
      <div className="w-14 h-14 rounded-full border-4 border-transparent border-t-primary border-r-primary/40 animate-spin -ml-5" />
    </div>
  );
}

export default Loader;
