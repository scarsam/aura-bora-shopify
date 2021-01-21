import React from 'react'
import LoadingAnimation from 'images/loading-animation.inline.svg'

const IndexPage = () => {
  return (
    <div
      className="mood"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
      }}
    >
      <LoadingAnimation className="loading-animation margin-top-20px" />
    </div>
  )
}

export default IndexPage
