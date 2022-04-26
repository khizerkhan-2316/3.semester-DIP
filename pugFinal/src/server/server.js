import express from 'express'
import UserRouter from './routes/UserRouter.js'
import AuthRouter from './routes/AuthRouter.js'
import morgan from 'morgan'
import session from 'express-session'

class Server {
    #app
    #userService

    constructor(userService) {
        this.#app = express()
        this.#userService = userService
        const userRouter = new UserRouter(this.#userService)
        const authRouter = new AuthRouter(this.#userService)

        this.#app.use(morgan('tiny'))
        this.#app.use(express.json())
        this.#app.use(express.static('public'))

        this.#app.use(session({
            secret: '80c48d4f-02a8-44f1-be88-8c6173acd39e',
            resave: false,
            saveUninitialized: false
        }))
        this.#app.set('view engine', "pug")
        this.#app.set('views', "src/server/views")
        //Routes
        this.#app.use(userRouter.router)
        this.#app.use(authRouter.router)
    }

    startServer(port) {
        this.#app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        })
    }
}

export default Server