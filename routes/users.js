const express = require('express');
const router = express.Router();
const userCnt1 = require("../controllers/userController.js");

router.get("/", userCnt1.findAll);
router.post("/create", userCnt1.create);
router.post("/remove", userCnt1.remove);

module.exports = router;
