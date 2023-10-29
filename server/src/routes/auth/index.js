const express = require("express");
const signupRouter = require("./signup");
const codeRouter = require("./send-code");
const loginRouter = require("./login");
const meRouter = require("./me");

const router = express.Router();

router.use(codeRouter);
router.use(signupRouter);
router.use(loginRouter);
router.use(meRouter);

module.exports = router;
