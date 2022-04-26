import {v4} from 'uuid'
import Message from '../model/Message.js'

class Repository {

    static #messages = new Map()

    createMessage(text) {
        const id = v4()
        const message = new Message(id, text)
        Repository.#messages.set(id, message)
        return message
    }

    getMessage(id) {
        return Repository.#messages.get(id)
    }

    getMessages() {
        return Array.from(Repository.#messages.values())
    }

    exist(id) {
        return Repository.#messages.get(id)
    }

    update(id, text) {
        const message = Repository.#messages.get(id)
        message.text = text
        return message
    }

    delete(id) {
        Repository.#messages.delete(id)
    }
}

export default Repository