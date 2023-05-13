
import AboutScreen from "./AboutScreen";

import "./style.css"
import { BrowserRouter , Routes, Route, NavLink } from 'react-router-dom';
import WorkScreen from "./WorkScreen";
import React,{useState,useEffect} from "react";
import HOME from "./HomeScreen";
import ContactScreen from   "./ContactScreen";

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };

    if (windowWidth > 767) {
      closeSidebar();
    }

    return () => {
      window.removeEventListener('resize', closeSidebar);
    };
  }, [windowWidth]);

  return (
    <>
      <nav>
      <div className="flex bg-black">
        <div className="flex-1 flex">
          <a href='#' className='mx-10 mt-10'>
            Kürşad Eren MADEN
          </a>
        </div>
        <div className=" mx-10 ">
          <ul className="flex flex-col md:flex-row mt-4">
            {windowWidth <= 767  && (
              <li className="flex-1 justify-end">
                <div className="font-thin text-3xl block md:inline-block md:mr-4">
                  <button onClick={toggleSidebar}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            )}
            {(windowWidth > 767 || isSidebarOpen) && (
              <>
                <li className="flex-1 sm:w-12 md:w-32 lg:w-48">
                <button>
                  <a href='#' className="font-thin text-3xl block md:inline-block md:mr-4">
                   <NavLink to={"/"}> HOME</NavLink>
                  </a>
                  </button>
                </li>
                <li className="flex-1 sm:w-12 md:w-32 lg:w-48">
                <button>
                  <a  className="font-thin text-3xl block md:inline-block md:mr-4">
                    <NavLink to={"/work"}> WORK </NavLink>
                  </a>
                  </button>
                </li>
                <li className="flex-1 sm:w-12 md:w-32 lg:w-48">
                  <button>
                  <a href='#' className="font-thin text-3xl block md:inline-block md:mr-4">
                  <NavLink to={"/blog"}>BLOG</NavLink>
                  </a>
                  </button>
                </li>
                <li className="flex-1 sm:w-12 md:w-32 lg:w-48">
                  <button >
                  <a href='#' className="font-thin text-3xl block md:inline-block md:mr-4">
                    <NavLink to={"/contact"}>CONTACT US</NavLink>
                  </a>
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
        
          


      </div>
      </nav>
      
      <Routes>
         <Route path="/" element={<HOME />} />
         <Route path="/work" element={<WorkScreen />} />
         <Route path="/about" element={<AboutScreen />} />
         <Route path="/contact" element={<ContactScreen />} />
        
      </Routes>
 
   </>
      
   
  );
}





export default App;
