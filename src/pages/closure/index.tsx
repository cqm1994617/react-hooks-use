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
  const [value, setValue] = useState(initValue)
  const ref = useRef(initValue)

  useEffect(() => {
    setValue(ref.current)
  }, [ref.current])

  const setStateValue = (data: any) => {
    console.log(ref.current)
    ref.current = data
    console.log(ref.current)
  }

  return {
    value,
    refValue: ref.current,
    setStateValue
  }

}

function ClosurePage() {

  const [data, setData] = useState(0)
  const [state, dispatch] = useReducer(reducer, 0)
  const {value, refValue, setStateValue} = useRefState(0)

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
    setStateValue(10)
    setTimeout(() => {
      console.log(refValue)
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
