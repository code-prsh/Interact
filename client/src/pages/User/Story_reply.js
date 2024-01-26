import { Avatar } from '@mui/material'
import React from 'react'

function Story_reply(props) {
  return (
    <label htmlFor={props.ids}>
    <div className='d-flex' style={{margin:"10px 10px 0px 10px",alignItems:'center'}}>
         <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random/334" style={{}}/>
        <p style={{margin:'0px 10px'}}><b>Conceptual_boy vikash </b>voted <b>Right</b></p>
        <div style={{position:'relative',right:'-150px',}}>
        <p style={{color:'#c4c9cf',display:'inline',marginRight:'20px'}}>poll form <p style={{color:'black',display:'inline'}}>sucess pire</p></p>
        <input
          type="checkbox"
          value=""
          
          id={props.ids}
          style={{
           
            width: "20px",
            height: "20px", 
            position:'relative',
            top:'5px',
            display:props.txt==="Clear"?'initial':'none',
          }}
        />
        </div>
      
    </div>
    </label>
  )
}

export default Story_reply
