//import pfp from "../assets/profilepic.png";
import { useState, useEffect } from "react";
//import Navbar from '../components/Navbar'

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

  window.addEventListener("resize", checkScreenWidth);

  useEffect(() => {
    checkScreenWidth();
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
        ><span className="text-white text-center">Soft Skills</span></div>
        <div
          className={`flex flex-col items-center justify-center w-40 h-40 text-xl rounded-full bg-gradient-to-t from-pink-400 to-orange-400 cursor-pointer mx-4 ${
            secondParagraphBorder ? "bg-gradient-to-b from-pink-500 to-orange-500 w-44 h-44" : "w-40 h-40"
          } ${!isSmallScreen ? "w-40 h-40 text-xl" : "w-24 h-24 text-base"}`}
          onClick={toggleSecondParagraph}
        ><span className="text-white text-center">About Me</span></div>
        <div
          className={`flex flex-col items-center justify-center w-40 h-40 text-xl rounded-full bg-gradient-to-l from-purple-400 to-pink-400 cursor-pointer mx-4 ${
            thirdParagraphBorder ? "bg-gradient-to-r from-purple-500 to-pink-500 w-44 h-44" : "w-40 h-40"
          } ${!isSmallScreen ? "w-40 h-40 text-xl" : "w-24 h-24 text-base"}`}
          onClick={toggleThirdParagraph}
        ><span className="text-white text-center">Technical Skills</span></div>
      </div>
      <div className="flex-1 p-4">
        {showFirstParagraph && (
          <div className="text-lg mt-5 mx-auto w-3/4 text-center">
            <h1 className="text-3xl mt-2 font-bold">Soft Skills</h1>
            <ul className="text-2xl mt-2">
              <li>• Time management</li>
              <li>• Conflict resolution</li>
              <li>• Collaborative & friendly</li>
              <li>• Tenacious & determined</li>
              <li>• Adaptable to swift changes</li>
              <li>• Understanding business needs</li>
              <li>• Maintain a positive attitude in tough situations</li>
            </ul>
        </div>
        )}
        {showSecondParagraph && (
                    <div className="mt-5 mx-auto w-3/4 text-center">
                    <h1 className="text-3xl font-bold">About Me</h1>
          <p></p>
                    </div>
        )}
        {showThirdParagraph && (
          <div className="text-lg mt-5 mx-auto w-3/4">
            <div className="text-2xl mt-2 flex justify-around">
  <div>
    <h2 className="text-3xl mt-2 font-bold">Frontend</h2>
    <ul>
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
    <ul>
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
