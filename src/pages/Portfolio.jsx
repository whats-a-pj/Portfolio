import {useState, useEffect} from 'react';

import mindMapper from "../assets/mindmapper2.png";
import animalsWow from "../assets/animalswow.png";
import weatherApi from "../assets/weatherapi.png";
import svgLogo from "../assets/svglogo.png";
import employeeTracker from "../assets/employeetracker.png";
import theWeb from "../assets/theweb.png";

export default function Portfolio() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const checkScreenWidth = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  window.addEventListener("resize", checkScreenWidth);

  useEffect(() => {
    checkScreenWidth();
  }, []);

  return (
    <div className={`flex flex-col h-screen overflow-y-auto bg-purple-100 ${!isSmallScreen ? "ml-[25%]" : "pt-20"} ${navbarOpen ? "mt-20" : "mt-0"}`}>
{/* Custom CSS for specific styles */}
<style>
{`
    .image-wrapper img {
        transition: filter 0.3s ease;
        filter: blur(5px);
    }
    .image-wrapper:hover img {
        filter: blur(0);
    }
    .image-text {
        transform: translateX(-50%);
    }
    .image-wrapper:hover .image-text {
        opacity: 0;
    }
    @media (min-width: 1400px) {
        .large-screen-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }
    ::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
`}
</style>

<section className="grid grid-cols-1 md:grid-cols-2 large-screen-grid">
    <div className='bg-gradient-to-tr from-orange-400 via-pink-400 to-purple-400 m-2'>
      <h1 className="text-white text-center text-3xl mt-2 mb-2">Mind Mapper</h1>
        <div className="p-2 text-xl text-white text-center">
            <div className="mb-2">A website for fellow web developers to create solid game plans for their projects. This uses MySQL, Node.js, Express.js, and Handlebars.js</div>
            <a href="https://mind-mapper.up.railway.app/login" target="_blank">
              {/* hover:blur-none blur-sm p-2 */}
                <img src={mindMapper} alt="Mind Mapper" className="max-w-full h-auto"></img>
            </a>
        </div>
    </div>
    <div className='bg-gradient-to-tr from-orange-400 via-pink-400 to-purple-400 m-2'>
      <h1 className="text-white text-center text-3xl mt-2 mb-2">Animals, Wow!</h1>
        <div className="p-2 text-xl text-white text-center">
        <div className="mb-2">A website for a "cure to boredom" we used two API's for GIF & fact rendering, HTML, JavaScript & Bulma for styling</div>
            <a href="https://itsmenickfromschool.github.io/animalsWow02/" target="_blank">
              <img src={animalsWow} alt="Animals Wow" className="max-w-full h-auto"></img>
            </a>
        </div>
    </div>
    <div className='bg-gradient-to-tr from-orange-400 via-pink-400 to-purple-400 m-2'>
      <h1 className="text-white text-center text-3xl mt-2 mb-2">Weather Dashboard</h1>
        <div className="p-2 text-xl text-white text-center">
        <div className="mb-2">A simple weather app created using the OpenWeather API & DayJS for fetching accurate weather data and displaying proper dates</div>
            <a href="https://whats-a-pj.github.io/Weather-Dashboard-ServerSideAPIs/" target="_blank">
              <img src={weatherApi} alt="Weather API" className="max-w-full h-auto"></img>
            </a>
        </div>
    </div>
    <div className='bg-gradient-to-tr from-orange-400 via-pink-400 to-purple-400 m-2'>
      <h1 className="text-white text-center text-3xl mt-2 mb-2">theWeb</h1>
        <div className="p-2 text-xl text-white text-center">
        <div className="mb-2">A social network application for web developers built with the MERN stack, GraphQL and Apollo</div>
            <a href="https://theweb-production.up.railway.app/" target="_blank">
              <img src={theWeb} alt="Social Network DB" className="max-w-full h-auto"></img>
            </a>
        </div>
    </div>
    <div className='bg-gradient-to-tr from-orange-400 via-pink-400 to-purple-400 m-2'>
      <h1 className="text-white text-center text-3xl mt-2 mb-2">SVG Logo Creator</h1>
        <div className="p-2 text-xl text-white text-center">
        <div className="mb-2">A CLI application that uses Node.js & Inquirer to generate a simple SVG logo</div>
            <a href="https://github.com/whats-a-pj/OOP-SVG-Logo-Maker" target="_blank">
              <img src={svgLogo} alt="SVG Logo Generator" className="max-w-full h-auto"></img>
            </a>
        </div>
    </div>
    <div className='bg-gradient-to-tr from-orange-400 via-pink-400 to-purple-400 m-2'>
      <h1 className="text-white text-center text-3xl mt-2 mb-2">Employee Manager</h1>
        <div className="p-2 text-xl text-white text-center">
        <div className="mb-2">A CLI application that uses Node.js, Inquirer & MySQL to manage an employee database</div>
            <a href="https://github.com/whats-a-pj/SQL-Employee-Tracker" target="_blank">
              <img src={employeeTracker} alt="Employee Tracker" className="max-w-full h-auto"></img>
            </a>
        </div>
    </div>
  </section>
</div>
);
}
