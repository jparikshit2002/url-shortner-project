const express= require('express')


const app = express()
const PORT = process.env.PORT || 6770;


app.listen(PORT, ()=>{
    console.log(`The server is runnig on ${PORT} `)
})

