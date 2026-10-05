import React, { useState, useEffect } from 'react';

function FunctionalCounter({ initialValue = 0, label }) {
  // State using useState hook
  const [count, setCount] = useState(initialValue);

  // Lifecycle: runs after every render (like componentDidMount + componentDidUpdate)
  useEffect(() => {
    console.log(`[Functional] Count changed to: ${count}`);
  }, [count]);

  // Lifecycle: runs once on mount (like componentDidMount)
  useEffect(() => {
    console.log('[Functional] Component mounted');
    return () => console.log('[Functional] Component unmounted');
  }, []);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return (
    <div style={{ border: '2px solid green', padding: '16px', margin: '10px' }}>
      <h2>Functional Component {label && `- ${label}`}</h2>
      <p>Count: <strong>{count}</strong></p>
      <button onClick={increment}>+ Increment</button>{' '}
      <button onClick={decrement}>- Decrement</button>{' '}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default FunctionalCounter;