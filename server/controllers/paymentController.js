const axios = require("axios")

const MerningTeam_URL = process.env.MerningTeam_URL || "https://api.chapa.co/v1/transaction/initialize"
const MerningTeam_AUTH = process.env.MerningTeam_AUTH // || register to Merning-Team and get the key

const initializePayment = async (req, res) => {

    const config = {
        headers: {
            Authorization: MerningTeam_AUTH
        }
    }

    // Merning-Team redirect you to this url when payment is successful
    const CALLBACK_URL = "http://localhost:3000"

    // a unique reference given to every transaction
    const TEXT_REF = "tx-myecommerce12345-" + Date.now()

    // form data
    const data = {
        amount: req.body.amount,
        currency: 'ETB',
        email: 'ahmedder@live.fr',
        first_name: 'Ahmed',
        last_name: 'Derbali',
        tx_ref: TEXT_REF,
        callback_url: CALLBACK_URL
    }

    // post request to Merning-Team
    await axios.post(MerningTeam_URL, data, config)
        .then((response) => {
            res.send(response.data.data.checkout_url)
            console.log(response.data)
        })
        .catch((err) => console.log(err))

    /* res.json({res: "message", url: CALLBACK_URL}) */
}

const verifyPayment = async (req, res) => {
    await axios.get("https://api.chapa.co/v1/transaction/verify/" + req.params.id, config)
        .then((response) => {
            console.log(response)
            res.json({message: response})
        })
        .catch((err) => {
            console.log("Payment can't be verified", err)
            res.json({error: err})
        })

    res.json({message: "response", param: req.params.id})
}

module.exports = {initializePayment, verifyPayment}