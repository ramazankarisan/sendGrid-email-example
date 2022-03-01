const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const cors = require('cors');


// const client = require('@sendgrid/client');
// client.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  .then(() => {
    console.log(`Database connected :) `);
  })
  .catch(err => {
    console.log(err);
  });
app.use(express.json());
app.use(cors());

const userRoute = require("./routes/user")

app.use("/user", userRoute)



app.listen(4000, () => {
  console.log('Server started on port 4000');
})