const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


exports.sendEmail = (msg) => {
  const msgObj = {
    to: process.env.EMAIL_FROM, // Change to your recipient
    from: process.env.EMAIL_FROM, // Change to your verified sender
    subject: msg.subject,
    html: msg.html,
  }

  try {
    sgMail
      .send(msgObj)
      .then(() => {
        // return res.status(200).json({ msg: 'email sent successfully!' })
      }, error => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body)
          // return res.status(500).json({ msg: 'faild to send an email' })
        }

      });


  } catch (error) {
    console.log(error);

  }
}