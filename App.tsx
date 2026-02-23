import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout
import Header from './components/Layout/Header';
import Footer from './components/Home/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ZipScreen from './pages/ZipScreen';
import Shutter from './pages/Shutter';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* Application Frame Wrapper - Simulating the 'Card' look from AXIOMA */}
      <div className="bg-white p-2 md:p-4 min-h-screen flex flex-col font-sans">
        
        {/* Main Content Card with Rounded Corners */}
        <main className="flex-1 w-full relative bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_20px_60px_rgba(0,0,0,0.05)] ring-1 ring-black/5 mx-auto max-w-[2000px]">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/zip-perde" element={<ZipScreen />} />
            <Route path="/otomatik-panjur" element={<Shutter />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
          <Footer />
        </main>

      </div>
    </Router>
  );
};

export default App;