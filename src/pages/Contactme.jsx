import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

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

    // Send the email using EmailJS
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service_id', 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'default_template_id', 
      e.target, 
      import.meta.env.VITE_EMAILJS_USER_ID || 'default_user_id'
    )
    
      .then((result) => {
          console.log(result.text);
          // Handle success here (e.g., showing a success message)
      }, (error) => {
          console.log(error.text);
          // Handle errors here (e.g., showing an error message)
      });

    // Optionally reset the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const checkScreenWidth = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  window.addEventListener("resize", checkScreenWidth);

  useEffect(() => {
    checkScreenWidth();

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <div className={`flex flex-col h-screen overflow-y-auto bg-purple-100 ${!isSmallScreen ? "ml-[25%]" : "mt-10"} items-center justify-center`}>
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
                placeholder="Looking for work P.J.?"
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
                placeholder="Hi my name is Employer, after looking over your portfolio I wanted to contact you in regards to.."
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-purple-400 rounded-md p-2 focus:outline-none focus:border-purple-800"
              ></textarea>
            </div>
            <div className="flex justify-center text-white">
              <button type="submit" className="bg-gradient-to-tr from-orange-400 via-pink-400 to-purple-400 px-4 py-2 rounded-md hover:bg-purple-800">
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

// import { useState, useEffect } from 'react';
// import emailjs from 'emailjs-com';

// export default function Contactme() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, message } = formData;

//     const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
//     window.open(`mailto:r4smussen.pj@gmail.com?subject=Contact Form&body=${encodeURIComponent(emailBody)}`);
//   };

//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

//   const checkScreenWidth = () => {
//     setIsSmallScreen(window.innerWidth <= 768);
//   };

//   window.addEventListener("resize", checkScreenWidth);

//   useEffect(() => {
//     checkScreenWidth();
//   }, []);

//   return (
//     <div className={`flex flex-col h-screen overflow-y-auto bg-purple-100 ${!isSmallScreen ? "ml-[25%]" : "mt-10"} items-center justify-center`}>
//       <style>
//         {`
//           /* Hide the scrollbar for WebKit browsers */
//           ::-webkit-scrollbar {
//             display: none;
//           }
//           /* Hide scrollbar for Firefox */
//           scrollbar-width: none;
//           /* Hide scrollbar for IE/Edge */
//           -ms-overflow-style: none;
//         `}
//       </style>
//       <div className="w-3/4 max-w-md px-4 text-purple-900">
//         <h1 className="text-2xl mb-4">Contact Me</h1>
//         <section className="resumeContact">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex flex-col">
//               <label htmlFor="name">Subject:</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Looking for work P.J.?"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="border border-purple-400 rounded-md p-2 focus:outline-none focus:border-purple-800"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="email">Your email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="employer@gmail.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="border border-purple-400 rounded-md p-2 focus:outline-none focus:border-purple-800"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="message">Message:</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="Hi my name is Employer, after looking over your portfolio I wanted to contact you in regards to.."
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="border border-purple-400 rounded-md p-2 focus:outline-none focus:border-purple-800"
//               ></textarea>
//             </div>

//             <div className="flex justify-center text-white">
//               <button type="submit" className=" bg-gradient-to-tr from-orange-400 via-pink-400 to-purple-400 px-4 py-2 rounded-md hover:bg-purple-800">
//                 Send
//               </button>
//             </div>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// }

