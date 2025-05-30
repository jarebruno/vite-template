import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  
  return (
    <button
      className='text-gray-500 hover:cursor-pointer'
      onClick={() => setCount((count) => count + 1)}
      data-testid='counter-button'
    >
      Total clicks {count}
    </button>
  )
}