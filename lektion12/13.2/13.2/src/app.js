import express from 'express'
import generateDocument from "./generateHtml.js";
import getUsers from "./integration/userClient.js";

const PORT = process.env.PORT || 7700
const app = express()

app.use(express.static('public'));

app.get("/", (req, resp) => {

    getUsers().then(data => generateDocument(data)).then(data => {
        resp.status(200)
        resp.send(data)
    })
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})