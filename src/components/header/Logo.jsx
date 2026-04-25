import logo from "/images/logo.png";

function Logo({
  logoHeight = "h-17 xs:h-27",
  textSize = "text-[1.3rem] xs:text-[2.3rem]",
  marginLeft = "-ml-6",
}) {
  return (
    <div className={`flex items-center ${marginLeft}`}>
      <img
        src={logo}
        alt="Logo"
        className={`w-auto rounded-2xl ${logoHeight}`}
      />
      <h1
        className={`text-primary ${textSize} ${marginLeft} -mb-2 font-bold font-rubik tracking-tight`}
      >
        JobLog
      </h1>
    </div>
  );
}

export default Logo;
