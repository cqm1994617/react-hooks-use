import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'



function UseStatePage() {

  const [name, setName] = useState('Nick')

  const click = (e:any) => {
    console.log(e)
    console.log(e.type)
  }

  return (
    <div id="root">
      <button onClick={click}>{name}</button>
    </div>
  )
}

export default UseStatePage
