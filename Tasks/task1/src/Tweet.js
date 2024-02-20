import React, { useState } from 'react'
import AddTweet from './addTweet'
import Listtweets from './ListTweets'
import LikedTweets from './LikedTweets'
function Tweet() {
    const [status, setstatus] = useState(true)
    const [data, setdata] = useState([])
    const addData = (updata) => {
        if (!data.includes(updata))
            setdata([...data, updata])

    }
    // console.log(data);

    const [likedst, setlikedst] = useState(false)
    const [likeddata, setliked] = useState([])
    function getliked(id) {
        console.log(id);
        setliked([...likeddata, data[id]])
    }
    // console.log(likeddata);
    // const viewliked=()=>{

    // }
    function remove(id) {
        const newData = data.filter((_, index) => index !== id);
        setdata(newData);
    }

    return (
        <>
            <div className="App">
              
                            {  status ?

                    <div id="tweetItems" className="listPage">
                        <h1>Simple Twitter</h1>
                        <div id="navigationButtons">
                            <button className="addTweet" onClick={() => { setstatus(false) }} >Add tweet</button>
                            {
                                likeddata.length > 0 ?
                                    <button onClick={() => { setlikedst(true) || setstatus(false)}} >Liked</button> : ""
                            }
                            {likedst ? <button>heloo</button>:""}
                        </div>

                        {
                            data.map((e, i) => (<Listtweets key={i} index={i} show={e} data={data} addData={setdata} idx={getliked} ridx={remove} />))
                            }

                    </div> :  !likedst ?<AddTweet addtweet={addData} ack={setstatus} />:
                    
                likeddata.map((e,i)=>(
                    console.log(e),
                    <LikedTweets  key={i} ldata={e}/>
                ))
               
                }
                

            </div>

        </>
    )
}

export default Tweet