import { Button } from '@mui/material'
import React from 'react'
import {
    Settings,
   
  } from "@mui/icons-material";
function Top_portion() {
  return (
    <div>
       <div className="container">
          <div
            className="upperpart d-grid"
            style={{
              gridTemplateColumns: "repeat(2,1fr)",
              position: "relative",
              height: "40vh",
            }}
          >
            {/* this is a grid of tow color to make upper part profile pic and text */}
            <div
              className="profile_image d-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Button>
                <img
                  src="https://source.unsplash.com/random"
                  alt="Noimage"
                  width="150px"
                  height="150px"
                  style={{ borderRadius: "50%" }}
                />
              </Button>
            </div>

            <div
              className="profiledetail d-flex "
              style={{
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
                position: "relative",
                right: "11vw",
              }}
            >
              <div className="right_first d-flex justify-content-center align-items-center mb-3">
                <h5 className="mr-2">conceputualboy_vikash</h5>
                <button
                  type="button"
                  className="btn btn-outline-secondary mx-3"
                >
                  Modify the profile
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary mx-2"
                >
                  View Archive
                </button>
                <Button startIcon={<Settings />} />
              </div>

              <div className="right_second d-flex ">
                <h6 className="mr-2">
                  <b>29</b> posts
                </h6>
                <h6 className="mx-2">
                  <b>307</b> followers
                </h6>
                <h6 className="mx-2">
                  <b>314</b> followed
                </h6>
              </div>
              <h6> Vikash Kumar</h6>
              <p className="mb-0">B-Tech'25(MNIT JAIPUR)</p>
              <p className="mb-0">STUDENT 👨‍🎓 |SPORTSPERSON|YOUTUBER</p>
              <a href="https://youtu.be/9mmmF0u2B-Y?si=dk0AVI65Hj-0E1kG">
                youtu.be/dTiX5-VhotQ
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Top_portion
