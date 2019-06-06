const express = require("express")
const app = express()
const publicRoot = "./wwwroot/"
app.use(express.static(publicRoot))

let users = [{
        id: 1,
        name: "Jude",
        email: "user@email.com",
        password: "password"
    },
    {
        id: 2,
        name: "Emma",
        email: "emma@email.com",
        password: "password2"
    },
]
app.get("/", (req, res, next) => {
    res.sendFile("index.html", {root: publicRoot})
})
app.get("/api/user", (req, res) => {
    console.log(users)
    res.send(users)
})
app.listen(3000, () => {
    console.log("port: 3000")
})