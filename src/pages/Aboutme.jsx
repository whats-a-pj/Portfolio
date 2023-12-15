import pfp from "../assets/profilepic.png";
import { useState } from "react";

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

  return (
    <div className="flex flex-col h-screen overflow-y-auto bg-purple-100">
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
      <div className="flex justify-center mt-4">
        <div
          className={`flex flex-col items-center justify-center w-40 h-40 text-xl rounded-full bg-gradient-to-l from-purple-400 to-orange-400 cursor-pointer mx-4 ${
            firstParagraphBorder ? "bg-gradient-to-r from-purple-500 to-orange-500" : ""
          }`}
          onClick={toggleFirstParagraph}
        ><span className="text-white text-center">Tech Interests</span></div>
        <img src={pfp}
          className={`w-3/12 h-3/12 rounded-full bg-purple-500 cursor-pointer mx-4 ${
            secondParagraphBorder ? "border-2 border-purple-500" : ""
          }`}
          onClick={toggleSecondParagraph}
        ></img>
        <div
          className={`flex flex-col items-center justify-center w-40 h-40 text-xl rounded-full bg-gradient-to-l from-purple-400 to-orange-400 cursor-pointer mx-4 ${
            thirdParagraphBorder ? "bg-gradient-to-r from-purple-500 to-orange-500" : ""
          }`}
          onClick={toggleThirdParagraph}
        ><span className="text-white text-center">Personal life</span></div>
      </div>
      <div className="flex-1 p-4">
        {showFirstParagraph && (
          <div className="text-lg mt-5 mx-auto w-3/4 text-center">
            <h1 className="text-2xl mt-2 font-bold">Tech Interests</h1>
            <p className="mt-2"> Things that I am learning right now to help improve my overall portfolio are: React Native for mobile development, AWS because many companies want developers who know how to utilize that specific cloud service and I want to learn Python so that I can take a shot at Machine-Learning and AI. Technology only goes forward, I plan to move with it!</p>
            <p> On the side- I am learning how to use Blender so that I might implement it with my web development skills, not too challenging; I think it really comes down to learning the software and then finding the correct npm packages for what you are trying to achieve! </p>
        </div>
        )}
        {showSecondParagraph && (
                    <div className="mt-5 mx-auto w-3/4 text-center">
                    <h1 className="text-3xl font-bold">MERN Stack Developer</h1>
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
