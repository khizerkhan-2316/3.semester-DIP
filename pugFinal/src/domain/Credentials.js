class Credentials {
    #username
    #password

    constructor(username, password) {
        this.#username = username
        this.#password = password
        this.#validate()
    }


    get username() {
        return this.#username;
    }

    get password() {
        return this.#password;
    }

    verify(credentials) {
        return credentials && credentials.username === this.username && credentials.password === this.password
    }

    #validate() {
        if (!this.#validateUsername()) {
            throw new Error("Invalid UserName")
        }
        if (!this.#validatePassword()) {
            throw new Error("Invalid Password")
        }
    }

    #validatePassword() {
        return this.password && this.password.length >= 6
    }

    #validateUsername() {
        return this.username && this.username.length <= 10
    }
}

export default Credentials