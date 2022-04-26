import express from 'express';

const router = express.Router();

router.get('/', (req, resp) => {
    if (req.session.userId) {
        resp.render('../views/front/front', {loggedIn: true, userName: req.session.userName})
    } else {
        resp.render('../views/welcome/welcome', {message: "welcome", loggedIn: false})
    }
})
export default router