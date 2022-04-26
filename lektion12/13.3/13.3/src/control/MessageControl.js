import Repository from "../persistence/Repository.js";
import Sid from '../model/error/Sid.js'
import {BadRequestError, DomainValidationError, NotFoundError} from "../model/error/error.js";

class MessageControl {
    #repository

    constructor() {
        this.#repository = new Repository()
    }

    get(id) {
        if (!this.#repository.exist(id)) {
            throw new NotFoundError(Sid.MESSAGE_NOT_FOUND, `the message id ${id} does not exist`)
        }
        return this.#repository.getMessage(id)
    }

    getAll() {
        return this.#repository.getMessages()
    }

    createMessage(dto) {
        try {
            return this.#repository.createMessage(dto.text)
        } catch (e) {
            if (e instanceof DomainValidationError) {
                throw new BadRequestError(e.sid, e.message)
            }
            throw e;
        }
    }

    updateMessage(id, dto) {
        if (!this.#repository.exist(id)) {
            throw new NotFoundError(Sid.MESSAGE_NOT_FOUND)
        }
        try {
            return this.#repository.updateMessage(id, dto.text)
        } catch (e) {
            if (e instanceof DomainValidationError) {
                throw new BadRequestError(e.sid, e.message)
            }
            throw e;
        }
    }

    deleteMessage(id) {
        return this.#repository.delete(id)
    }
}

export default MessageControl

