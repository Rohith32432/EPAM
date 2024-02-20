import React from 'react'

function LikedTweets({ldata}) {
  return (
    <div  >
     
    <div style={{'display':'flex','justifyContent':'space-around',alignItems:'center'}} >
    

      <h4  >{ldata}</h4>,
      <button >unlike</button>

    </div>
  
  </div>
  )
}

export default LikedTweets