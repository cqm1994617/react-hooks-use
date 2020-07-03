import React, { useState, useEffect, useRef } from 'react'

function useRefState(initValue: any) {
  const [state, setState] = useState(initValue)
  const stateRef = useRef(initValue)

  useEffect(() => {
    stateRef.current = state
  }, [state])

  return [
    state,
    stateRef,
    setState
  ]

}

function ClosurePage() {

  const [data, setData] = useState(0)
  const [value, valueRef, setValue] = useRefState(0)

  const testClick = () => {
    setData(10)
    setTimeout(() => {
      console.log(data)
    }, 0)
  }
  const testClick2 = () => {
    setValue(10)
    setTimeout(() => {
      console.log(value, valueRef.current)
    }, 10)
  }

  return (
    <div>
      <div onClick={testClick}>1 --> {data}</div>
      <div onClick={testClick2}>2 --> {value}</div>
    </div>
  )
}

export default ClosurePage
