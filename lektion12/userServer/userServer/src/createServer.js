import http from 'http'
import {generateHtml, getUsers} from './handleUsers.js'

const USER_URL = 'https://jsonplaceholder.typicode.com/users'

function createServer(port) {
    http.createServer(async (req, resp) => {
        console.log(req.url)
        if (req.method === 'GET' && req.url == '/users') {
            try {
                const json = await getUsers(USER_URL)
                resp.writeHead(200)
                resp.end(generateHtml(json))
            } catch (error) {
                resp.writeHead(error.status)
                resp.end()
            }
        } else {
            resp.status(404).end('<html><h1>NOT FOUND</h1></html>')
        }

    }).listen(port, () => {
        console.log(`Lytter på port ${port} ...`)
    })
}

export default createServer

