import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-400 p-10 ">
      <form className="flex flex-col  items-center gap-5">
        <h1 className="text-4xl font-extrabold">Contact us</h1>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col">
            <label className="text-lg font-bold"> First Name </label>
            <input
              type="text"
              className="bg-white border-blue-700 text-black p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-bold"> Last Name </label>
            <input
              type="text"
              className="bg-white border-blue-700 text-black p-2 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col">
            <label className="text-lg font-bold"> Email </label>
            <input
              type="email"
              placeholder="test@test.com"
              className="bg-white border-blue-700 text-black p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-bold">Phone Number</label>
            <input
              type="tel"
              placeholder="+355 06XXXXXXXX"
              className="bg-white border-blue-700 text-black p-2 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-bold">
            {" "}
            Message you want to send{" "}
          </label>
          <textarea
            cols="50"
            rows="10"
            type="textarea"
            className="bg-white text-black rounded-md  "
          />
        </div>
        <div className="flex justify-center font-black">
          <button className="p-3 bg-blue-700 rounded-sm"> Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
