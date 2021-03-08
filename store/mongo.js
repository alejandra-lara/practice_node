
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
let _db;
const  handleCon = (callback) => {
    console.log("[db] mongo connection start");
    MongoClient.connect("mongodb://localhost:27017")
    .then(result=>{
        console.log("connected")
        _db = result.db("mydb")
        callback()
    }).catch(error=>{

        console.log("Connection mistake",error)})
        throw error
}
const getdb = () =>{
    if(_db){
        return _db
    }
    throw "No database found!"
}

exports.handleCon = handleCon;
exports.getdb = getdb;