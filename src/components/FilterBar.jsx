function FilterBar() {
    return (
        <section className="flex gap-5 items-center justify-between max-w-[700px] mx-auto">
            {['All Jobs', 'Applied', 'Interviewed', 'Offered', 'Rejected', 'Ignored'].map((status, i) => (
                <button key={i} className={`tracking-wide font-semi-bold bg-blue-500/5 text-blue-500 p-3 w-[100px] border border-blue-500 rounded-lg ${i === 0 ? 'bg-blue-500! text-white ' : ''}`}>{status}</button>
            ))}
        </section>
    )
}

export default FilterBar
