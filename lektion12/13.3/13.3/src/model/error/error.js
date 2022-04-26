export class NotFoundError extends Error {
    #sid

    constructor(sid, message) {
        super(message)
        this.#sid = sid
    }

    get sid() {
        return this.#sid
    }
}

export class BadRequestError extends Error {
    #sid

    constructor(sid, message) {
        super(message)
        this.#sid = sid
    }

    get sid() {
        return this.#sid
    }
}

export class DomainValidationError extends Error {
    #sid

    constructor(sid, message) {
        super(message)
        this.#sid = sid
    }

    get sid() {
        return this.#sid
    }
}


