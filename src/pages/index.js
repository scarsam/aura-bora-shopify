import React from 'react'
import LoadingAnimation from 'images/loading-animation.inline.svg'

const IndexPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <LoadingAnimation />
    </div>
  )
}

export default IndexPage
