import React, { useState } from 'react'
import AddTweet from './addTweet'
import Listtweets from './ListTweets'

function Tweet() {
    const [status,setstatus] =useState(true)
    const [data,setdata]=useState([])
    const addData = (updata)=>{
        if(!data.includes(updata))
            setdata([...data,updata])
        
    }
    console.log(data);
  
    console.log(data);
  return (
    <>
        <div className="App">
    {status?

		<div id="tweetItems" className="listPage">
			<h1>Simple Twitter</h1>
			<div id="navigationButtons">
				<button className="addTweet"onClick={()=>{ setstatus(false)}} >Add tweet</button>
            
			</div>
        {data.map((e,i)=>(<Listtweets key={i} show={e} data={data} addData={setdata} />))}

            </div>:<AddTweet addtweet={addData}  ack={setstatus} />
           
}   

        </div>
    </>
  )
}

export default Tweet