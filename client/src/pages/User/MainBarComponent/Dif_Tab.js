import React from 'react'
import "../vikash.css";
import { Button } from '@mui/material';
import '../Dif_Tab_item'
import {
   
    GridOn,
    TurnedIn,
    ContactEmergency,
    Movie,
  } from "@mui/icons-material";
function handleonclick1() {
    let a = document.getElementsByClassName("nb");
    Array.from(a).forEach((e) => {
      e.classList.remove("bor");
    });
    let b =document.getElementsByClassName("publication_tab");
    Array.from(b).forEach((e) => {
      e.classList.add("dn");
    });
    b[0].classList.remove("dn");
  
    document.getElementById("publication").classList.add("bor");
  }
  function handleonclick2() {
    let a = document.getElementsByClassName("nb");
    Array.from(a).forEach((e) => {
      e.classList.remove("bor");
    });
    let b =document.getElementsByClassName("publication_tab");
    Array.from(b).forEach((e) => {
      e.classList.add("dn");
    });
    b[1].classList.remove("dn");
  
    document.getElementById("reels").classList.add("bor");
  }
  function handleonclick3() {
    let a = document.getElementsByClassName("nb");
    Array.from(a).forEach((e) => {
      e.classList.remove("bor");
    });

    let b =document.getElementsByClassName("publication_tab");
    Array.from(b).forEach((e) => {
      e.classList.add("dn");
    });
    b[2].classList.remove("dn");
  
    document.getElementById("records").classList.add("bor");
  }
  function handleonclick4() {
    let a = document.getElementsByClassName("nb");
    Array.from(a).forEach((e) => {
      e.classList.remove("bor");
    });

    let b =document.getElementsByClassName("publication_tab");
    console.log(b);
    Array.from(b).forEach((e) => {
      e.classList.add("dn");
    });
    b[3].classList.remove("dn");
  
    document.getElementById("identified").classList.add("bor");
  }
function Dif_Tab() {
  return (
    <div>
       <div
          className="tabs_option d-flex"
          style={{
            borderTop: "1px solid #dbd8ce",
            justifyContent: "center",
            alignItems: "center",
            width: "70vw",
            margin: "0px 113px",
          }}
        >
          <Button
            id="publication"
            className="nb bor"
            sx={{
              margin: "0px 54px",
              color: "#756f6f",
              fontWeight: "800",
              fontSize: ".9vw",
            }}
            startIcon={<GridOn sx={{ width: "1vw", height: "1vw" }} />}
            onClick={handleonclick1}
          >
            PUBLICATIONS
          </Button>
          <Button
            className=" nb"
            id="reels"
            style={{
              margin: "0px 54px",
              color: "#756f6f",
              fontWeight: "800",
              fontSize: ".9vw",
            }}
            startIcon={<Movie sx={{ width: "1vw", height: "1vw" }} />}
            onClick={handleonclick2}
          >
            REELS
          </Button>
          <Button
            className=" nb"
            id="records"
            style={{
              margin: "0px 54px",
              color: "#756f6f",
              fontWeight: "800",
              fontSize: ".9vw",
            }}
            startIcon={<TurnedIn sx={{ width: "1vw", height: "1vw" }} />}
            onClick={handleonclick3}
          >
            RECORDS
          </Button>
          <Button
            id="identified"
            className=" nb"
            sx={{
              margin: "0px 54px",
              color: "#756f6f",
              fontWeight: "800",
              fontSize: ".9vw",
            }}
            startIcon={
              <ContactEmergency sx={{ width: "1vw", height: "1vw" }} />
            }
            onClick={handleonclick4}
          >
            IDENTIFIED
          </Button>
        </div>
    </div>
  )
}

export default Dif_Tab
