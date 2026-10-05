import React, { useState } from 'react';
import FunctionalCounter from './FunctionalCounter';
import ClassCounter from './ClassCounter';

function App() {
  const [showComponents, setShowComponents] = useState(true);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>React Components Demo</h1>

      <button onClick={() => setShowComponents(!showComponents)}>
        {showComponents ? 'Unmount Components' : 'Mount Components'}
      </button>

      {showComponents && (
        <>
          <FunctionalCounter initialValue={10} label="Hooks" />
          <ClassCounter initialValue={20} label="Lifecycle" />
        </>
      )}
    </div>
  );
}

export default App;