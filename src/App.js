import React from 'react';
import CounterHooks from './Counter'

function App() {
  console.log("Render App")
  return (
    <>
      Counter
      <CounterHooks initialCount={0} />
    </>
  )
}

export default App;
