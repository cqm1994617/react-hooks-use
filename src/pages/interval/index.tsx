import React, {useEffect, useState} from 'react'

function IntervalPage() {

  const [data, setData] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setData(data => data + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {data}
    </div>
  )
}

export default IntervalPage
