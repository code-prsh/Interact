import React from 'react'
import { Avatar, Button } from "@mui/material";

import {
    Home,
    Search,
    Explore,
    Movie,
    Message,
    Favorite,
    Create,
    ThreeDRotation,
    More, 
    
    
  } from "@mui/icons-material";
function Sidebar() {
  return (
    <div>
       <div className="fixsidebar">
          <div
            className="sidebar d-flex"
            style={{
              position: "relative",
              left: "0px",
              right: "0px",
              width: "15vw",
              height: "100vh",
              backgroundColor: "white",
              justifyContent: "center",
            }}
          >
            <h6
              style={{
                position: "fixed",
                top: "50px",
                left: "20px",
                fontSize: "25px",
              }}
            >
              Instagram
            </h6>
            <div
              className="menuitem d-flex"
              style={{
                flexDirection: "column",
                position: "fixed",
                top: "120px",
                alignItems: "flex-start",
              }}
            >
              <Button
                sx={{ margin: "8px 0px", color: "black" }}
                startIcon={<Home />}
              >
                Home
              </Button>
              <Button
                sx={{ margin: "8px 0px", color: "black" }}
                startIcon={<Search />}
              >
                Search
              </Button>
              <Button
                sx={{ margin: "8px 0px", color: "black" }}
                startIcon={<Explore />}
              >
                Explore
              </Button>
              <Button
                sx={{ margin: "8px 0px", color: "black" }}
                startIcon={<Movie />}
              >
                Reels
              </Button>
              <Button
                sx={{ margin: "8px 0px", color: "black" }}
                startIcon={<Message />}
              >
                Messages
              </Button>
              <Button
                sx={{ margin: "8px 0px", color: "black" }}
                startIcon={<Favorite />}
              >
                Notification
              </Button>
              <Button
                sx={{ margin: "8px 0px", color: "black" }}
                startIcon={<Create />}
              >
                Create
              </Button>
              <Button
                sx={{ margin: "8px 0px", color: "black" }}
                startIcon={
                  <Avatar
                    sx={{ width: "25px", height: "25px" }}
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                  />
                }
              >
                <b>Profile</b>
              </Button>
              <div
                className="twoitem d-flex"
                style={{
                  flexDirection: "column",
                  position: "relative",
                  top: "120px",
                  alignItems: "flex-start",
                }}
              >
                <Button sx={{ color: "black" }} startIcon={<ThreeDRotation />}>
                  Threads
                </Button>
                <Button sx={{ color: "black" }} startIcon={<More />}>
                  More
                </Button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
