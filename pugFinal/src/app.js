import Server from "./server/server.js";
import UserService from "./service/UserService.js";

const PORT = process.env.PORT || 7600
const userService = new UserService()
const server = new Server(userService)
server.startServer(PORT)