const dbConfig = require("../config/dib.config.js")

const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.category = require("./category.model.js")(mongoose)
db.timeEntry = require("./timeentry.model.js")(mongoose)

module.exports = db
