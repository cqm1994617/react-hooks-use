import React, { useEffect, useState } from 'react'

function mockRequest(url: string): Promise<object> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        url,
        data: "返回数据"
      })
    }, 2000)
  })
}

function useRequest(requestPromise: Promise<object>) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    requestPromise.then(res => {
      
    })
  }, [])

}

function NetworkPage() {

  useEffect(() => {
    useRequest(mockRequest('url'))
  }, [])

  return (
    <div>
      network
    </div>
  )
}

export default NetworkPage
