function SectionsHeader({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-[1.5rem] sm:text-[1.8rem] font-semibold tracking-tight font-manrope">
        {title}
      </h2>
      <p className="mt-2 text-[1.2rem] sm:text-[1.5rem] text-text-secondary/80 xs:text-nowrap font-medium">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionsHeader;
