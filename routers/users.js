const { request, response } = require('express')
const express =require('express')
const router =express.Router()

router.use(logger)

router.get("/",(request,response)=>{
    response.send("User List")
})
router.get("/new",(request,response)=>{
    response.render("users/new")
})

router.post("/",(request,response)=>{
const isValid = true

    if (isValid) {

        users.push({ firstName: request.body.firstName })
             response.redirect(`/users/${users.length - 1}`)
    }else{

        console.log("Error");
                response.render("users/new",{ firstName: Request.body.firstName})
    }

})
 
router
.route("/:id")
    .get((request,response)=>{
        console.log(request.user);
        
        response.send(`Get User with Id ${request.params.id}`)
        })
    .put((request,response)=>{
        response.send(`Update User with Id ${request.params.id}`)
        })  
    .delete((request,response)=>{
            response.send(`Delete User with Id ${request.params.id}`)
        })

        const users =[{ name : "Manisha"},{name : "Mala"}]
  router.param("id",(request,response,next,id)=>{
 request.user =users[id]
 next()
  })

  function logger(request,response, next){
    console.log(request.originalUrl);
    next()
}

module.exports =router