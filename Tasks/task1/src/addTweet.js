import React, { useEffect, useState } from 'react';

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
                <h1 id="modifyItemHeader">Edit tweet</h1>
                <textarea id="modifyItemInput" onChange={handleChange}></textarea>
                <div className="formButtons">
                    <button id="cancelModification" onClick={()=>{ack(true)}}>Cancel</button>
                    <button id="saveModifiedItem" onClick={handleClick}>Save Changes</button>
                </div>
            </div>
        </div>
    );
}

export default AddTweet;
