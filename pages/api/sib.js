import SibApiV3Sdk from "sib-api-v3-sdk";

export default function handler(req, res) {
  SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
    "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";
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
