import React from 'react'

function Photo() {
  return (
    <div>
      <img
            src="https://source.unsplash.com/random/2"
            alt=""
            style={{
              width: "calc(70vw/3)",
              height: "calc(70vw/3)",
              backgroundColor: "brown",
              margin: "0px 2px 2px 0px",
            }}
          />
    </div>
  )
}

export default Photo
