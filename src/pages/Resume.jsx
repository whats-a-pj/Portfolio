// className="resume-container"
import {useState, useEffect} from 'react';

export default function Resume() {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const checkScreenWidth = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  window.addEventListener("resize", checkScreenWidth);

  useEffect(() => {
    checkScreenWidth();
  }, []);

    return (
        <div className={`flex flex-col h-screen overflow-y-auto bg-purple-100 ${!isSmallScreen ? "ml-[25%]" : "mt-10"} items-center`}>
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
            <h1 className="mt-10">Resume</h1>
            <section>
                <p>current occupation fedex ground driver</p>
                <p>amazon driver</p>
                <p>wayfair customer service rep</p>
                <p>hvac office admin</p>
            </section>
    </div>
    );
  }