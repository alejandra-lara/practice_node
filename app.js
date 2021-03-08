const express = require("express")
const app = express();
const user_routes = require("./routes/user")
const MongoConnect = require("./store/mongo")
app.use(user_routes);

MongoConnect(()=>{
    app.listen(3001);
    console.log("esta escuchando por el ",3000)
})
