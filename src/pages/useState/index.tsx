import React from 'react'
import ReactDOM from 'react-dom'

let state: any = []
let setters: any = []
let isFirst = true
let cursor = 0

function createSetter(cursor: number) {
  return function (newValue: any) {
    state[cursor] = newValue
    ReactDOM.render(<UseStatePage />, document.getElementById('root'))
  }
}

function useState(initValue: any) {
  if (isFirst) {
    state.push(initValue)
    setters.push(createSetter(cursor))
  }

  const value = state[cursor]
  const setter = setters[cursor]

  return [
    value,
    setter
  ]

}

function UseStatePage() {

  const [name, setName] = useState('Nick')

  return (
    <div id="root">
      <button onClick={() => setName('Nick-Update')}>{name}</button>
    </div>
  )
}

export default UseStatePage
