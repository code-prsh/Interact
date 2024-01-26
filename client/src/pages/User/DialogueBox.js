import * as React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import { Close } from "@mui/icons-material";
import "./vikash.css";
import BasicDatePicker from "./BasicDatePicker";

const emails = ["username@gmail.com", "user02@gmail.com"];
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  function putleftbor(ids) {
    let a = document.getElementsByClassName("fit_btn");
    Array.from(a).forEach((e) => {
      e.classList.remove("put_col");
    });
    document.getElementById(ids).classList.add("put_col");
  }
  return (
    <Dialog onClose={handleClose} open={open}>
      <div
        className="dia_box d-flex"
        style={{ width: "29vw",height:'48vh', flexDirection: "column" }}
      >
        <div
          className="heading_wala d-flex"
          style={{
            borderBottom: "1px solid #edebe6",
            height: "6vh",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Close style={{ width: "2.5vw", height: "2.5vw" }} onClick={handleClose}/>
          <p
            style={{ fontSize: "1.5vw", fontWeight: "600", marginTop: "10px" }}
          >
            Sort & filter
          </p>
          <button style={{ border: "0px", backgroundColor: "white" }}>
            reset
          </button>
        </div>
        <p style={{ marginLeft: "10px" }}>Sort by</p>
        <div className="filterbut d-flex" style={{}}>
          <Button
            variant="contained"
            className="fit_btn"
            id="btn1"
            style={{
              backgroundColor: "#adacaa",
              margin: "0px 10px",
              fontSize: "10px",
              fontWeight: "600",
            }}
            onClick={() => {
              putleftbor("btn1");
            }}
          >
            Newest to Oldest
          </Button>
          <Button
            variant="contained"
            className="fit_btn"
            id="btn2"
            style={{
              backgroundColor: "#adacaa",
              margin: "0px 10px",
              fontSize: "10px",
              fontWeight: "600",
            }}
            onClick={() => {
              putleftbor("btn2");
            }}
          >
            Oldest to Newest
          </Button>
        </div>
        <p style={{ marginLeft: "10px", marginTop: "10px" }}>Start Date</p>
        <div style={{margin:'-17px 0px 0px 10px'}}>
          <BasicDatePicker />
        </div>
        <p style={{ marginLeft: "10px", marginTop: "10px" }}>End Date</p>
        <div style={{margin:'-17px 0px 0px 10px'}}>
        <BasicDatePicker />
        </div>
        <div className="apply_cont d-flex" style={{justifyContent:'center',alignItems:"center",borderTop:'1px solid #706f6b',marginTop:'10px ', height:'10vh'}}>
        <Button variant="contained">Apply</Button>
        </div>
       
      </div>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button
        variant="outlined"
        style={{
          color: "black",
          fontSize: "12px",
          fontWeight: "600",
          backgroundColor: "white",
          borderColor: "#706f6b",
          padding: "2px",
          marginLeft: "10px",
          marginTop: "3px",
        }}
        onClick={handleClickOpen}
      >
        Sort & filter
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        
      />
    </div>
  );
}
