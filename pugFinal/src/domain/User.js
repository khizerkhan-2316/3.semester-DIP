import {validate as uuidValidate} from 'uuid';
import Credentials from "./Credentials.js";

class User {
    #id
    #credentials
    #created

    constructor(id, credentials, created) {
        this.#id = id
        this.#credentials = credentials
        this.#created = created
        this.#validate()
    }


    get id() {
        return this.#id;
    }

    get credentials() {
        return this.#credentials;
    }

    get created() {
        return this.#created;
    }

    verify(credentials) {
        return this.credentials.verify(credentials)
    }

    #validate() {
        if (!this.#validateId()) {
            throw new Error("Invalid Id")
        }
        if (!this.#validateCreated()) {
            throw new Error("Invalid create time")
        }

        if (!this.#validateCredentials()) {
            throw new Error("Invalid credentials")
        }
    }

    #validateId() {
        return this.#id && (uuidValidate(this.#id))
    }

    #validateCreated() {
        return this.#created && (this.#created instanceof Date)
    }

    #validateCredentials() {
        return this.#credentials && (this.#credentials instanceof Credentials)
    }
}

export default User