import {createServer} from './CreateServer.js'

const PORT = process.env.PORT || 7500
createServer(PORT)