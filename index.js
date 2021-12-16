const express = require('express')
const Gun = require('gun')

const app = express()
const port = process.env.PORT || 8765
app.use(Gun.serve)

const server = app.listen(port, () => {
    console.log("Listening at: http://localhost://" + port)
})

Gun({web: server})

app.get("/", (req, res)=>{
    res.send("hii this is the turse backend relay server, this node is a place where your data will be backed up in case everynode goes offline. Thank you for useing Turse!! Lets grow this network")
    } )
app.get("/gun",(req, res)=>{
    res.send("hiii, you have reached the network relay server!!")
})