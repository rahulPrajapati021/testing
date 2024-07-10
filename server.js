const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json({msg: "Testing"});
})

app.post("/custom", (req, res) => {
    console.log("someone sent a request over here ", req.body);
    res.status(200).send("done")
})

app.post("/testing/api/custom", (req, res) => {
    console.log("someone sent a request over here ", req.body);
    res.status(200).send("done")
})

app.listen(4000, () => {
    console.log('server is running on port 4000')
})
