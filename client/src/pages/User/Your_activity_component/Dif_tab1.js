import React from "react";
import "../Your_activity_component/activity.css";
import { Button } from "@mui/material";
import { Comment, FavoriteBorder, RateReview, Reply } from "@mui/icons-material";
import styled from "@emotion/styled";
import '../Your_Activity'


function Dif_tab1() {
  const Buttond = styled(Button)(() => ({
    margin: "0px 25px",
    color: "#756f6f",
    fontWeight: "800",
    fontSize: ".9vw",
    padding: "10px",
    boxSizing: "border-box",
  }));
  function handleonclick(ids,ids2)
  {
        let a=document.getElementsByClassName('abtn');
        let b=document.getElementsByClassName('dfjk');
        Array.from(a).forEach(e=>{
            e.classList.remove('bb');
        })
        Array.from(b).forEach(e=>{
            e.classList.add('block');
        })
        document.getElementById(ids2).classList.remove('block');
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
          onClick={()=>{handleonclick("likes","like_a")}}
        >
          LIKES
          
        </Buttond>
        <Buttond
          className="abtn"
          id="comments"
          startIcon={<Comment sx={{ width: "1vw", height: "1vw" }} />}
          onClick={()=>{handleonclick("comments","comments_a")}}
        >
          COMMENTS
        </Buttond>
        <Buttond
          className="abtn"
          id="storyreply"
          startIcon={<Reply sx={{ width: "1vw", height: "1vw" }} />}
          onClick={()=>{handleonclick("storyreply","story_rep_a")}}
        >
          STORY REPLIES
        </Buttond>
        <Buttond
          className="abtn "
          id="reviews"
          startIcon={<RateReview sx={{ width: "1vw", height: "1vw" }} />}
          onClick={()=>{handleonclick("reviews","nothingg_a")}}

        >
          REVIEWS
        </Buttond>
      </div>
    </div>
  );
}

export default Dif_tab1;
