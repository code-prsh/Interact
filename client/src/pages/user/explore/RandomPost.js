import React from "react";
import { faker } from "@faker-js/faker";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import "./explore.css";
const RandomPost = () => {
  return (
    <div className="whole">
      <div className="upper">
        <div className="upperLeft">
          <div style={{position: "relative"}}>
            <div className="lc1">
            <FavoriteBorderIcon /> <span>89k </span>
            <ChatBubbleOutlineIcon /> <span> 786</span>
            </div>
            <img className="post1" src={faker.image.fashion()} alt="" />
          </div>
          <div style={{position: "relative"}}>
            <div className="lc2">
            <FavoriteBorderIcon /> <span>89k </span>
            <ChatBubbleOutlineIcon /> <span> 786</span>
            </div>
            <img className="post2" src={faker.image.fashion()} alt="" />
          </div>
        </div>
        <div className="upperLeft">
        <div style={{position: "relative"}}>
            <div className="lc3">
            <FavoriteBorderIcon /> <span>89k </span>
            <ChatBubbleOutlineIcon /> <span> 786</span>
            </div>
            <img className="post3" src={faker.image.fashion()} alt="" />
          </div>
          <div style={{position: "relative"}}>
            <div className="lc4">
            <FavoriteBorderIcon /> <span>89k </span>
            <ChatBubbleOutlineIcon /> <span> 786</span>
            </div>
            <img className="post4" src={faker.image.fashion()} alt="" />
          </div>
        </div>
        <div>
        <div className="reel">
            <SlowMotionVideoIcon />
          </div>
          <div style={{position: "relative"}}>
          <div className="lc10">
            <FavoriteBorderIcon /> <span>89k </span>
            <ChatBubbleOutlineIcon /> <span> 786</span>
            </div>
          <img className="post10" src={faker.image.fashion()} alt="" />
          </div>
        </div>
      </div>
      <div className="lower">
        <div>
          <div className="reel">
            <SlowMotionVideoIcon />
          </div>
          <div style={{position: "relative"}}>
          <div className="lc20">
            <FavoriteBorderIcon /> <span>89k </span>
            <ChatBubbleOutlineIcon /> <span> 786</span>
            </div>
          <img className="post20" src={faker.image.fashion()} alt="" />
          </div>
        </div>
        <div className="lowerRight">
        <div style={{position: "relative"}}>
            <div className="lc5">
            <FavoriteBorderIcon /> <span>89k </span>
            <ChatBubbleOutlineIcon /> <span> 786</span>
            </div>
            <img className="post5" src={faker.image.fashion()} alt="" />
          </div>
          <div style={{position: "relative"}}>
            <div className="lc6">
            <FavoriteBorderIcon /> <span>89k </span>
            <ChatBubbleOutlineIcon /> <span> 786</span>
            </div>
            <img className="post6" src={faker.image.fashion()} alt="" />
          </div>
        </div>
        <div>
        <div style={{position: "relative"}}>
            <div className="lc7">
            <FavoriteBorderIcon /> <span>89k </span>
            <ChatBubbleOutlineIcon /> <span> 786</span>
            </div>
            <img className="post7" src={faker.image.fashion()} alt="" />
          </div>
          <div style={{position: "relative"}}>
            <div className="lc8">
            <FavoriteBorderIcon /> <span>89k </span>
            <ChatBubbleOutlineIcon /> <span> 786</span>
            </div>
            <img className="post8" src={faker.image.fashion()} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomPost;
