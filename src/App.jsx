import { JobProvider } from "./contexts/JobContext";
import { FilterProvider } from "./contexts/FilterContext";
import AppContent from "./components/AppContent";

function App() {
  return (
    <JobProvider>
      <FilterProvider>
        <div className="relative w-full min-h-[calc(100vh-50px)] bg-background shadow-2xl rounded-3xl">
          <AppContent />
        </div>
      </FilterProvider>
    </JobProvider>
  );
}

export default App;
