import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingFallback from './components/LoadingFallback';

// Route-based code splitting using React.lazy() and dynamic import()
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Tasks = lazy(() => import('./pages/Tasks'));
const Analytics = lazy(() => import('./pages/Analytics'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div className="container">
      {/* Static Header & Navbar - Always visible */}
      <header>
        <h1>Practical 8: Lazy Loading & Performance Optimization</h1>
        <p>Demonstrating route-based code splitting using React.lazy() and Suspense</p>
      </header>

      <Navbar />

      {/* Main content wrapped in Suspense with fallback UI */}
      <main>
        <Suspense fallback={<LoadingFallback message="Loading page chunk..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <div style={{ textAlign: 'center', padding: '32px' }}>
                  <h3>404 - Page Not Found</h3>
                  <p style={{ color: '#718096', marginTop: '8px' }}>The requested route does not exist.</p>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </main>

      <footer>
        <p>AWDF Practical 8 &bull; Charotar University of Science and Technology</p>
      </footer>
    </div>
  );
}

export default App;
