import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

function Index() {

  const history = useHistory()

  const to = useCallback((path: string) => () => {
    history.push(path)
  }, [history])

  return (
    <>
      <style jsx>{`
        .container {
          overflow: hidden;
          padding-top: 50px;
        }
        .link {
          color: #1890ff;
          margin-bottom: 20px;
          font-size: 20px;
          text-align: center;
          cursor: pointer;
        }
    `}</style>
      <div className="container">
        <div className="link" onClick={to('/interval')}>定时器</div>
        <div className="link" onClick={to('/closure')}>闭包陷阱</div>
        <div className="link" onClick={to('/network')}>网络请求</div>
        <div className="link" onClick={to('/loading')}>加载中状态</div>
        <div className="link" onClick={to('/usestate')}>useState demo</div>
        <div className="link" onClick={to('/usedebounce')}>useDebounce demo</div>
      </div>

    </>
  )

}

export default Index
