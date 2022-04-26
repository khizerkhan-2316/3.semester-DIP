const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const app = express()

app.use(express.static("public"))
app.use(session({secret: 'password', saveUninitialized: true, resave: true}))//saved to local storage
app.use(express.json())
app.use(morgan('tiny'))

app.use(express.urlencoded({
    extended: true
}))
const users = new Map()


app.post("/login", (req, resp) => {
    console.log(req.body)
    const {userName, password} = req.body
    console.log("setting username " + userName + "  " + password)
    if (users.get(userName) && users.get(userName).password === password) {
        console.log("setting username " + userName)
        req.session.userName = userName
        resp.redirect("/examples/forms/users.html")
    } else {
        resp.sendStatus(400)
    }
})

app.post("/signup", (req, resp) => {
    console.log("SIGNUP", JSON.stringify(req.session))

    const {firstName, lastName, userName, password} = req.body
    if (users.get(userName)) {
        resp.sendStatus(400)
    } else {
        users.set(userName, {firstName: firstName, lastName: lastName, userName: userName, password: password})
        resp.redirect("/examples/forms/formLogin.html")
    }
})

app.get("/users", (req, resp) => {
    console.log(req.session.userName)
    if (req.session.userName) {
        resp.send(JSON.stringify(Array.from(users.values()).map(u => {
            return {firstName: u.firstName, lastName: u.lastName}
        })))
    } else {
        console.log("failing", req.session)
        resp.sendStatus(401)
    }
})

app.post("/cars", (req, resp) => {
        console.log(req.session.userName)
        if (!req.session.userName) {
            resp.sendStatus(401)
        } else {
            if (!users.get(req.session.userName).cars) {
                users.get(req.session.userName).cars = []
            }
            users.get(req.session.userName).cars.push(req.body)
            resp.redirect("/examples/forms/cars.html")
        }
    }
)
app.get("/cars", (req, resp) => {
    console.log(req.session.userName)
    if (req.session.userName) {
        resp.send(JSON.stringify(Array.from(users.values()).map(u=>u.cars).reduce((prev,curr) =>prev.concat(curr)).map(c=>`${c.model},${c.year}`)))
    } else {
        console.log("failing", req.session)
        resp.sendStatus(401)
    }
})

app.listen(8082, () => {
    console.log("Listening on port 8082....")
})