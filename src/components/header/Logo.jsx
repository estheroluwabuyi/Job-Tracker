import logo from "/images/logo.png";

function Logo() {
  return (
    <div className="flex items-center">
      <img src={logo} alt="Logo" className=" h-30 w-auto rounded-2xl" />
      <h1 className="text-primary text-[2.5rem] -ml-3 -mb-2 font-semibold font-space tracking-wide leading-loose">
        JobLog
      </h1>
    </div>
  );
}

export default Logo;
