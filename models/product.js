const getdb = require("../store/mongo").getdb
class Product {
    constructor(title, price, description, imageUrl){
        this.title = title,
        this.price = price,
        this.description = description,
        this.imageUrl = imageUrl
    }
    save(){
        const db = getdb();
        db.collection("mydb").insertOne(this)
        .then((result)=>{
            console.log(result)
        })
        .catch(err=>{
            console.log("mistake models product",err)
            throw err
    })
    }
}
module.exports=Product