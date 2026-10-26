function SectionHeader({title, subtitle}) {
  return <div>
          <h2 className="text-[1.5rem] sm:text-[1.8rem] font-semibold tracking-tight font-manrope">
            {title}
          </h2>
          <p className="mt-1 text-[1.2rem] sm:text-[1.3rem] text-text-secondary/70 xs:text-nowrap">
            {subtitle}
          </p>
        </div>
}

export default SectionHeader;
