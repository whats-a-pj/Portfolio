import { useState } from "react";
import { Link } from "react-router-dom";
import linkedIn from "../assets/linkedin.png";
import gitHub from "../assets/github2.png";
import medium from "../assets/medium.svg";
import instaGram from "../assets/instagram.png";
import pfp from "../assets/newpfp.png";
import contactMe from "../assets/envelope-svgrepo-com.png";

export default function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check for small screen width and update state
  const checkScreenWidth = () => {
    setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  // Add event listener to check screen width on window resize
  window.addEventListener("resize", checkScreenWidth);

  // Initial check when the component mounts
  useState(() => {
    checkScreenWidth();
  }, []);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`bg-gradient-to-tr from-orange-400 via-pink-400 to-purple-400 text-white py-4 px-6 fixed top-0 left-0 ${
        isSmallScreen ? "w-full min-h-1/8" : "w-1/4 min-h-screen"
      } flex flex-col justify-between`}
    >
      {!isSmallScreen && (
        <div className="flex flex-col items-center">
          <Link to="/minigame" className="font-bold hover:text-purple-900">
          <div className="relative inline-block p-2">
  <img src={pfp} alt="Profile Picture" className="w-full h-full rounded-full" />
  <div className="absolute inset-0 border-2 border-pink-500 rounded-full"></div>
  <div className="absolute inset-2 border-4 border-pink-500 rounded-full"></div>
</div>

          </Link>
          <div className="mt-5 font-bold text-3xl">P.J. Rasmussen</div>
          <div className="text-pink-500 font-bold">____________________</div>
          <div className="text-center text-sm mt-3">
            <p className="text-xl font-bold">• Writer • Poet •</p>
            <p className="text-xl font-bold">• MERN Stack Dev •</p>
            {/* <p className="mt-2">• among other things •</p> */}
          </div>
          <div className="text-pink-500 font-bold">____________</div>
        </div>
      )}
      {isSmallScreen ? (
        <div className="flex justify-between items-center">
          <Link to="#" className="text-2xl font-bold hover:text-purple-900">
            P.J. Rasmussen
          </Link>
          <button onClick={toggleMenu} className="text-2xl font-bold text-white focus:outline-none">
            ☰
          </button>
        </div>
      ) : (
        <nav className="mt-auto space-y-4 font-bold">
          <div>
            <Link to="/" className="hover:text-orange-800 block">
              About Me
            </Link>
            </div>
            <div>
          <Link to="/portfolio" className="hover:text-orange-800 block">
            Web Dev Portfolio
          </Link>
          </div>
          <div>
          <Link to="/portfolioo" className="hover:text-orange-800 block">
            Writing Portfolio
          </Link>
          </div>
          <div>
          <Link to="/contact" className="hover:text-orange-800 block">
            Contact Me
          </Link>
          </div>
          <div>
          {/* <Link to="/resume" className="hover:text-orange-800 block">
            Resume
          </Link> */}
          </div>
          <section className="flex justify-center items-center space-x-4">
        {/* <Link to="/contact" className="font-bold hover:text-orange-800 block">
          <img src={contactMe} alt="contactForm" className="footer-icons h-8 w-8" />
        </Link> */}
        <a href="https://github.com/whats-a-pj" target="_blank">
          <img src={gitHub} alt="Github" className="footer-icons h-8 w-8" />
        </a>
        <a href="https://medium.com/@r4smussen.pj" target="_blank">
          <img src={medium} alt="Medium" className="footer-icons h-8 w-8" />
        </a>
        <a href="https://www.linkedin.com/in/p-j-rasmussen-57123b1ab" target="_blank">
          <img src={linkedIn} alt="LinkedIn" className="footer-icons h-8 w-8" />
        </a>
        <a href="https://instagram.com/believe.in.peebs?igshid=d2QyeHZscGdpaGJk" target="_blank">
          <img src={instaGram} alt="Instagram" className="footer-icons h-8 w-8" />
        </a>
      </section>
        </nav>
      )}
      {isSmallScreen && isMenuOpen && (
        <nav className="mt-2 space-y-2">
          <Link to="/" className="font-bold hover:text-orange-800 block">
            About Me
          </Link>
          <Link to="/portfolio" className="font-bold hover:text-orange-800 block">
            Web Dev Portfolio
          </Link>
          <Link to="/portfolioo" className="font-bold hover:text-orange-800 block">
            Writing Portfolio
          </Link>
          <Link to="/contact" className="font-bold hover:text-orange-800 block">
          Contact Me
        </Link>
          <section className="flex justify-center items-center space-x-4">
        {/* <Link to="/contact" className="font-bold hover:text-orange-800 block">
          <img src={contactMe} alt="contactForm" className="footer-icons h-8 w-8" />
        </Link> */}
        <a href="https://github.com/whats-a-pj" target="_blank">
          <img src={gitHub} alt="Github" className="footer-icons h-8 w-8" />
        </a>
        <a href="https://www.linkedin.com/in/p-j-rasmussen-57123b1ab" target="_blank">
          <img src={linkedIn} alt="LinkedIn" className="footer-icons h-8 w-8" />
        </a>
        <a href="https://instagram.com/believe.in.peebs?igshid=d2QyeHZscGdpaGJk" target="_blank">
          <img src={instaGram} alt="Instagram" className="footer-icons h-8 w-8" />
        </a>
      </section>
        </nav>
      )}
    </div>
  );
}
