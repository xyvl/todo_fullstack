const Router = require("express").Router;
const user = require('../controller/user.controller')
const router = new Router();

router.post("/regist", user.regist);
router.post("/delete", user.deleteUser);
router.post("/auth", user.auth);

module.exports = router;
