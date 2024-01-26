import { Avatar } from '@mui/material'
import React from 'react'

function All_comment(props) {
  return (
    <>
    <label htmlFor={props.ids}>
    <div className='d-flex' style={{marginTop:'10px',alignItems:'flex-start',justifyContent:'center'}}>
        <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random/3" style={{marginLeft:"10px"}}/>
        <div className="commet_wala">
         <p style={{fontSize:'14px',margin:"0px 20px"}}><b>My_user_name</b> #my caption Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet id quod in fuga autem eos magni, minima quia harum veniam. Optio, distinctio magnam vero natus eius ut quod tempore est!...</p>
         <br />
         <div className="d-flex">
         <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random/9" />
         <p style={{fontSize:'14px', margin:'0px 20px'}}><b>My_user_name2</b> #my caption2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet id quod in fuga autem eos magni, minima quia harum veniam. Optio, distinctio magnam vero natus eius ut quod tempore est!...</p>
         <input
          type="checkbox"
          value=""
          
          id={props.ids}
          style={{
           
            width: "20px",
            height: "20px", 
            display:props.txt==="Clear"?'initial':'none',
          }}
        />
         </div>
        </div>
        <img src="https://source.unsplash.com/random/3" alt="No_img" style={{width:'50px',height:'50px',position:'relative',right:"33px"}}/>
      
    </div>
    </label>
   
    </>
  )
}

export default All_comment
