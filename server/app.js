const express = require("express")

const app = express()

// require("./config")(app)

const IndexRoutes = require("./routes/index.routes")
app.use("/", IndexRoutes)

module.exports = app
