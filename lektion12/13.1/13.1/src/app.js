import express from 'express'
import getPublicFiles from "./files.js";
import generateDocument from "./generateHtml.js";

const PORT = process.env.PORT || 7700
const app = express()

app.use(express.static('public'));

app.get("/", (req, resp) => {

    getPublicFiles().then(data => generateDocument(data)).then(data => resp.status(200).send(data))
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})