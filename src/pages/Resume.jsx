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
  <div className="p-8">
        <div className="bg-gradient-to-tr text-white from-orange-400 via-pink-400 to-purple-400 shadow-md rounded px-8 pt-6 pb-4 mb-4">
          <h1 className="text-2xl font-bold">Kaelyn Patsy-Jean Rasmussen</h1>
          <p className="text-xl">MERN Stack Developer || Ogden, UT</p>
          <p className="text-sm">Email: R4smussen.pj@gmail.com</p>
          <p className="text-sm">Phone: 208-401-4194</p>
          
        </div>
        <div className="mb-6 font-light text-base">
          <h2 className="text-xl font-bold underline">Education</h2>
          <div className="m-4">
          <p className="font-bold">Full-Stack Bootcamp Certification, University of Utah, 2023</p>
          <p>• Skills: MERN Stack, JavaScript, Python, GraphQL, Apollo, MySQL, JWT, AWS, Git</p>
          <p className="font-bold">High School Diploma, Two Rivers High School, 2018</p>
          <p>• Valedictorian, High Honors</p>
          </div>
        </div>
{/* {        <div className="mb-6">
          <h2 className="text-lg font-bold">Technical Skills</h2>
          <p className="font-bold"></p>
          <p></p>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-bold">Soft Skills</h2>
          <p className="font-bold"></p>
          <p></p>
        </div>} */}
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
    );
  }