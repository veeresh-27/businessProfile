//import { SMTPClient } from "emailjs";
import nodemailer from "nodemailer";

export default function handler(req, res) {
  const { email } = req.body;
  // console.log(process.env)
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "veereshrm789@gmail.com",
      pass: "wbjaqqdpmtvssest",
    },
  });

  let mailOptions = {
    from: "veereshrm789@gmail.com",
    to: email,
    subject: "Thank you for contacting with Ishwar Patil",
    text: "We will get back to you as soon as possible",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}
