function FilterBar() {
    return (
        <section className="flex w-full gap-5 items-center justify-between max-w-[700px] mx-auto ">
            {['All Jobs', 'Applied', 'Interviewed', 'Offered', 'Rejected', 'Ignored'].map((status, i) => (
                <button key={i} className={`tracking-wide font-semi-bold bg-blue/5 text-blue p-3 w-[100px] border border-blue rounded-lg ${i === 0 ? 'bg-blue! text-white ' : ''}`}>{status}</button>
            ))}
        </section>
    )
}

export default FilterBar
