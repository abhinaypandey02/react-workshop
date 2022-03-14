import React from 'react';
import CounterHooks from './Counter'

function App() {
  console.log("Render App")
  return (
    <>
      <h1>Counter</h1>
      <CounterHooks initialCount={0} />
    </>
  )
}

export default App;
