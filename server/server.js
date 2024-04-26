const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const DB = require("./config/config")
const port = process.env.port || 5000

// MIDDLEWARES
app.use(express.json(), cors({
    origin: 'http://localhost:3000', credentials: true
}),
    express.urlencoded({extended: true}), express.urlencoded({extended: true}));
app.use(express.static("public"));


app.use('/api/items', require("./routes/items"))
app.use('/api/payment', cors(), require("./routes/payment"))

app.listen(port, console.log(`>======>> *** Server is running in port *** : 🎈🎈🎈${port}🎈🎈🎈`))