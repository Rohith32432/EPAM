import React, { useEffect, useState } from 'react'
import {Edit} from './addTweet';

function Listtweets({show,data,addData,idx,index,ridx}) {
  const [clktxt,setclktxt]=useState('')
  const[ack,setack]=useState(true)
  const handleedit=(e)=>{
    setclktxt(e.target.textContent)
    setack(false)
  }
  
  return (
    <div  >
      {ack?
    <div style={{'display':'flex','justifyContent':'space-around',alignItems:'center'}} >

    <h4 onClick={handleedit} style={{cursor:'pointer'}}>{show}</h4>
    <div >
    <button onClick={()=>{idx(index)}} >like</button>
    <button onClick={()=>{ridx(index)}}>remove</button>
    </div></div>:
    <Edit uptxt={clktxt} ack={setack} data={data} addData={addData} />
  }
  </div>
  )
}

export default Listtweets