import express from "express";
import Credentials from "../../domain/Credentials.js";

class UserRouter {
    #router
    #userService

    constructor(userService) {
        this.#router = express.Router()
        this.#userService = userService
        this.#setup()
    }

    get router() {
        return this.#router;
    }

    #setup() {
        this.#router.get("/users", (req, resp) => {

        })
        this.#router.post("/users", (req, resp) => {
            try {
                const credentials = new Credentials(req.body.username, req.body.password)
               this.#userService.createUser(credentials)
                resp.sendStatus(200)
            } catch (e) {
                resp.status(400)
                resp.send({error: e.message})
            }
        })
    }
}


export default UserRouter
