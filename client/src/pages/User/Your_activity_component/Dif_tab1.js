import React from "react";
import "../Your_activity_component/activity.css";
import { Button } from "@mui/material";
import { Comment, FavoriteBorder, RateReview, Reply } from "@mui/icons-material";
import styled from "@emotion/styled";

function Dif_tab1() {
  const Buttond = styled(Button)(() => ({
    margin: "0px 25px",
    color: "#756f6f",
    fontWeight: "800",
    fontSize: ".9vw",
    padding: "10px",
    boxSizing: "border-box",
  }));
  function handleonclick(ids)
  {
        let a=document.getElementsByClassName('abtn');
        Array.from(a).forEach(e=>{
            e.classList.remove('bb');
        })
        document.getElementById(ids).classList.add('bb');
  }

  return (
    <div>
      <div
        className="tabs_option d-flex"
        style={{
          justifyContent: "center",
          borderBottom: "1px solid #dbd8ce",
          alignItems: "center",
          width: "50vw",
          boxSizing: "content-box",
          overflow: "auto",
        }}
      >
        <Buttond
          className="abtn bb"
          id="likes"
          startIcon={<FavoriteBorder sx={{ width: "1vw", height: "1vw" }} />}
          onClick={()=>{handleonclick("likes")}}
        >
          LIKES
          
        </Buttond>
        <Buttond
          className="abtn"
          id="comments"
          startIcon={<Comment sx={{ width: "1vw", height: "1vw" }} />}
          onClick={()=>{handleonclick("comments")}}
        >
          COMMENTS
        </Buttond>
        <Buttond
          className="abtn"
          id="storyreply"
          startIcon={<Reply sx={{ width: "1vw", height: "1vw" }} />}
          onClick={()=>{handleonclick("storyreply")}}
        >
          STORY REPLIES
        </Buttond>
        <Buttond
          className="abtn "
          id="reviews"
          startIcon={<RateReview sx={{ width: "1vw", height: "1vw" }} />}
          onClick={()=>{handleonclick("reviews")}}

        >
          REVIEWS
        </Buttond>
      </div>
    </div>
  );
}

export default Dif_tab1;
