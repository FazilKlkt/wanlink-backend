const express = require('express');
const router = express.Router();
const {
    addUser,
    getUser
} = require("../controllers/userController");

router.post("/", addUser);
router.get("/", getUser);

module.exports = router;