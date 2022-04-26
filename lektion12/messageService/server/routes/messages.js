const express = require('express');
const router = express.Router();
const {
  getMessages,
  getMessage,
  createMessage,
  updateMessage,
  deleteMessage,
} = require('../controllers/routesController/messages');

router.route('/').get(getMessages).post(createMessage);
router.route('/:id').get(getMessage).put(updateMessage).delete(deleteMessage);

module.exports = router;
