import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ContactForm = () => {
  const [form, setForm] = useState({ email: "", subject: "", message: "" })
  const [showForm, setShowForm] = useState(true)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/user/sendEmail", form)
      .then((response) => {
        console.log(response);
        setShowForm(false)
      }, (error) => {
        console.log(error);
      });
  }

  return (
    <>
      {showForm ?
        <Grid container justifyContent="center"
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item component="form" onSubmit={handleSubmit} xs={3} sm={4} md={6} sx={{ display: 'flex', flexDirection: "column", justifyContent: "space-evenly", height: "450px" }}>
            <TextField
              id="outlined-name"
              label="Email"
              name="email"
              placeholder="your email"
              value={form.email}
              onChange={(e) => handleChange(e)}
              required
            />
            <TextField
              id="outlined-name"
              label="Subject"
              name="subject"
              placeholder="subject"
              value={form.subject}
              onChange={(e) => handleChange(e)}
              required
            />
            <TextField
              id="outlined-multiline-static"
              label="Your Message"
              name="message"
              value={form.message}
              multiline
              rows={4}
              placeholder="please write your message"
              onChange={(e) => handleChange(e)}
              required


            />
            <Button variant="contained" type="submit" color="success">submit</Button>

          </Grid>

        </Grid>
        : <h1>Thanks for sending a message</h1>
      }

    </>
  )
}

export default ContactForm