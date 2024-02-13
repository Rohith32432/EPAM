import React, { useEffect, useState } from 'react'
import {Edit} from './addTweet';

function Listtweets({show,data,addData}) {
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

    <h4 onClick={handleedit} style={{cursor:'pointer' ,width:'50%'}}>{show}</h4>
    <div >
    <button>like</button>
    <button>dislike</button>
    </div></div>:
    <Edit uptxt={clktxt} ack={setack} data={data} addData={addData} />
  }
  </div>
  )
}

export default Listtweets