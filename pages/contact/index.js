import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/sib", { email })
      .then((res) => {
        alert("Send Mail To You");
        setEmail("");
      })
      .catch((e) => console.log(e));
    const Data = {
      name,
      email,
      message,
    };
    //const JSONData = JSON.stringify(Data);
    //console.log(JSONData);
    // const endpoint = "/api/form";
    // const option = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   // Body of the request is the JSON data we created above.
    //   data: JSONData,
    // };
    try {
      const { data } = await axios({
        url: "/api/form",
        method: "POST",
        data: Data,
      });
      console.log("Response Back", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <form className="flex flex-col max-w-1/4" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Name"
            id="name"
            value={name}
            required={true}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Emial Id"
            id="email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
