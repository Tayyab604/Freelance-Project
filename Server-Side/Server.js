const express = require("express");
const cors = require("cors");
const DB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config({path : "./Config/config.env"});
const app =express()
const port = process.env.PORT || 5000;
DB()

app.use(cors({origin : [process.env.FRONTEND_URL]}))
app.use(express.json())
app.use("/api/users",require("./routes/userRoutes"))
app.use("/api/profile",require("./routes/ProfileRoutes"))
app.use("/api/chat",require("./routes/ChatRoutes"))
app.use("/api/messages",require("./routes/MessageRoutes"))
app.use(errorHandler)


app.listen(port,()=>{
    console.log(`Server Start On this Port : ${port}`)
})
