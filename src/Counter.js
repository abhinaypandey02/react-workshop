import React, { useState, useEffect, useRef } from 'react'

export default function CounterHooks({ initialCount }) {
  const [count, setCount] = useState(initialCount)
  const [even, setEven] = useState(count%2===0);
  const [logs,setLogs] = useState([]);
  const resetVal = useRef(null)
  useEffect(() => {
    setEven(count%2===0)
  }, [count])
  return (
    <>
      Reset Counter Value
      <form onSubmit={(e) => {
        e.preventDefault()
        if(resetVal.current.value!=='') {
            const val=parseInt(resetVal.current.value);
            setCount(val)
            setLogs(old=>[...old,val])
        }
      }}>
        <input type={"number"} ref={resetVal}/>
        <button type='submit'>Reset Counter Value</button>
      </form>
      <div>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        {even && <div>The current count is even</div>}
          <h4>Logs:</h4>
          <div>
              {logs.map((log,index)=><div key={index}>
                  Reset to {log}
              </div>)}
          </div>
      </div>
    </>
  )
}
