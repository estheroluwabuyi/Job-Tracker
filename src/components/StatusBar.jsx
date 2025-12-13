function StatusBar() {
  return (
    <section className="flex w-full gap-5 items-center justify-between max-w-[700px] mx-auto ">
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
          className={`tracking-wide font-semibold p-3 w-[100px] border rounded-lg transition
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
    </section>
  );
}

export default StatusBar;
