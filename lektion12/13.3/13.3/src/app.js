import express from 'express'
import BaseRoute from './routes/BaseRoute.js'
import MessageRoute from './routes/Messages.js'
import errorHandler from "./routes/ErrorHandler.js";

const PORT = process.env.PORT || 7700
const app = express()
app.use(express.static('public'));
app.use(express.json());



// ROUTES
app.use(BaseRoute)
app.use(MessageRoute)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})