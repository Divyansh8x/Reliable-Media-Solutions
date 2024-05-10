import React, { useState } from "react";
import Team from "./Team";
import Features from "./Features";

function Career() {
  const [data, setData] = useState(undefined);
  const [result, setResult] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const options = [
    "Social Media Management",
    "Content Creation",
    "Analytics and Data Analysis",
    "Graphic Designing ",
    "SEO (Search Engine Optimization)",
    "Google Ads",
    "Copywriting",
    "Video Editing",
    "WhatsApp Marketing ",
    "Web Development",
    "App Development ",
    "Illustration ",
  ];

  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log("User Selected Value - ", event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const requiredFields = ["name", "email", "number", "text", "tel"];
    let isEmpty = false;
    requiredFields.forEach((field) => {
      if (!form[field].value) {
        isEmpty = true;
        return;
      }
    });

    if (isEmpty) {
      setResult("Please fill out all required fields.");
      return;
    }

    setSubmitting(true);

    const formData = new FormData(form);

    formData.append("selected_option", data);

    // Append the access key
    formData.append("access_key", "a5b38997-08e0-4e70-92b4-edbeab849f12");

    // Send the form data to the server
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      form.submit();
    } else {
      console.log("Error", res);
      setResult("Failed to send email. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full pt-24 pb-4 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-Barlow">
          Join our Team
        </h1>
      </div>
      <div className="Career">
        <form
          className="p-6 flex flex-col justify-center max-w-xl mx-auto sm:px-6 lg:px-8"
          onSubmit={onSubmit}
        >
          <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mb-2 text-center">
            Explore some exciting career opportunities with <br />{" "}
            <span>Reliable Media Solutions</span>{" "}
          </p>
          <div className="flex flex-col ">
            <label htmlFor="name" className="hidden">
              Full Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
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
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="number" className="hidden">
              Contact Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Contact Number"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="city" className="hidden">
              City
            </label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Your City"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
            <div className="w-100 mt-2 py-3 px-3 rounded-lg bg-white text-gray-400 font-semibold">
              {" "}
              Your Skill
            </div>
          </div>
          <select
            className="w-100 mt-2 py-2 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            onChange={onOptionChangeHandler}
          >
            <option></option>
            {options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
          <div className="flex flex-col mt-2">
            <label htmlFor="text" className="hidden">
              Link
            </label>
            <input
              type="texts"
              name="texts"
              id="texts"
              placeholder="Your Portfolio Link"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

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
          <input type="hidden" name="subject" value="Career Inquiry" />
          <input
            className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
            type="submit"
            value={submitting ? "Submitting..." : "Submit"}
            disabled={submitting}
          />
        </form>
        <span className="text-center font-Raleway font-semibold ">
          {result}
        </span>
      </div>
      <Features />
      <Team />
    </>
  );
}

export default Career;
