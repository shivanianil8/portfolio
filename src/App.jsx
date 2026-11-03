import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="min-h-[calc(100vh-280px)] animate-fade-in">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<ProjectDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0B0E14] text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col justify-between overflow-x-hidden relative">
        <Navbar />
        <main className="flex-1 overflow-x-hidden relative z-10">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
