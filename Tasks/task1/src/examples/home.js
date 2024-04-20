import React, { useEffect, useState } from 'react'

function Home() {

  const [data,setdata]=useState([])
  useEffect(()=>{
      async function getdata(){
      const req=await fetch('https://dummyjson.com/products/')
      const res=await req.json()
      setdata(res.products.slice(0,10))
      }
      getdata()
  },[])

  return (
    <div>
      <h1>Example E-Commerce</h1>
      {data.map((e,i)=>(
         <div key={i} >
            <img src={e.thumbnail} alt="" height={300} />
            <a href={`/product/${e.id}`}><h2>{e.title}</h2></a> 
         </div>
      ))}
    </div>
  )
}

export default Home