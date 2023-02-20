const { request, response } = require('express')
const express =require('express')
const router =express.Router()

router.get("/",(request,response)=>{
    response.send("User List")
})
router.get("/new",(request,response)=>{
    response.send("User New Form")
})

router.post("/",(request,response)=>{
response.send("Create User")
})
 
router
.route("/:id")
    .get((request,response)=>{
        response.send(`Get User with Id $(req.params.id)`)
        })
.put((request,response)=>{
    response.send(`Update User with Id $(req.params.id)`)
    })
.delete((request,response)=>{
        response.send(`Delete User with Id $(req.params.id)`)
    })
  router.param("id",(request,response,next,id)=>{
 console.log(id);
  })

module.exports =router