import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { JobProvider } from "./contexts/JobContext";
import { FilterProvider } from "./contexts/FilterContext";
import { AuthProvider } from "./contexts/AuthContext";
import NoPageFound from "./pages/NoPageFound";
import Features from "./pages/Features";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Applications from "./pages/Applications";
import Analytics from "./pages/Analytics";
import SavedJobs from "./pages/SavedJobs";
import Settings from "./pages/Settings";

function App() {
  return (
    <AuthProvider>
      <JobProvider>
        <FilterProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                fontSize: "16px",
                fontWeight: "500",
                padding: "13px 20px",
                borderRadius: "8px",
                fontFamily: "inherit",
              },

              success: {
                style: {
                  background: "#0f766e",
                  color: "#fff",
                  fontSize: "1.3rem",
                },
                iconTheme: {
                  primary: "#fff",
                  secondary: "#0f766e",
                },
              },
              error: {
                style: {
                  background: "#ef4444",
                  color: "#fff",
                  fontSize: "1.3rem",
                },
              },
            }}
          />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/features" element={<Features />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/login" element={<LoginForm />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/saved-jobs" element={<SavedJobs />} />
                <Route path="/settings" element={<Settings />} />
              </Route>

              <Route path="*" element={<NoPageFound />} />
            </Routes>
          </BrowserRouter>
        </FilterProvider>
      </JobProvider>
    </AuthProvider>
  );
}

export default App;
