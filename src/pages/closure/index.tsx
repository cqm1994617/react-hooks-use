import React, { useState, useEffect } from 'react'

function ClosurePage() {

  const [data, setData] = useState(0)

  const testClick = () => {
    setData(10)
    setTimeout(() => {
      console.log(data)
    }, 1000)
  }

  return (
    <div onClick={testClick}>
      closure
    </div>
  )
}

export default ClosurePage
