class User {
    #username
    #id
    #name

    constructor(id, name, username) {
        this.#id = id
        this.#name = name
        this.#username = username
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    get username() {
        return this.#username
    }

    toJSON() {
        return {id: this.#id, username: this.#username, name: this.#name}
    }
}
export default User