const express=require('express')

const fs =require('fs')

const server=express()
server.use(express.json())

const path='file1.txt'
const content='sample data using for creating file in node'

// fs.writeFile(path,content,(err)=>{
//     if(err) console.log('error ocuured',err);
//     else console.log('file created');
//      return
// })

const pwd=[]

const check=(req,res,next)=>{
    const password=req.query.pwd
  if(password!==' ') {
      pwd.find((e)=>e==password) 

      next()
  }
  else {

      res.send('password not match')
  }
}
server.get('/',check,(req,res)=>{
    const data='acessable'
    res.send(data)
})

server.post('/',(req,res)=>{
    
    const {name,content,password}=req.body
    if(password!==' ') pwd.push(password) 
     fs.writeFile(`${name}.txt`,content,(err)=>{
        if(err) console.log(err);
        else console.log('file created');
     })

    res.json('file created sucessful')
})

server.listen(2024,()=>{
    console.log('server listned at 2024');
})