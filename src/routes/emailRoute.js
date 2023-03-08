const express = require('express');
const router = express.Router();
const {
    sendOtp,
    verifyOtp
} = require("../controllers/otpController");

router.post("/sendOtp", sendOtp);
router.get("/verifyOtp", verifyOtp);

module.exports = router;