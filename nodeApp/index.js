const express = require('express')

const app = express()

const id = process.env.ID


app.get('/',(req,res)=>{
    res.send(`You've been served by ${id}`)
})

app.listen(3000, (err)=>{
   if(err)console.log(err)

   console.log('Listening on 3000')
})