import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Overview from './pages/Overview';
import Features from './pages/Features';
import Insights from './pages/Insights';
import Assessment from './pages/Assessment';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.location.hash !== '#footer') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-28">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/features" element={<Features />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/assessment" element={<Assessment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;