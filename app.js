const express = require("express")
const app = express();
const user_routes = require("./routes/user")

app.use(user_routes);

app.listen(3001);
