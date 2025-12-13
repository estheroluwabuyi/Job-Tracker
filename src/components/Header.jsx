function Header() {
    return (
        <section className="bg-blue  flex justify-between items-center p-8 rounded-t-3xl">
            <h1 className="text-[2rem] font-semibold tracking-wide uppercase font-monda"> Job Application Tracker</h1>


            <div className="relative w-18 h-10 bg-gray-300 rounded-3xl flex items-center">
                <div className="w-9 h-9 bg-background rounded-full absolute right-0 mx-1"></div>
            </div>
        </section>
    )
}

export default Header
