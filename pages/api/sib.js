const SibApiV3Sdk = require("sib-api-v3-sdk");
require("dotenv").config();
export default function handler(req, res) {
  SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
    process.env.SENDINBLUE_API;
  const { email } = req.body;
  new SibApiV3Sdk.TransactionalEmailsApi()
    .sendTransacEmail({
      subject: "Hello from the Node SDK!",
      sender: { email: "veereshrm789@gmail.com", name: "Ishwar Patil" },
      replyTo: { email: "veereshrm789@gmail.com", name: "Ishwar Patil" },
      to: [{ name: "John Doe", email: `${email}` }],
      htmlContent:
        "<html><body><h1>This is a transactional email {{params.bodyMessage}}</h1></body></html>",
      params: { bodyMessage: "Made just for you!" },
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
