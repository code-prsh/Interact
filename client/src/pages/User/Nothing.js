import React from 'react'
import Exclation from './../../images/Exclation.png'

function Nothing() {
  return (
    <div className='d-flex' style={{alignItems:'center',marginTop:'50px',flexDirection:'column',height: "38.1vw",
    overflow: "scroll",}}>
        <img width={'150px'} src={Exclation} alt="noimage" />
        <p style={{fontSize:'30px',fontWeight:'700'}}>No review activity</p>
        <p style={{color:'#7e848c'}}>When you submit review on instagram they will apper here</p>
    </div>
  )
}

export default Nothing
