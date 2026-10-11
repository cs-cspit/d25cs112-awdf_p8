import React, { lazy, Suspense, useState } from 'react';
import LoadingFallback from '../components/LoadingFallback';

// Lazy load heavy component on demand (Supplementary Problem 1)
const HeavyChart = lazy(() => import('../components/HeavyChart'));

function Analytics() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <h2 className="page-title">Analytics & Reports</h2>
      <span className="info-badge">Lazy Chunk: Analytics-[hash].js</span>

      <div className="card">
        <h3>System Overview</h3>
        <p>Total Tasks Completed: <strong>18</strong> / 24</p>
        <p>Performance Score: <strong>98%</strong> (Vite Code Splitting Active)</p>
      </div>

      <div style={{ marginTop: '16px' }}>
        {!showChart ? (
          <button onClick={() => setShowChart(true)}>
            📊 Load Heavy Analytics Chart (On Demand)
          </button>
        ) : (
          <Suspense fallback={<LoadingFallback message="Loading HeavyChart component..." />}>
            <HeavyChart />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default Analytics;
