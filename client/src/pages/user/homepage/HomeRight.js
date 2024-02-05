import { Stack } from "@mui/material";
import React, { useState } from "react";
// import { faker } from "@faker-js/faker";
// import logo from "../../../assets/Images/story.jpg";
import ProfileImage from "./ProfileImage";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
// import '../../components/user/sidebar/sidebar.css'
import "./home.css";
import PostFooter from "./PostFooter";
import Post from "./Post";

const HomeRight = () => {
  const [userName, setUserName] = useState("profile");
  return (
    <div className="postSection">
      <div>
        <Stack spacing={3} direction="row" sx={{ marginTop: "20px" }}>
        {[...Array(8)].map((_, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column" }}>
            <ProfileImage size={`60px`} />
            <span>{userName + (index+1)}</span>
          </div>
        ))}
        </Stack>
      </div>

      <Post type = {1}/>
      <Post type = {2}/>
      <Post />
    </div>
  );
};

export default HomeRight;
