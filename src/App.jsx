import { JobProvider } from "./contexts/JobContext";
import AppContent from "./components/AppContent";

function App() {
  return (
    <JobProvider>
      <div className="p-7 bg-background min-h-screen flex flex-col justify-center">
        <AppContent />
      </div>
    </JobProvider>
  );
}

export default App;
