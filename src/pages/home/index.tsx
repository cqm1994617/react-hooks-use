import React from 'react'

function Index() {

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
        <div className="link">定时器</div>
        <div className="link">闭包陷阱</div>
        <div className="link">网络请求</div>
        <div className="link">加载中状态</div>
      </div>

    </>
  )

}

export default Index
