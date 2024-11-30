const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // Adresse email
    pass: process.env.PASSWORD, // Mot de passe de l'email
  },
});

app.post("/send-email", async (req, res) => {
  const { email, message } = req.body;
  console.log(req.body); // Ajoutez cette ligne pour vérifier les données reçues

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Message from ${email}`,
    text: `Message from ${email}: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).send({ message: "Failed to send email.", error });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
