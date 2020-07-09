import React, { useEffect, useState, useCallback, useRef } from 'react'

function useDebounce(fn: () => void, delay: number) {
  
  let timer = useRef(null)

  return useCallback(function () {
    let args = arguments
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }, [])

}

function useDebouncePage() {

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleClick = useDebounce(function () {
    setCounter1(counter => counter + 1)
  }, 1000)

  useEffect(function () {
    const t = setInterval(() => {
      setCounter2(x => x + 1)
    }, 500);
    return clearInterval.bind(undefined, t)
  }, [])


  return (
    <div>
      <button
        onClick={handleClick}
      >click</button>
      <div>{counter1}</div>
      <div>{counter2}</div>
    </div>
  )

}

export default useDebouncePage
