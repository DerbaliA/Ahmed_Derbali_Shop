const express = require("express")
const router = express.Router()
const cors = require("cors")
const {initializePayment, verifyPayment} = require("../controllers/paymentController")

// initialize payment endpoint
router.post('/', cors(), initializePayment)

// verify payment endpoint
router.get('/verify/:id', cors(), verifyPayment)

module.exports = router