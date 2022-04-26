import Repository from "../persistence/Repository.js";

class UserService {
    #repository

    constructor() {
        this.#repository = new Repository()
    }

    createUser(credentials) {
        return this.#repository.createUser(credentials)
    }

    verifyUser(credentials) {
        const user = this.#repository.getUserByUserName(credentials.username)
        return user && user.verify(credentials)
    }
}

export default UserService