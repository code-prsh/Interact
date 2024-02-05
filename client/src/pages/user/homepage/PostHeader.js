import React from "react";
import ProfileImage from "./ProfileImage";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import Stack from '@mui/material/Stack'
const PostHeader = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <ProfileImage size = {`40px`}/>
          <span style={{marginLeft: '10px'}}>{props.username}</span>
        </div>
        <div className="btn-group dropstart">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {/* <FontAwesomeIcon icon="fa-solid fa-ellipsis" /> */}
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton1"
            style={{ backgroundColor: "#f6f6f6", borderRadius: "20px" }}
          >
            <div className="container"
              style={{
                width: "350px",
              }}
                
            >
                <div style={{
                  height: '450px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                {props.links.map((link, index) => (
                  <a
                    key={index}
                    style={{
                      width: "350px",
                      textAlign: "center",
                      textDecoration: "none",
                      color: index === 0 || index === 1 ? "red" : "black",
                      borderBottom: index !== props.links.length - 1 ? "0.05px solid #c3c3c3" : "none",
                      padding: "2px",
                    }}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
                </div>
            </div>
            {/* <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
