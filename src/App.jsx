import { AuthProvider } from "./contexts/AuthContext";
import { JobProvider } from "./contexts/JobContext";
import { FilterProvider } from "./contexts/FilterContext";
import { useAuth } from "./contexts/AuthContext";
import AppContent from "./components/AppContent";
import AuthWrapper from "./auth/AuthWrapper";
import { Toaster } from "react-hot-toast";

function ProtectedApp() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Job Tracker...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthWrapper />;
  }

  return (
    <JobProvider>
      <FilterProvider>
        <Toaster position="top-right" />
        <div className="relative w-full min-h-[calc(100vh-50px)] bg-background shadow-2xl rounded-3xl">
          <AppContent />
        </div>
      </FilterProvider>
    </JobProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <ProtectedApp />
    </AuthProvider>
  );
}

export default App;
