import { useEffect, useState } from "react"

const Counter = () => {
  // state variables
  const [count, setCount] = useState(10)
  const [count1, setCount1] = useState(10)

  useEffect(() => {
    console.log('effect called')
  }, [count, count1])

  // 1. empty dependancy array - only on first render
  // 2. dependancy array with state - on first render, when state changes
  // 3. no dependancy array - on every render

  console.log('counter rendered')
  const increment = () => {
    setCount(count + 1)
  }
  const increment1 = () => {
    setCount1(count1 + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <>
      <div>Count: {count}</div>
      <div>Count: {count1}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={increment1}>Increment Count1</button>
      {count > 0 && (
        <>
          <button onClick={decrement}>Decrement</button>
          <div>Count is {count % 2 === 0 ? "even" : "odd"}</div>
        </>
      )}
      {/* count is odd / even */}
    </>
  )
}

export default Counter