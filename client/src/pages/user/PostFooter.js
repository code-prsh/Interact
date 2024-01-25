import { Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import React from "react";

const PostFooter = (props) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Stack spacing={0.5} direction={"column"}>
        <div
          style={{
            width: "530px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "100px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <FavoriteBorderIcon />
            {/* <button className="btn"><FontAwesomeIcon icon="fa-solid fa-heart" /></button> */}
            <ChatBubbleOutlineIcon />
            <TelegramIcon />
          </div>
          <TurnedInNotIcon />
        </div>
        <div>
          <span>{props.number} Likes</span>
        </div>
        <div>
          <span style={{ fontWeight: "500" }}>
            {props.username}
            <span style={{ fontWeight: "350", marginLeft: "10px" }}>
              caption
            </span>
          </span>
        </div>
        <div>
          <span style={{ fontWeight: "250" }}>
            View all {props.comments} comments
          </span>
        </div>
        <div>
          <span style={{ fontWeight: "250" }}>
            Add a Comment...
          </span>
        </div>
      </Stack>
    </div>
  );
};

export default PostFooter;
