import React from "react";
import Likes_item from "./Likes_item";

function Likes_item_activity(props) {
  return (
    <div
      className="gridboxforphoto"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        margin: ".5vw",
        marginTop: ".7vw",
        height: "38.1vw",
        overflow: "scroll",
      }}
    >
      <Likes_item sel={props.txt} ides="fir" />
      <Likes_item sel={props.txt} ides="sec" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
      <Likes_item sel={props.txt} ides="thi" />
    </div>
  );
}

export default Likes_item_activity;
