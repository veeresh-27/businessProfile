const SibApiV3Sdk = require("sib-api-v3-sdk");
require("dotenv").config();
export default function handler(req, res) {
  SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
    process.env.SENDINBLUE_API;
  const { email, name } = req.body;
  new SibApiV3Sdk.TransactionalEmailsApi()
    .sendTransacEmail({
      subject: "Thank you for contacting Ishwar Patil",
      sender: { email: "veereshrm789@gma.com", name: "Ishwar Patil" },
      replyTo: { email: "veereshrm789@gmail.com", name: "Ishwar Patil" },
      to: [{ name: `${name}`, email: `${email}` }],
      htmlContent:
        "<html><body><h1>Thank you for getting in touch. We will shortly get back to you {{params.bodyMessage}}</h1></body></html>",
      params: { bodyMessage: "" },
    })
    .then(
      function (data) {
        console.log(data);
      },
      function (error) {
        console.error(error);
      }
    );
  res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}
