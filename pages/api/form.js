export default function handler(req, res) {
  // Get data submitted in request's body.

  if (req.method === "POST") {
    const data = req.body;
    console.log("body: ", data);
    return res.status(200).json(data);
  }
  return res.status(500).json({
    msg: "This is needs to be post req",
  });
}
