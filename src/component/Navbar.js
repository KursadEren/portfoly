import { useState, useEffect } from 'react';

function Navbar() {
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
    <nav>
      <div className="flex bg-black">
        <div className="flex-1 flex">
          <a className='mx-10 mt-10'>
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
                  <a className="font-thin text-3xl block md:inline-block md:mr-4">
                    HOME
                  </a>
                  </button>
                </li>
                <li className="flex-1 sm:w-12 md:w-32 lg:w-48">
                <button>
                  <a className="font-thin text-3xl block md:inline-block md:mr-4">
                    WORK
                  </a>
                  </button>
                </li>
                <li className="flex-1 sm:w-12 md:w-32 lg:w-48">
                  <button>
                  <a className="font-thin text-3xl block md:inline-block md:mr-4">
                    BLOG
                  </a>
                  </button>
                </li>
                <li className="flex-1 sm:w-12 md:w-32 lg:w-48">
                  <button >
                  <a className="font-thin text-3xl block md:inline-block md:mr-4">
                    CONTACT US
                  </a>
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
