import express from "express";
import Credentials from "../../domain/Credentials.js";

class AuthRouter {
    #router
    #userService

    constructor(userService) {
        this.#router = express.Router()
        this.#userService=userService
        this.#setup()
    }

    get router() {
        return this.#router;
    }

    #setup() {
        this.#router.get("/", (req, resp) => {
            if (req.session?.loggedIn) {
                resp.render('front', {loggedIn: req.session?.loggedIn})
            } else {
                resp.render('welcome', {loggedIn: req.session?.loggedIn})
            }
        })
        this.#router.get("/login", (req, resp) => {
            resp.render('login', {loggedIn: req.session?.loggedIn})
        })
        this.#router.get("/signup", (req, resp) => {
            resp.render('signup', {loggedIn: req.session?.loggedIn})
        })
        this.#router.post("/login", (req, resp) => {
            try {
                const credentials = new Credentials(req.body.username, req.body.password)

                if (this.#userService.verifyUser(credentials)) {
                    req.session.loggedIn = true
                    resp.send(200)
                } else {
                    resp.status(400)
                    resp.send({error: "credentials not verified"})

                }
            } catch (e) {
                resp.status(400)
                resp.send({error: e.message})
            }
        })
        this.#router.get("/logout", (req, resp) => {
            if (req.session) {
                req.session.destroy((error) => {
                    if (req.session) {
                        req.session.loggedIn = false
                        console.log("session destroy failed")
                    }
                })
                resp.send(200)
            }
        })

    }
}


export default AuthRouter
