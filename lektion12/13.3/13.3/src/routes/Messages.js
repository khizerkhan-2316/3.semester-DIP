import express from 'express';
import MessageControl from '../control/MessageControl.js'

const router = express.Router();

const messageControl = new MessageControl()

router.get('/messages', (req, resp) => {
    const messages = messageControl.getAll().map(m => m.toJSON())
    resp.status(200)
    resp.send(messages)

})
router.get('/messages/:id', (req, resp) => {
    const message = messageControl.get(req.params.id).toJSON()
    resp.status(200)
    resp.send(message)
})

router.post('/messages', (req, resp) => {
    const message = messageControl.createMessage(req.body)
    resp.status(200)
    resp.send(message.toJSON())
})

router.put('/messages/:id', (req, resp) => {
    const message = messageControl.updateMessage(req.params.id, req.body)
    resp.status(200)
    resp.send(message.toJSON())
})

router.delete('/messages/:id', (req, resp) => {
    messageControl.deleteMessage(req.params.id)
    resp.sendStatus(204)
})

export default router