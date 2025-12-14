function StatusBar() {
  return (
    <section className="w-full overflow-x-auto sm:overflow-visible scrollbar-hide status-fade sm:[mask-image:none] sm:[-webkit-mask-image:none]">
      <div className="flex gap-4 items-center sm:justify-center max-w-[700px] mx-auto px-1 ">
        {[
          "All Jobs",
          "Applied",
          "Interviewed",
          "Offered",
          "Rejected",
          "Ignored",
        ].map((status, i) => (
          <button
            key={i}
            className={`whitespace-nowrap tracking-wide font-semibold px-4 py-2 rounded-full border transition
              ${
                i === 0
                  ? "bg-blue text-white border-blue"
                  : "bg-blue/5 text-blue border-blue hover:bg-blue hover:text-white"
              }
            `}
          >
            {status}
          </button>
        ))}
      </div>
    </section>
  );
}

export default StatusBar;
