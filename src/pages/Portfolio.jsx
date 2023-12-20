import {useState, useEffect} from 'react';

import mindMapper from "../assets/mindmapper2.png";
import animalsWow from "../assets/animalswow.png";
import weatherApi from "../assets/weatherapi.png";
import svgLogo from "../assets/svglogo.png";
import employeeTracker from "../assets/employeetracker.png";
import theWeb from "../assets/theweb.png";

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
    <div className={`flex flex-col h-screen overflow-y-auto bg-purple-100 ${!isSmallScreen ? "ml-[25%]" : "pt-20"}`}>
  <style>
    {`
          .image-wrapper {
            position: relative;
            overflow: hidden;
          }
          .image-wrapper img {
            width: 100%;
            transition: filter 0.3s ease;
            filter: blur(5px);
          }
          .image-wrapper:hover img {
            filter: blur(0);
          }
          .image-text {
            position: absolute;
            top: 0;        /* Align to the top of the container */
            left: 50%;     /* Keep horizontally centered */
            width: 100%;
            transform: translateX(-50%); /* Horizontally translate to center the text */
            color: white;
            z-index: 1;
            text-align: center;
            transition: opacity 0.3s ease;
          }
          
          .image-wrapper:hover .image-text {
            opacity: 0;
          }
          @media (min-width: 1400px) {
            .large-screen-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }
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
      <section className="grid grid-cols-1 md:grid-cols-2 large-screen-grid">
      <div className='bg-gradient-to-bl from-orange-400 via-pink-400 to-purple-400 m-2'>
    <h1 className="text-white text-center text-3xl mt-2 mb-2">Mind Mapper</h1>
    <div className="image-wrapper">
        <div className="image-text pb-2 text-xl bg-gradient-to-bl from-orange-400 via-pink-400 to-purple-400">
            A website for fellow web developers to create solid game plans for their projects. This uses MySQL, Node.js, Express.js, and Handlebars.js
        </div>
        <a href="https://mind-mapper.up.railway.app/login">
            <img src={mindMapper} alt="Mind Mapper" className="max-w-full h-auto border-l-4 border-r-4 border-b-4 border-pink-500"></img>
        </a>
    </div>
</div>

        <div className='bg-gradient-to-bl from-orange-400 via-pink-400 to-purple-400 m-2'>
        <h1 className="text-white text-center text-3xl mt-2 mb-2">Animals, Wow!</h1>
        <div className="image-wrapper">
        <a href="https://itsmenickfromschool.github.io/animalsWow02/">
          <img src={animalsWow} alt="Animals Wow" className="max-w-full h-auto border-l-4 border-r-4 border-b-4 border-pink-500"></img>
        </a>
        <div className="image-text pb-2 text-xl bg-gradient-to-bl from-orange-400 via-pink-400 to-purple-400">A website for the "cure to boredom" we used two API's for GIF & fact rendering; this was created using Javascript, HTML and Bulma for styling</div>
        </div>
        </div>
        <div className='bg-gradient-to-bl from-orange-400 via-pink-400 to-purple-400 m-2'>
        <h1 className="text-white text-center text-3xl mt-2 mb-2">Weather Dashboard</h1>
        <div className="image-wrapper">
        <a href="https://whats-a-pj.github.io/Weather-Dashboard-ServerSideAPIs/">
          <img src={weatherApi} alt="Weather API" className="max-w-full h-auto border-l-4 border-r-4 border-b-4 border-pink-500"></img>
        </a>
        <div className="image-text pb-2 text-xl bg-gradient-to-bl from-orange-400 via-pink-400 to-purple-400">A simple weather app created using the OpenWeather API & DayJS for fetching accurate weather data and displaying proper dates</div>
        </div>
        </div>
        <div className='bg-gradient-to-bl from-orange-400 via-pink-400 to-purple-400 m-2'>
        <h1 className="text-white text-center text-3xl mt-2 mb-2">theWeb</h1>
        <div className="image-wrapper">
        <a href="https://theweb-production.up.railway.app/">
          <img src={theWeb} alt="Social Network DB" className="max-w-full h-auto border-l-4 border-r-4 border-b-4 border-pink-500"></img>
        </a>
        <div className="image-text pb-2 text-xl bg-gradient-to-bl from-orange-400 via-pink-400 to-purple-400">A social network application for web developers built with the MERN stack, GraphQL and Apollo</div>
        </div>
        </div>
        <div className='bg-gradient-to-bl from-orange-400 via-pink-400 to-purple-400 m-2'>
        <h1 className="text-white text-center text-3xl mt-2 mb-2">SVG Logo Creator</h1>
        <div className="image-wrapper">
        <a href="https://github.com/whats-a-pj/OOP-SVG-Logo-Maker">
          <img src={svgLogo} alt="SVG Logo Generator" className="max-w-full h-auto border-l-4 border-r-4 border-b-4 border-pink-500"></img>
        </a>
        <div className="image-text pb-2 text-xl bg-gradient-to-bl from-orange-400 via-pink-400 to-purple-400">A command-line application that uses Node.js & Inquirer to generate a simple SVG logo</div>
        </div>
        </div>
        <div className='bg-gradient-to-bl from-orange-400 via-pink-400 to-purple-400 m-2'>
        <h1 className="text-white text-center text-3xl mt-2 mb-2">Employee Manager</h1>
        <div className="image-wrapper">
        <a href="https://github.com/whats-a-pj/SQL-Employee-Tracker">
          <img src={employeeTracker} alt="Employee Tracker" className="max-w-full h-auto border-l-4 border-b-4 border-r-4 border-pink-500"></img>
        </a>
        <div className="image-text pb-2 text-xl bg-gradient-to-bl from-orange-400 via-pink-400 to-purple-400">A command-line application that uses Node.js, Inquirer & MySQL to manage an employee database</div>
        </div>
        </div>
      </section>
    </div>
  );
}
