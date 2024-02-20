import React, { useState, useEffect } from 'react';

export function Lst({ name, id, rid }) {
  return (
    <div style={{ display: 'flex', justifyContent:"space-between" ,width:'50%', alignItems: 'center' }} >
      <h4>{name}</h4>
      <button onClick={() => rid(id)}>unlike</button>
   
    </div>
  );
}

function LikedTweets({ data, ack }) {
  const [ldata, setLdata] = useState([]);

  useEffect(() => {
    setLdata(data); // Set initial data when the component mounts
  }, [data]);

  const idx = (id) => {
    setLdata(
      ldata.filter((_, index) =>
        index !== id
      )
    );
  };

  return (
    <div>
      <h1>Liked Tweets</h1>
      <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center' }}>
        {ldata.map((e, i) => (
          <Lst key={i} name={e} rid={idx} id={i} />
        ))}
      </div>
      <button onClick={() => ack(false)}>Go-Back</button>
    </div>
  );
}

export default LikedTweets;
