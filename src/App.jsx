import EmptyHomepage from "./components/EmptyHomepage"
import FilterBar from "./components/FilterBar"
import AddJob from "./components/AddJob"
import Header from "./components/Header"
import { JobProvider } from "./contexts/JobContext"

function App() {
  return (
    <JobProvider>
      <div className="p-7 bg-background min-h-screen flex flex-col justify-center">
        <div className="w-full  bg-white shadow-2xl rounded-3xl">

          {/*  HEADER*/}
          <Header />

          {/*  MAIN CONTENT */}
          <div className="p-10 flex flex-col">
            <FilterBar />
            <EmptyHomepage />
            <AddJob />

          </div>

        </div>
      </div>
    </JobProvider>
  )
}

export default App
