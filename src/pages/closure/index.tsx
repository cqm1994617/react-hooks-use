import React, { useState, useEffect, useReducer, useRef } from 'react'

interface ActionType {
  type?: string;
}

function reducer(state = 0, action: ActionType) {
  switch (action.type) {
    case 'SET':
      return 10
  }
}

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
  const [state, dispatch] = useReducer(reducer, 0)
  const [value, valueRef, setValue] = useRefState(0)

  const testClick = () => {
    setData(10)
    setTimeout(() => {
      console.log(data)
    }, 0)
  }

  const testClick2 = () => {
    dispatch({
      type: 'SET'
    })
    setTimeout(() => {
      console.log(state)
    }, 0)
  }

  const testClick3 = () => {
    setValue(10)
    setTimeout(() => {
      console.log(value, valueRef.current)
    }, 10)
  }

  return (
    <div>
      <div onClick={testClick}>1 --> {data}</div>
      <div onClick={testClick2}>2 --> {state}</div>
      <div onClick={testClick3}>3 --> {value}</div>
    </div>
  )
}

export default ClosurePage
