import React, { useState } from "react";
import Footer from "./Footer";
import {
  ArrowDownward,
  CalendarMonth,
  Campaign,
  PhotoLibrary,
  SwapHoriz,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import Dif_tab1 from "./Your_activity_component/Dif_tab1";
import "./vikash.css";
import Likes_item from "./Likes_item";
function Your_Activity() {
  const Buttond = styled(Button)(() => ({
    backgroundColor: "white",
    color: "black",
    borderRadius: "0px",
    borderLeft: "3px solid white",
    "&:hover": {
      backgroundColor: "#edebe6",
      borderLeft: "3px solid #6b778a",
    },
  }));
  function putleftbor(ids) {
    let a = document.getElementsByClassName("actbtn");
    Array.from(a).forEach((e) => {
      e.classList.remove("lb");
    });
    document.getElementById(ids).classList.add("lb");
  }
  const [txt, setText] = useState("Select");
  return (
    <div
      className="d-flex"
      style={{
        borderLeft: "1px solid #dbd8ce",
        justifyContent: "center",
        alignItems: "center",
        width: "85vw",
        flexDirection: "column",
      }}
    >
      <div
        className="avtivity_box"
        style={{
          width: "65vw",
          height: "45vw",
          border: "1px solid #dbd8ce",
          marginTop: "30px",
        }}
      >
        <div
          className="grid_box"
          style={{
            display: "grid",
            gridTemplateColumns: "15vw 50vw",
            height: "45vw",
            width: "65vw",
          }}
        >
          <div
            className="your_activ_sidebar"
            style={{ borderRight: "1px solid #dbd8ce" }}
          >
            <div
              className="your_act_name d-flex"
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "47px",
                borderBottom: "1px solid #dbd8ce",
                paddingTop: "11px",
                fontWeight: "500",
              }}
            >
              <p>
                <b>Your Activity</b>
              </p>
            </div>
            <div
              className="d-flex"
              style={{
                flexDirection: "column",
                overflow: "scroll",
                height: "40vw",
              }}
            >
              <Buttond
                className="d-flex lb actbtn"
                id="Interactions"
                onClick={() => {
                  putleftbor("Interactions");
                }}
              >
                <SwapHoriz sx={{ width: "50px", height: "50px" }} />
                <div
                  className="text"
                  style={{
                    fontSize: "11px",
                    textAlign: "start",
                    marginLeft: "30px",
                  }}
                >
                  <b>Interactions</b>
                  <br />
                  <p style={{ fontSize: "9px" }}>
                    {" "}
                    Review and delete likes,comments and <br />
                    your Other Intractions.
                  </p>
                </div>
              </Buttond>
              <Buttond
                className="d-flex actbtn"
                id="Photosw"
                onClick={() => {
                  putleftbor("Photosw");
                }}
              >
                <PhotoLibrary sx={{ width: "50px", height: "50px" }} />
                <div
                  className="text"
                  style={{
                    fontSize: "11px",
                    textAlign: "start",
                    marginLeft: "30px",
                  }}
                >
                  <b>Photos and videos</b>
                  <br />
                  <p style={{ fontSize: "9px" }}>
                    {" "}
                    Review and delete likes,comments and <br />
                    your Other Intractions.
                  </p>
                </div>
              </Buttond>
              <Buttond
                className="d-flex actbtn"
                id="Historys"
                onClick={() => {
                  putleftbor("Historys");
                }}
              >
                <CalendarMonth sx={{ width: "50px", height: "50px" }} />
                <div
                  className="text"
                  style={{
                    fontSize: "11px",
                    textAlign: "start",
                    marginLeft: "30px",
                  }}
                >
                  <b>Accout History</b>
                  <br />
                  <p style={{ fontSize: "9px" }}>
                    {" "}
                    view,archive or delete your photo and video you have shared.
                  </p>
                </div>
              </Buttond>

              <Buttond
                className="d-flex actbtn"
                id="Adsa"
                onClick={() => {
                  putleftbor("Adsa");
                }}
              >
                <Campaign sx={{ width: "50px", height: "50px" }} />
                <div
                  className="text"
                  style={{
                    fontSize: "11px",
                    textAlign: "start",
                    marginLeft: "30px",
                  }}
                >
                  <b>Ad activity</b>
                  <br />
                  <p style={{ fontSize: "9px" }}>
                    See which add you have intracted with recently.
                  </p>
                </div>
              </Buttond>
              <Buttond
                className="d-flex actbtn"
                id="Informationw"
                onClick={() => {
                  putleftbor("Informationw");
                }}
              >
                <ArrowDownward sx={{ width: "50px", height: "50px" }} />
                <div
                  className="text"
                  style={{
                    fontSize: "11px",
                    textAlign: "start",
                    marginLeft: "30px",
                  }}
                >
                  <b>Download your Information</b>
                  <br />
                  <p style={{ fontSize: "9px" }}>
                    {" "}
                    Download a copy of information you have shared with
                    instagram
                  </p>
                </div>
              </Buttond>
            </div>
          </div>
          <div className="interation_tab">
            <Dif_tab1 />
            <div
              className="belowlikestab d-flex"
              style={{
                fontSize: "14px",
                height: "2vw",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <p style={{ marginTop: "20px", marginLeft: "10px" }}>
                <b>Newest To Oldest</b>
              </p>
              <button
                type="button"
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  marginLeft: "10px",
                  marginTop: "5px",
                }}
                
              >
                <b>Sort & filter</b>

              </button>
           
              <p style={{ position: "relative", left: "390px", top: "7px" }}>
                <button
                  style={{
                    border: "0px",
                    backgroundColor: "white",
                    color: txt=="Select"?  "rgb(0, 149, 246)":"#706f6b",
                  }}
                  onClick={() => {
                    txt === "Select" ? setText("Clear") : setText("Select");
                  }}
                >
                  {txt}
                </button>
              </p>
            </div>
            <div
              className="gridboxforphoto"
              style={{
                display: "grid",
                height: "38.1vw",
                gridTemplateColumns: "repeat(5,1fr)",
                margin: ".5vw",
                marginTop:'.7vw',
                overflow: "scroll",
              }}
            >
              <Likes_item sel={txt} ides="fir"/>
              <Likes_item sel={txt} ides="sec"/>
              <Likes_item sel={txt} ides="thi"/>
             
             
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Your_Activity;
