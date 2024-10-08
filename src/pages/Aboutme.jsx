import { useState, useEffect } from "react";

export default function Aboutme() {
  const [showFirstParagraph, setShowFirstParagraph] = useState(false);
  const [showSecondParagraph, setShowSecondParagraph] = useState(true);
  const [showThirdParagraph, setShowThirdParagraph] = useState(false);
  const [firstParagraphBorder, setFirstParagraphBorder] = useState(false);
  const [secondParagraphBorder, setSecondParagraphBorder] = useState(true);
  const [thirdParagraphBorder, setThirdParagraphBorder] = useState(false);

  const toggleFirstParagraph = () => {
    setShowFirstParagraph(!showFirstParagraph);
    setShowSecondParagraph(false);
    setShowThirdParagraph(false);
    setFirstParagraphBorder(!firstParagraphBorder);
    setSecondParagraphBorder(false);
    setThirdParagraphBorder(false);
  };

  const toggleSecondParagraph = () => {
    setShowFirstParagraph(false);
    setShowSecondParagraph(!showSecondParagraph);
    setShowThirdParagraph(false);
    setFirstParagraphBorder(false);
    setSecondParagraphBorder(!secondParagraphBorder);
    setThirdParagraphBorder(false);
  };

  const toggleThirdParagraph = () => {
    setShowFirstParagraph(false);
    setShowSecondParagraph(false);
    setShowThirdParagraph(!showThirdParagraph);
    setFirstParagraphBorder(false);
    setSecondParagraphBorder(false);
    setThirdParagraphBorder(!thirdParagraphBorder);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const checkScreenWidth = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <div className={`flex flex-col h-screen overflow-y-auto bg-purple-100 ${!isSmallScreen ? "ml-[25%]" : "mt-10"}`}>
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
      <div className="flex justify-center mt-10">
        <div
          className={`flex flex-col items-center justify-center w-40 h-40 text-xl rounded-full bg-gradient-to-l from-pink-400 to-purple-400 cursor-pointer mx-4 ${
            firstParagraphBorder ? "bg-gradient-to-r from-pink-500 to-purple-500 w-44 h-44" : "w-40 h-40"
          } ${!isSmallScreen ? "w-40 h-40 text-xl" : "w-24 h-24 text-base"}`}
          onClick={toggleFirstParagraph}
        >
          <span className="text-white text-center">Resume</span>
        </div>
        <div
          className={`flex flex-col items-center justify-center w-40 h-40 text-xl rounded-full bg-gradient-to-t from-pink-400 to-orange-400 cursor-pointer mx-4 ${
            secondParagraphBorder ? "bg-gradient-to-b from-pink-500 to-orange-500 w-44 h-44" : "w-40 h-40"
          } ${!isSmallScreen ? "w-40 h-40 text-xl" : "w-24 h-24 text-base"}`}
          onClick={toggleSecondParagraph}
        >
          <span className="text-white text-center">About Me</span>
        </div>
        <div
          className={`flex flex-col items-center justify-center w-40 h-40 text-xl rounded-full bg-gradient-to-l from-purple-400 to-pink-400 cursor-pointer mx-4 ${
            thirdParagraphBorder ? "bg-gradient-to-r from-purple-500 to-pink-500 w-44 h-44" : "w-40 h-40"
          } ${!isSmallScreen ? "w-40 h-40 text-xl" : "w-24 h-24 text-base"}`}
          onClick={toggleThirdParagraph}
        >
          <span className="text-white text-center">Technical Skills</span>
        </div>
      </div>

      <div className="flex-1 p-4">
        {showFirstParagraph && (
          <div className="text-lg mt-5 mx-auto w-3/4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* Resume Content */}
              <div className="bg-gradient-to-tr text-white from-orange-400 via-pink-400 to-purple-400 shadow-md rounded px-8 pt-6 pb-4 mb-4">
                <h1 className="text-2xl font-bold">Kaelyn Patsy-Jean Rasmussen</h1>
                <p className="text-xl">Writer & Developer || Ogden, UT</p>
              </div>

              <div className="mb-6 font-light text-base">
                <h2 className="text-xl font-bold underline">Education</h2>
                <div className="m-4">
                  <p className="font-bold">Full-Stack Bootcamp Certification, University of Utah, 2023</p>
                  <p>• M.E.R.N. Stack, JavaScript, GraphQL, Apollo, MySQL, JWT, Git</p>
                  <p className="font-bold">High School Diploma, Two Rivers High School, 2018</p>
                  <p>• Valedictorian, High Honors</p>
                </div>
              </div>

              <div className="mb-6 font-light text-base">
                <h2 className="text-xl font-bold underline">Work History</h2>
                <div className="m-4">
                  <p className="font-bold text-lg">FedEx Ground - Owens Transportation</p>
                  <p className="font-medium text-base">Delivery Driver | 02/2022 - Present</p>
                  <p>• Managed efficient delivery routes for 100-300 packages daily.</p>
                  <p>• Handled package logistics, including pickup and delivery coordination.</p>
                  <p>• Assisted in vehicle maintenance and supported team members in route completion.</p>
                </div>

                <div className="m-4">
                  <p className="font-bold text-lg">Amazon Delivery - Top Flight Logistics</p>
                  <p className="font-medium text-base">Delivery Driver | 08/2021 - 02/2022</p>
                  <p>• Coordinated and executed delivery of 200-350 packages daily within tight schedules.</p>
                  <p>• Provided customer-specific delivery services and assisted fellow drivers.</p>
                </div>

                <div className="m-4">
                  <p className="font-bold text-lg">Wayfair</p>
                  <p className="font-medium text-base">Customer Service Rep | 08/2020 - 08/2021</p>
                  <p>• Addressed online order issues, tracked packages, and managed customer concerns.</p>
                  <p>• Contributed to internal data management and customer satisfaction initiatives.</p>
                </div>

                <div className="m-4">
                  <p className="font-bold text-lg">Humphrey Plumbing Heating and Air & Express Home Services</p>
                  <p className="font-medium text-base">Office Administrator | 09/2019 - 06/2020</p>
                  <p>• Scheduled appointments and managed service requests.</p>
                  <p>• Supported website content management and handled confidential documents.</p>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold underline">Additional Experience</h2>
                <div className="m-4">
                  <p className="font-bold text-lg">Savers <span className="font-medium text-base">Retail Associate | 05/2017 - 05/2019</span></p>
                  <p className="font-bold text-lg">Firehouse Subs <span className="font-medium text-base">Crew Member | 08/2016 - 05/2017</span></p>
                </div>
              </div>

              <div className="font-light text-base">
                <h2 className="text-lg font-bold">References provided upon request</h2>
              </div>
            </div>
          </div>
        )}
        {showSecondParagraph && (
          <div className="mt-5 mx-auto w-3/4 text-center">
              <h1 className="text-3xl font-bold">Hello World!</h1>
          <p className="text-2xl mt-2">Writing has always been at the core of my creativity, whether I’m crafting stories, expressing emotions, or conducting in-depth research. My passion for writing truly took shape during open mic nights, where I performed spoken word and slam poetry. The energy and raw connection of sharing personal stories on stage fueled my love for the art. Life eventually pulled me in different directions, but I still keep my passion alive through poetry nights with close friends, where I not only write but also help others refine their own work.</p>
          <p className="text-2xl mt-4">As I continued exploring creative outlets, I found a new passion: web development. What began as a curiosity turned into a full-fledged journey, allowing me to merge the creativity of writing with the technical precision of coding. Over time, I’ve gained skills working with React.js, Express.js, Node.js, and MongoDB—channeling my love for storytelling into building meaningful digital experiences.</p>
          <p className="text-2xl mt-4">Coding, like writing, became a way for me to construct and share ideas, using a different set of tools but with the same creative spirit. Just as I used words to evoke emotion and connection, I now use code to build platforms that enable interaction and innovation. Both crafts, while distinct, offer me the ability to create something from nothing, blending art with function.</p>
          <p className="text-2xl mt-4">Now, whether through writing or web development, my goal remains the same: to create and contribute to projects that inspire connection and positive change. My work, no matter the medium, is rooted in the desire to blend creativity with functionality, ensuring that the stories I tell and the platforms I build are accessible, impactful, and relevant to the world around us.</p>
          </div>
        )}
{showThirdParagraph && (
  <div className="text-lg mt-5 mx-auto w-3/4">
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-around md:items-start">
      <div className="mb-4 md:mb-0">
        <h2 className="text-3xl mt-2 font-bold">Frontend</h2>
        <ul className="text-2xl">
          <li>• Vite</li>
          <li>• React.js</li>
          <li>• Javascript</li>
          <li>• Bulma</li>
          <li>• Blender</li>
          <li>• Tailwindcss</li>
          <li>• Apollo client</li>
          <li>• GraphQL (client-side)</li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl mt-2 font-bold">Backend</h2>
        <ul className="text-2xl">
          <li>• JWT</li>
          <li>• APIs</li>
          <li>• Node.js</li>
          <li>• Express.js</li>
          <li>• MySQL</li>
          <li>• MongoDB</li>
          <li>• Apollo server</li>
          <li>• GraphQL (server-side)</li>
        </ul>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
}
