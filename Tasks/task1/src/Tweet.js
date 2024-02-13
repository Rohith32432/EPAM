import React, { useState } from 'react'
import AddTweet from './addTweet'
import Listtweets from './ListTweets'

function Tweet() {
    const [status, setstatus] = useState(true)
    const [data, setdata] = useState([])
    const addData = (updata) => {
        if (!data.includes(updata))
            setdata([...data, updata])

    }
    console.log(data);

    const [likeddata, setliked] = useState([])
    function getliked(id) {
        console.log(id);
        setliked([...likeddata, data[id]])
    }
    // const viewliked=()=>{

    // }
    const [likedst, setlikedst] = useState(false)
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
                                    <button onClick={() => { setlikedst(true) }} >Liked</button> : ""
                            }
                        </div>

                        {
                            data.map((e, i) => (<Listtweets key={i} index={i} show={e} data={data} addData={setdata} idx={getliked} ridx={remove} />))
                            }

                    </div> : <AddTweet addtweet={addData} ack={setstatus} />

                }

            </div>
        </>
    )
}

export default Tweet