const cors = require("cors")

// Accepting all origins while developing:
module.exports = (app) => {
  app.use(cors({ origin: "*" }))
}
