import Sid from "./error/Sid.js";

class Message {

    #id
    #text

    constructor(id, text) {
        this.#id = id
        this.#text = text
        this.#validate(text)
    }

    get id() {
        return this.#id
    }

    get text() {
        return this.#text
    }

    set text(text) {
        this.#validate(text)
        this.#text = text
    }

    toJSON() {
        return {id: this.#id, message: this.#text}
    }

    #validate(text) {
        if (text.length > 200) {
            throw new DomainValidationError(Sid.MESSAGE_TOO_LONG)
        }
    }
}

export default Message