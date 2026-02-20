import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { JobProvider } from "./contexts/JobContext";
import { FilterProvider } from "./contexts/FilterContext";
import { AuthProvider } from "./contexts/AuthContext";
import NoPageFound from "./pages/NoPageFound";
import Features from "./pages/Features";

function App() {
  return (
    <AuthProvider>
      <JobProvider>
        <FilterProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<Features />} />
              <Route path="*" element={<NoPageFound />} />
            </Routes>
          </BrowserRouter>
        </FilterProvider>
      </JobProvider>
    </AuthProvider>
  );
}

export default App;
