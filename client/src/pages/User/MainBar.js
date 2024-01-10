import React from "react";
import Storywala from "./MainBarComponent/Storywala";
import Top_portion from "./MainBarComponent/Top_portion";
import Dif_Tab from "./MainBarComponent/Dif_Tab";
import Dif_Tab_item from "./Dif_Tab_item";

function MainBar() {
  return (
    <div>
      <div
        className="mainbar d-flex"
        style={{
          flexDirection: "column",
          position: "relative",
          width: "85vw",
          boxSizing: "border-box",
          overflow: "clip",
          borderLeft: "1px solid #dbd8ce",
        }}
      >

        <Top_portion />
        <Storywala />
        <Dif_Tab />

        <Dif_Tab_item/>
      </div>
    </div>
  );
}

export default MainBar;
