import { useState } from "react";
import axios from "axios";
import support from "../../public/img/support.png";
import Image from "next/image";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const Data = {
      name,
      email,
      message,
    };
    // await axios
    //   .post("/api/sib", { Data })
    //   .then((res) => {
    //     alert(`We have sent an email to ${email}`);
    //     setEmail("");
    //     setName("");
    //     setMessage("");
    //   })
    //   .catch((e) => console.log(e));
    try {
      await fetch("/api/sib", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Data),
      }).then((res) => {
        alert(`We have sent an email to ${email}`);
        setEmail("");
        setName("");
        setMessage("");
      });

      //if sucess do whatever you like, i.e toast notification
    } catch (error) {
      // toast error message. whatever you wish
      console.log(error);
    }

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
    <section className="relative z-10 overflow-hidden bg-white py-20 px-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="text-green-600 mb-4  text-base font-semibold ">
                Contact Us
              </span>
              <h2 className="text-dark text-green-600 mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                GET IN TOUCH WITH US
              </h2>
              <p className=" text-gray-500  mb-9  font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                adiqua minim veniam quis nostrud exercitation ullamco
              </p>
              <div>
                <Image
                  src={support}
                  className="object-contain h-48 w-96"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full px-5 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white  shadow-lg sm:p-12">
              <form onSubmit={handleFormSubmit}>
                <label className="font-medium  text-xl text-slate-700">
                  Username
                </label>
                <div className="mb-3">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    required={true}
                    placeholder="Your Name"
                    className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <label
                  htmlFor="email"
                  className=" font-medium  text-xl text-slate-700"
                >
                  Email
                </label>
                <div className="mb-3">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    required={true}
                    placeholder="Your Email"
                    className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <label className="font-medium text-lg  text-slate-700">
                  Message{" "}
                </label>
                <div className="mb-6">
                  <textarea
                    rows="6"
                    id="message"
                    value={message}
                    placeholder="Leave your Message for Us"
                    className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-transparent font-medium text-lg border-dark  rounded-full border p-2 px-10  transition
                    focus:shadow-outline hover:bg-green-600 hover:text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
