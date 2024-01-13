import React, { useState } from "react";
import "./vikash.css";
import { Button } from "@mui/material";
import { ArrowDropDownSharp } from "@mui/icons-material";


function Footer() {
    
const[lang, setLang] = useState("English");
const handle=(lan)=>
{
    setLang(lan);
    let a=document.getElementById('all_lang')
    let b=document.getElementById('Lang_name')
    a.style.display='none';
    b.style.display='inline';
    

}
const handleclick=()=>{
    let a=document.getElementById('all_lang')
    let b=document.getElementById('Lang_name')
    a.style.display='inline';
    b.style.display='none';
    // console.log(a);
    // console.log(b);

}
    return (
    <div>
      <footer>
        <div className="gridbox" style={{ marginTop: "20px" }}>
          <button className="butt">Meta</button>
          <button className="butt">About</button>
          <button className="butt">Blog</button>
          <button className="butt">Jobs</button>
          <button className="butt">Help</button>
          <button className="butt">API</button>
          <button className="butt">Privacy</button>
          <button className="butt">Terms</button>
          <button className="butt">Location</button>
          <button className="butt">Instagram Lite</button>
          <button className="butt">Threads</button>
          <button className="butt">Contact uploading and non-users</button>
          <button className="butt">Meta Verified</button>
        </div>
        <div className="bottom_tow" style={{ marginBottom: "30px" }}>
          <div className="drop_down" >
            <ul id="all_lang">
              <li onClick={()=>{handle("Hindi")}} className="lang_list">Hindi</li>
              <li onClick={()=>{handle("English")}} className="lang_list">English</li>
              <li onClick={()=>{handle("Bojpuri")}} className="lang_list">Bojpuri</li>
              <li onClick={()=>{handle("Mathli")}} className="lang_list">Mathli</li>
            </ul>
            <Button
              className="butt"
              id="Lang_name"
              variant="text"
              endIcon={<ArrowDropDownSharp/>}
              onClick={()=>{handleclick()}}
            >
              {lang}
            </Button>
          </div>
          <button className="butt"> &copy; 2024 Instagram from Meta</button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
