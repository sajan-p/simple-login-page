const express = require("express");
const signupRouter = require("./signup");
const codeRouter = require("./send-code");
const loginRouter = require("./login");
const meRouter = require("./me");
const updateRouter = require("./update");
const updatePfpRouter = require("./update-pfp");
const removePfpRouter = require("./remove-pfp");

const router = express.Router();

router.use(codeRouter);
router.use(signupRouter);
router.use(loginRouter);
router.use(meRouter);
router.use(updateRouter);
router.use(updatePfpRouter);
router.use(removePfpRouter);

module.exports = router;
