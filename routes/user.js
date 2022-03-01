const { sendEmail } = require('../middleware/sendEmail');

const express = require('express')
const router = express.Router();

router.post("/sendEmail", (req, res) => {
  try {
    const msg = {
      subject: req.body.subject,
      html: `<h2>Message from ${req.body.email}</h2>
      </br><p> ${req.body.message}</p>`
    }

    sendEmail(msg)
    res.send("email sent successfully")
  } catch (error) {
    console.log(error);
  }
})

module.exports = router