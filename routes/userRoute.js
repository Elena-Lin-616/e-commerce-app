const express = require("express");
const userController = require("./../controllers/userController");

const router = express.Router();

router.route("/test").get(userController.sayHi);

module.exports = router;
