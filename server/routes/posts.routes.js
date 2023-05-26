const posts = require("../controller/posts.controller")

const Router = require('express').Router
const router = new Router()

router.post('/add', posts.addPost)
router.post('/delete', posts.deletePost)
router.post('/get_posts', posts.getAllPost)

module.exports = router