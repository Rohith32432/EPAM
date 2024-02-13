import React from 'react'

function Listtweets({show,ack}) {
  const handleedit=(e)=>{
    // ack(false)
    console.log(e.target.textContent);
  }
  return (
    <div  >
    <div style={{'display':'flex','justifyContent':'space-around',alignItems:'center'}} >

    <h4 onClick={handleedit} style={{cursor:'pointer' ,width:'50%'}}>{show}</h4>
    <div >
    <button>like</button>
    <button>dislike</button>
    </div></div>
    </div>
  )
}

export default Listtweets