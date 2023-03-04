const express = require("express")

const app = express()

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

require("./config")(app)

const IndexRoutes = require("./routes/index.routes")
app.use("/", IndexRoutes)

module.exports = app
