import {useState, useEffect} from 'react';

import mindMapper from "../assets/mindmapper.png";
import animalsWow from "../assets/animalswow.png";
import weatherApi from "../assets/weatherapi.png";
import svgLogo from "../assets/svglogo.png";
import employeeTracker from "../assets/employeetracker.png";
import socialNetworkDB from "../assets/socialnetworkdb.png";

export default function Portfolio() {

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
      <section className="grid grid-cols-3 mt-10">
        <a href="https://mind-mapper.up.railway.app/login" className="m-2">
          <img src={mindMapper} alt="Mind Mapper" className="aboutmepic max-w-full h-auto"></img>
        </a>
        <a href="https://itsmenickfromschool.github.io/animalsWow02/" className="m-2">
          <img src={animalsWow} alt="Animals Wow" className="aboutmepic max-w-full h-auto"></img>
        </a>
        <a href="https://whats-a-pj.github.io/Weather-Dashboard-ServerSideAPIs/" className="m-2">
          <img src={weatherApi} alt="Weather API" className="aboutmepic max-w-full h-auto"></img>
        </a>
      </section>
      <section className="grid grid-cols-3">
        <a href="https://github.com/whats-a-pj/OOP-SVG-Logo-Maker" className="m-2">
          <img src={svgLogo} alt="SVG Logo Generator" className="aboutmepic max-w-full h-auto"></img>
        </a>
        <a href="https://github.com/whats-a-pj/SQL-Employee-Tracker" className="m-2">
          <img src={employeeTracker} alt="Employee Tracker" className="aboutmepic max-w-full h-auto"></img>
        </a>
        <a href="https://github.com/whats-a-pj/Social-Network-API" className="m-2">
          <img src={socialNetworkDB} alt="Social Network DB" className="aboutmepic max-w-full h-auto"></img>
        </a>
      </section>
    </div>
  );
}
