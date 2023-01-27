const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const port = 3000

const corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

const db = require("./app/models")
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!")
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err)
        process.exit()
    })

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
