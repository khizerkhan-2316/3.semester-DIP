import {BadRequestError, NotFoundError} from "../model/error/error.js";
import Sid from "../model/error/Sid.js";

function handleError(error, req, resp, next) {
    if (error) {
        if (error instanceof NotFoundError) {
            resp.status(404)
            resp.send({status: 404, sid: error.sid, message: error.message})
        } else if (error && error instanceof BadRequestError) {
            resp.status(400)
            resp.send({status: 400, sid: error.sid, message: error.message})
        } else {
            resp.status(500)
            resp.send({status: 500, sid: Sid.SERVER_ERROR, message: error.message})
        }
    } else {
        next()
    }
}


export default handleError