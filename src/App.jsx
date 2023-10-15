import './App.scss';
import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from './components/Image';
import Loading from './components/Loading';

const LazyHome = lazy(() => import('./pages/Home'));
const LazyAbout = lazy(() => import('./pages/About'));
const LazyDesign = lazy(() => import('./pages/Design'));
const LazyWork = lazy(() => import('./pages/Work'));

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className={`app ${showContent ? 'show' : ''}`}>
        <Navbar />
        <Image />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={<LazyHome />} />
            <Route exact path="/about" element={<LazyAbout />} />
            <Route exact path="/design" element={<LazyDesign />} />
            <Route exact path="/work" element={<LazyWork />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;