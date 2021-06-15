//imports
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json());


const test = {data: [1,2,3,4,5,6]}
app.get("/", (req, res) => {
    res.send(test).json()
})

app.listen(3001, () => {
    console.log("Server started on port 3001.")
})