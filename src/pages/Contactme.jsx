import React, { useState } from 'react';

export default function Contactme() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Send email logic here (This is a simplified example)
    const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    window.open(`mailto:r4smussen.pj@gmail.com?subject=Contact Form&body=${encodeURIComponent(emailBody)}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen overflow-y-auto bg-purple-100">
      <style>
        {`
          /* Hide the scrollbar for WebKit browsers */
          ::-webkit-scrollbar {
            display: none;
          }
          /* Hide scrollbar for Firefox */
          scrollbar-width: none;
          /* Hide scrollbar for IE/Edge */
          -ms-overflow-style: none;
        `}
      </style>
      <div className="w-3/4 max-w-md px-4 text-purple-900">
        <h1 className="text-2xl mb-4">Contact Me</h1>
        <section className="resumeContact">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name">Subject:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Looking for work?"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-purple-400 rounded-md p-2 focus:outline-none focus:border-purple-800"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Your email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="employer@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-purple-400 rounded-md p-2 focus:outline-none focus:border-purple-800"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi my name is Employer, after looking over your portfolio I wanted to contact you in regards to your.."
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-purple-400 rounded-md p-2 focus:outline-none focus:border-purple-800"
              ></textarea>
            </div>

            <div className="flex justify-center text-white">
              <button type="submit" className="bg-purple-400 px-4 py-2 rounded-md hover:bg-purple-800">
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

