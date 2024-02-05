import React from 'react'
import { useState } from 'react';
import PostFooter from './PostFooter';
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";

const Post = (props) => {
    const links = [
        { label: "Report", href: "#" },
        { label: "Unfollow", href: "#" },
        { label: "Add to favourites", href: "#" },
        { label: "Go to post",  href: "#" },
        { label: "Share to..", href: "#" },
        { label: "Copy Link",  href: "#" },
        { label: "Embed", href: "#" },
        { label: "About this Account",  href: "#" },
        { label: "cancel", href: "#" },
        
      ];
      const [userName, setUserName] = useState("profile");
  return (
    <div className="container" style={{ width: "550px", margin: "50px" }}>
          <PostHeader username={userName + (1)} links = {links}/>
          <PostImage type = {props.type}/>
          <PostFooter number={1} username={userName} comments={40} />
        </div>
  )
}

export default Post
