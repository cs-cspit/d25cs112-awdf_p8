import React from 'react';

function Home() {
  return (
    <div>
      <h2 className="page-title">Practical 8: Lazy Loading & Code Splitting</h2>
      <span className="info-badge">Initial Route (Entry Bundle)</span>

      <div className="card">
        <h3>Objective</h3>
        <p>
          To improve frontend performance by breaking down monolithic single-bundle JavaScript
          into smaller, on-demand chunks using <code>React.lazy()</code> and <code>&lt;Suspense&gt;</code>.
        </p>
      </div>

      <div className="card">
        <h3>Bundle Architecture</h3>
        <p style={{ marginBottom: '8px' }}>
          <strong>Before Optimization (Single Bundle):</strong>
        </p>
        <pre style={{ background: '#edf2f7', padding: '8px 12px', borderRadius: '4px', fontSize: '0.85rem' }}>
          main.bundle.js ──► [Home][Tasks][Analytics][Contact] all loaded upfront
        </pre>

        <p style={{ marginTop: '12px', marginBottom: '8px' }}>
          <strong>After Optimization (Code-Split with React.lazy):</strong>
        </p>
        <pre style={{ background: '#edf2f7', padding: '8px 12px', borderRadius: '4px', fontSize: '0.85rem' }}>
          index.js (main)   ──► loads on initial visit (~140 kB)<br/>
          Tasks.chunk.js     ──► loaded on demand when /tasks is visited<br/>
          Analytics.chunk.js ──► loaded on demand when /analytics is visited<br/>
          Contact.chunk.js   ──► loaded on demand when /contact is visited
        </pre>
      </div>

      <div className="card">
        <h3>How to Verify Code Splitting in Browser DevTools:</h3>
        <ol style={{ paddingLeft: '20px', fontSize: '0.9rem' }}>
          <li>Open Browser DevTools (<code>F12</code>) and click the <strong>Network</strong> tab.</li>
          <li>Filter by <strong>JS</strong> and reload this page. Notice only the main entry file loads.</li>
          <li>Click any navigation link above (Tasks, Analytics, or Contact).</li>
          <li>Observe a brand new JavaScript chunk file being fetched across the network dynamically!</li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
