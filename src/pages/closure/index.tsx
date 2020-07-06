import React, { useState, useEffect, useRef, useReducer } from 'react'

interface ActionType {
  type?: string
}

interface StateType {
  type?: string
}

const initalState = {
  data: 0
}

function reducer(state = initalState, action: ActionType) {
  switch(action.type) {
    case 'ADD':
      return {
        data: state.data + 1
      }
    default:
      return {
        ...state
      }
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
  const [state, dispatch] = useReducer(reducer, {
    data: 0
  })
  const [value, valueRef, setValue] = useRefState(0)

  const testClick = () => {
    setData(data + 1)
    setTimeout(() => {
      console.log(data)
    }, 0)
  }
  const testClick2 = () => {
    setValue(value + 1)
    setTimeout(() => {
      console.log(value, valueRef.current)
    }, 10)
  }
  const testClick3 = () => {

    setTimeout(() => {
      dispatch({
        type: 'ADD'
      })
    }, 100)

  }

  return (
    <div>
      <div onClick={testClick}>1 --> {data}</div>
      <div onClick={testClick2}>2 --> {value}</div>
      <div onClick={testClick3}>3 --> {state.data}</div>
      <div>
      </div>
    </div>
  )
}

export default ClosurePage
