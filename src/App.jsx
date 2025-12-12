import EmptyHomepage from "./components/EmptyHomepage"
import FilterBar from "./components/FilterBar"

function App() {
  return (
    <div className="p-7 bg-background">
      <div className="min-h-screen w-full bg-white shadow-2xl rounded-3xl">

        {/*  HEADER*/}
        <section className="bg-blue-500  flex justify-between items-center p-8 rounded-t-3xl">
          <h1 className="text-[2rem] font-semibold tracking-wide uppercase font-monda"> Job Application Tracker</h1>


          <div className="relative w-18 h-10 bg-gray-300 rounded-3xl flex items-center">
            <div className="w-9 h-9 bg-background rounded-full absolute right-0 mx-1"></div>
          </div>
        </section>

        {/*  MAIN CONTENT */}
        <div className="p-10">
          <FilterBar />
          <EmptyHomepage />
        </div>

      </div>
    </div>
  )
}

export default App
