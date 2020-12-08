const express = require('express');
const router = express.Router();
const userCnt1 = require("../controllers/userController.js");

router.get("/", userCnt1.findAll);
router.post("/", userCnt1.create);

module.exports = router;
