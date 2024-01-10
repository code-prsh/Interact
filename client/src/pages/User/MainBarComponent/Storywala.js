import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

function Storywala() {
  return (
    <div>
      <div
        className="d-flex  "
        style={{
          flexDirection: "column",
          position: "relative",
          left: "14vw",
          top: "-5vh",
        }}
      >
        <div
          className="cirle"
          style={{ borderRadius: "50%", width: "4vw", height: "4vw" }}
        >
          <Button sx={{ border: "1px solid black", borderRadius: "50%" }}>
            {" "}
            <Add sx={{ width: "4vw", height: "4vw" }} />
          </Button>
        </div>
        <h6 style={{ marginTop: "25px", marginLeft: "21px" }}>New</h6>
      </div>
    </div>
  )
}

export default Storywala
