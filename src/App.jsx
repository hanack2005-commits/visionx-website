import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import SoftwarePage from "./pages/SoftwarePage";
import CybersecurityPage from "./pages/CybersecurityPage";
import PortfolioPage from "./pages/PortfolioPage";
import TrainingPage from "./pages/TrainingPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProgramDetailPage from "./pages/ProgramDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/software" element={<SoftwarePage />} />
      <Route path="/cybersecurity" element={<CybersecurityPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/training" element={<TrainingPage />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="/services/:category/:slug" element={<ServiceDetailPage />} />
      <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
      <Route path="/training/:slug" element={<ProgramDetailPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;