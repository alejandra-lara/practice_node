const express = require("express")
const router = express.Router()

router.get("/hola",(req,res,next)=>{

    console.log("Hola que hace")
    res.status(200).send({"message":"Hola que hace"})
    
}
)
router.post("/hola",(req,res,next)=>{
    console.log("hizo el post")
    res.status(200).send({"message":"Hola que post"})
})
module.exports = router;