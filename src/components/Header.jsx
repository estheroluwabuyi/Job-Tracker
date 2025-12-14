function Header() {
  return (
    <section className="bg-blue  flex justify-between items-center p-8 rounded-t-3xl">
      <h1 className="text-[2rem] font-semibold tracking-wide uppercase font-monda">
        <span className="sm:hidden">Job Tracker</span>
        <span className="hidden sm:inline">Job Application Tracker</span>
      </h1>

      <button className="relative w-18 h-10 bg-gray rounded-3xl flex items-center shrink-0">
        <div className="w-9 h-9 bg-background rounded-full absolute right-0 mx-1"></div>
      </button>
    </section>
  );
}

export default Header;
