const express=require("express")
const app =express()
require('dotenv').config()
const PORT=process.env.PORT
app.get("/", (req, res)=>{
    res.send("hello Rivkale")
})

app.listen(PORT,()=>{
    console.log(`Server is now running  in port ${PORT}`)
})

module.exports=app