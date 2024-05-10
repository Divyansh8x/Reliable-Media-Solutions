import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");
  const [data, setData] = useState(undefined);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Append the selected option to the form data
    formData.append("selected_option", data);

    // Append the access key
    formData.append("access_key", "a5b38997-08e0-4e70-92b4-edbeab849f12");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const responseData = await response.json();
    if (responseData.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", responseData);
      setResult(responseData.message);
    }
  };

  const options = [
    "Social Media Marketing Services",
    "Webiste Development",
    "Graphic Designing & Video Editing",
    "Social Media Audits ",
    "WhatsApp Marketing",
    "Branding",
    "Social Media Advertising",
    "Google Ads",
    "Customer Relationship Management ",
  ];

  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log("User Selected Value - ", event.target.value);
  };
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0 mt-5">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-4 mr-2 bg-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in touch
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Reliable Media Solution
              </p>

              <div className="flex items-center mt-8 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold max-w-full">
                  Noida
                </div>
              </div>

              <div className="flex mt-3 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold max-w-full">
                  +91 7017328392
                </div>
              </div>

              <div className="flex  mt-3 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-1 text-md  font-semibold max-w-full">
                  reliablemediasolutions.in@gmail.com
                </div>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="p-6 flex flex-col justify-center"
            >
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mb-2">
                Fill in the form to get detailed quote
              </p>
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>
              <div className="w-100 mt-2 py-2 px-2 rounded-lg bg-white  font-semibold placeholder: text-gray-400">Select Services</div>

              <select
                className="w-100 mt-2 py-2 px-2 rounded-lg bg-white border border-gray-400 font-semibold focus:border-orange-500 focus:outline-none placeholder: text-gray-400"
                required
                onChange={onOptionChangeHandler}
              >
                <option></option>
                {options.map((option, index) => {
                  return (
                    <option className="text-black" key={index}>
                      {option}
                    </option>
                  );
                })}
              </select>
              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                  Message
                </label>
                <textarea
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Write your Message"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>
              <input type="hidden" name="subject" value="Services Inquiry"/>
              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
            <span className="text-center font-Raleway font-semibold">
              {result}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
