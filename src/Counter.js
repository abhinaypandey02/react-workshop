import React, { useState, useEffect, useRef } from 'react'

export default function CounterHooks({ initialCount }) {
  const [count, setCount] = useState(initialCount)
  const [even, setEven] = useState(count%2===0)
  const resetVal = useRef(null)
  useEffect(() => {
    setEven(count%2===0)
  }, [count])
  return (
    <>
      Reset Counter Value
      <form onSubmit={(e) => {
        e.preventDefault()
        if(resetVal.current.value!=='')
        setCount(parseInt(resetVal.current.value))
      }}>
        <input type={"number"} ref={resetVal}></input>
        <button type='submit'>Reset Counter Value</button>
      </form>      
      <div>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        {even && <div>The current count is even</div>}
      </div>
    </>
  )
}