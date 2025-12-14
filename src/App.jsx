import { JobProvider } from "./contexts/JobContext";
import AppContent from "./components/AppContent";

function App() {
  return (
    <JobProvider>
      <div className="relative w-full min-h-[calc(100vh-50px)] bg-background shadow-2xl rounded-3xl">
        <AppContent />
      </div>
    </JobProvider>
  );
}

export default App;
