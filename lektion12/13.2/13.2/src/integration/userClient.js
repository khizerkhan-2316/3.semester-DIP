import fetch from 'node-fetch'
import User from "../model/User.js";

const URL = "https://jsonplaceholder.typicode.com/users"

async function getUsers() {
    const resp = await fetch(URL)
    if (!resp.ok) {
        throw new Error("Connection failed")
    }
    const json = await resp.json()
    return json.map(ju => new User(ju.id, ju.name, ju.username))
}

export default getUsers
