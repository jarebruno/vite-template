import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  
  return (
    <button data-testid='counter-button' onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
}