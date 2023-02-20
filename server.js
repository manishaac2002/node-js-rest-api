const { request, response } = require('express')
const express =require ('express')
const app =express()

app.set("view engine", "ejs") 

app.get('/',(request, response) =>{
    console.log("here")
    response.render("index",{text : "World"})
    
})

const userRouter =require('./routers/users')

app.use('/users',userRouter )

app.listen(3000)