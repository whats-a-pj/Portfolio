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
            firstParagraphBorder ? "bg-gradient-to-r from-pink-500 to-purple-500" : ""
          }`}
          onClick={toggleFirstParagraph}
        ><span className="text-white text-center">Soft Skills</span></div>
        <div
          className={`flex flex-col items-center justify-center w-40 h-40 text-xl rounded-full bg-gradient-to-t from-pink-400 to-orange-400 cursor-pointer mx-4 ${
            secondParagraphBorder ? "bg-gradient-to-b from-pink-500 to-orange-500" : ""
          }`}
          onClick={toggleSecondParagraph}
        ><span className="text-white text-center">Proficiencies</span></div>
        <div
          className={`flex flex-col items-center justify-center w-40 h-40 text-xl rounded-full bg-gradient-to-l from-purple-400 to-pink-400 cursor-pointer mx-4 ${
            thirdParagraphBorder ? "bg-gradient-to-r from-purple-500 to-pink-500" : ""
          }`}
          onClick={toggleThirdParagraph}
        ><span className="text-white text-center">Personal life</span></div>
      </div>
      <div className="flex-1 p-4">
        {showFirstParagraph && (
          <div className="text-lg mt-5 mx-auto w-3/4 text-center">
            <h1 className="text-2xl mt-2 font-bold">Soft Skills</h1>
            <ul className="mt-2">
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
                    <h1 className="text-3xl font-bold">Proficiencies</h1>
                    <p className="text-2xl mt-2">
                      • MongoDB • Express.js • React.js • Node.js • Javascript • MySQL • GraphQL • Apollo server/client • Insomnia • JWT • APIs • jQuery • Tailwindcss • Bulma • Blender • 
                    </p>
            {/*<h1 className="text-xl mt-2 font-bold"> Soft skills include: </h1>
            <p> • Attention to detail • team-player • communication • well-organized • adaptability • great attitude • not a complainer • understanding business needs • asking questions when unsure</p>*/}
                    </div>
        )}
        {showThirdParagraph && (
          <div className="text-lg mt-5 mx-auto w-3/4 text-center">
            <h1 className="text-2xl mt-2 font-bold">Personal Life</h1>
              <p>
          I have an ungodly amount of hobbies ranging from playing piano and
          bass guitar to creating digital art on my iPad and rollerskating! I
          love to read books and play video games when I have time at the end
          of a long day. I have been vegan for three years and there are
          plenty of misconceptions on that topic, however- I can confirm I am
          NOT protein or nutrient deficient and I do not think I am better
          than meat eaters. I like to encourage others to think about what is
          really on their plate because as a consumer- most of us do not stop
          to think about how things are made or prefer to not know at all.
          Thank you for taking the time to look at my portfolio website! You
          can reach out to me via the Contact tab above or by clicking the
          icons at the bottom of the page.
              </p>
              <p>
            I have been interested in web development since I was in high
            school but never pursued it as a career until this year. It has
            been a journey to say the absolute least. Along the way though, I
            have come to find some things interesting that I would like to dive
            further into after now that I have completed the full-stack bootcamp provided by the University of
            Utah; building 3D models with blender is a big interest of mine,
            though I am not sure how I will apply it in web development quite
            yet. I am very interested in teaching myself how to use React Native
            for mobile development as well- I want to create an app to help
            others who struggle with their mental health as many of us do, by
            giving them a way to track their daily emotions and possibly even
            send them insights on how to break the small habits that set them
            back.
          </p>
          </div>
        )}
      </div>
    </div>
  );
}
