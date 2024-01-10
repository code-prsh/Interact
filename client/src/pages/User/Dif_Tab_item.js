import React from 'react'
import Photo from './MainBarComponent/Diff_Tab_Item/Photo'
import Reels from './MainBarComponent/Diff_Tab_Item/Reels'
import Record from './MainBarComponent/Diff_Tab_Item/Record'
import Identification from './MainBarComponent/Diff_Tab_Item/Identification'
import './vikash.css'

function Dif_Tab_item() {
  return (
    <div>
       <div
          className="publication_tab "
          style={{
            display: "grid",
            width: "70vw",
            margin: "0px 113px",
            gridTemplateColumns: "repeat(3,1fr)",
          }}
         
          
        >
        
           <Photo/>
           <Photo/>
           <Photo/>
           <Photo/>
           <Photo/>
           <Photo/>
           <Photo/>
           <Photo/>
           <Photo/>
        </div>  
      <div
          className="publication_tab  dn"
          style={{
            display: "grid",
            width: "65vw",
            margin: "0px 120px",
            gridTemplateColumns: "repeat(4,1fr)",
          }}
          
        >
        
          
         <Reels/>
         <Reels/>
         <Reels/>
         <Reels/>
         <Reels/>
         <Reels/>
         <Reels/>
          
          
        </div> 
     
        <div
          className="publication_tab dn"
          style={{
            display: "grid",
            width: "70vw",
            margin: "0px 113px",
            gridTemplateColumns: "repeat(3,1fr)",
          }}
         
        >
        
           
           <Record/>
           <Record/>
           <Record/>
           <Record/>
           <Record/>
           <Record/>
        </div>  
        <div
          className="publication_tab dn"
          style={{
            display: "grid",
            width: "70vw",
            margin: "0px 113px",
            gridTemplateColumns: "repeat(3,1fr)",
          }}
         
        >
        
           
          <Identification/>
          <Identification/>
          <Identification/>
          <Identification/>
          <Identification/>
          <Identification/>
          <Identification/>
          <Identification/>
          <Identification/>
        </div> 
    </div>
  )
}

export default Dif_Tab_item
