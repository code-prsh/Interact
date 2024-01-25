import React from "react";

function Likes_item(props) {
  console.log(props.ides)
  return (
    <>
      <div style={{ height: "calc(49vw/5)", position: "relative" }}>
       
      <label htmlFor={props.ides}> 
          <img
            style={{ width: "calc(48.5vw/5)", height: "calc(48.5vw/5)" }}
            src="https://source.unsplash.com/random/34"
            alt="noimag"
            
          />
        </label>
        <input
          type="checkbox"
          value=""
          id={props.ides}
         
          style={{
            position: "absolute",
            right: "10px",
            bottom: "10px",
            width: "20px",
            height: "20px", 
            display:props.sel==="Clear"?'initial':'none',
          }}
        />
       
      </div>
    </>
  );
}

export default Likes_item;
