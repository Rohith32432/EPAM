import React, { useEffect, useState } from 'react';

export function Edit({uptxt,ack,data,addData}){
    const[ntxt,settxt]=useState(uptxt)
    function handlechange(e)
    {
        settxt(e.target.value)  
    }
    function save() {
        const id = data.findIndex(item => item === uptxt); 
        const newdata=[...data]
        newdata[id]=ntxt
        addData(newdata)
        ack(true)
    }
    
    return(
        <>
        <div>
            <div id="modifyItem" className="hidden">
                <h1 id="modifyItemHeader">Edit tweet</h1>
                <textarea id="modifyItemInput" onChange={handlechange} value={ntxt} ></textarea>
                <div className="formButtons">
                    <button id="cancelModification" onClick={()=>{ack(true)}}>Cancel</button>
                    <button id="saveModifiedItem" onClick={save} >Save Changes</button>
                </div>
            </div>
        </div></>
    )
}

function AddTweet({ addtweet, ack }) {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        var val = e.target.value;
        setText(val);
    };

    const handleClick = () => {
        if (text.length !== 0){
        addtweet(text);
         ack(true)
        }
    };

    useEffect(() => {
       
    }, [text]);
    return (
        <div>
            <div id="modifyItem" className="hidden">
                <h1 id="modifyItemHeader">Add tweet</h1>
                <textarea id="modifyItemInput" onChange={handleChange} value={text}></textarea>
                <div className="formButtons">
                    <button id="cancelModification" onClick={()=>{ack(true)}}>Cancel</button>
                    <button id="saveModifiedItem" onClick={handleClick}>Save Changes</button>
                </div>
            </div>
        </div>
    );
}

export default AddTweet;
