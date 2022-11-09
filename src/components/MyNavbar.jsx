import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header id="nav-header" className="fixed bg-transparent w-full text-center">
      <div className="container max-w-[1576px] xs:max-w-[315px] sm:max-w-[590px] md:max-w-[700px] mx-auto lg:w-full md:w-full inline-block">
        <nav className="w-full">
          <div className="w-full mt-[18px]">
            <div className="flex items-center justify-between  ">
              <div className="flex items-center h-16 w-full lg:w-[93%]">
                <div className="w-[full] mt-[15px]">
                  <img
                    id="navbar-brand-img"
                    className="w-[277px] xs:w-[219px] sm:w-full lg:w-full md:w-full"
                    src="images/logo.png"
                    alt="Workflow"
                  />
                </div>
                <div className="haritage-nav xs:hidden sm:hidden block md:hidden ">
                  <div className="ml-10 flex items-baseline space-x-[30px] lg:space-x-0 md:space-x-0 ">
                    <a
                      href="#home"
                      className="hover:bg-green hover:no-underline hover:text-black text-white px-3 lg:px-[0px] py-2 text-[20px] lg:text-[15px]  lg:ml-17px    md:text-[10px]"
                    >
                      Home
                    </a>

                    <a
                      href="#ourstory"
                      className="text-white hover:bg-green hover:no-underline hover:text-black px-3 lg:px-[0px] py-2 text-[20px] lg:text-[15px]  lg:ml-17px  md:text-[10px] "
                    >
                      About Us
                    </a>

                    <a
                      href="#ourservice"
                      className="text-white hover:bg-green hover:no-underline hover:text-black px-3 lg:px-[0px] py-2 text-[20px] lg:text-[15px]  lg:ml-17px  md:text-[10px] "
                    >
                      Services
                    </a>

                    <a
                      href="#productMSD-sec"
                      className="text-white hover:bg-green hover:no-underline hover:text-black px-3 lg:px-[0px] py-2 text-[20px] lg:text-[15px]  lg:ml-17px  md:text-[10px] "
                    >
                      Products
                    </a>

                    <a
                      href="#our-rev"
                      className="text-white hover:bg-green hover:no-underline hover:text-black px-3 lg:px-[0px] py-2 text-[20px] lg:text-[15px]  lg:ml-17px  md:text-[10px] "
                    >
                      Reviews
                    </a>
                    <a
                      href="#our-projects"
                      className="text-white hover:bg-green hover:no-underline hover:text-black px-3 lg:px-[0px] py-2 text-[20px] lg:text-[15px]  lg:ml-17px   md:text-[10px] "
                    >
                      Projects
                    </a>
                    <a
                      href="#our-gr"
                      className="text-white hover:bg-green hover:no-underline hover:text-black px-3 lg:px-[0px] py-2 text-[20px] lg:text-[15px]  lg:ml-17px  md:text-[10px] "
                    >
                      Our Gallery
                    </a>
                    <a
                      href="#new-blog"
                      className="text-white hover:bg-green hover:no-underline hover:text-black px-3 lg:px-[0px] py-2 text-[20px] lg:text-[15px]  lg:ml-17px  md:text-[10px] "
                    >
                      Blogs
                    </a>
                    <div className="contact-us  -skew-x-[17deg]">
                      <a
                        href="#contact"
                        className="bg-green font-PoppinsBold uppercase  inline-block  px-[19px] py-[13px] lg:px-[6px] lg:py-[3px]  text-sm hover:text-black relative lg:left-[30px] text-[12px]"
                      >
                        <span className=" skew-x-[18deg] inline-block lg:text-[9px]">Contact Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 hidden sm:flex xs:flex  md:flex">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div
                className=" md:bg-white xs:bg-white sm:bg-white text-center"
                id="mobile-menu"
              >
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                    onClick={() => setIsOpen(!isOpen)}
                    href="#home"
                    className="hover:bg-green hover:no-underline text-black block px-3 text-[23px] border-b-[1px] text-base font-medium"
                  >
                    Home
                  </a>

                  <a
                    onClick={() => setIsOpen(!isOpen)}
                    href="#ourstory"
                    className="text-black hover:bg-green hover:no-underline hover:text-black block px-3 text-[23px] border-b-[1px] ded-md text-base font-medium"
                  >
                    About Us
                  </a>

                  <a
                    onClick={() => setIsOpen(!isOpen)}
                    href="#ourservice"
                    className="text-black hover:bg-green hover:no-underline hover:text-black block px-3 text-[23px] border-b-[1px] ded-md text-base font-medium"
                  >
                    Services
                  </a>

                  <a
                    onClick={() => setIsOpen(!isOpen)}
                    href="#productMSD-sec"
                    className="text-black hover:bg-green hover:no-underline hover:text-black block px-3 text-[23px] border-b-[1px] ded-md text-base font-medium"
                  >
                    Products
                  </a>

                  <a
                    onClick={() => setIsOpen(!isOpen)}
                    href="#our-rev"
                    className="text-black hover:bg-green hover:no-underline hover:text-black block px-3 text-[23px] border-b-[1px] ded-md text-base font-medium"
                  >
                    Reviews
                  </a>

                  <a
                    onClick={() => setIsOpen(!isOpen)}
                    href="#our-projects"
                    className="text-black hover:bg-green hover:no-underline hover:text-black block px-3 text-[23px] border-b-[1px] ded-md text-base font-medium"
                  >
                    Projects
                  </a>

                  <a
                    onClick={() => setIsOpen(!isOpen)}
                    href="#our-gr"
                    className="text-black hover:bg-green hover:no-underline hover:text-black block px-3text-[23px] border-b-[1px] ded-md text-base font-medium"
                  >
                    Our Gallery
                  </a>

                  <a
                    onClick={() => setIsOpen(!isOpen)}
                    href="#new-blog"
                    className="text-black hover:bg-green hover:no-underline hover:text-black block px-3 text-[23px] border-b-[1px] ded-md text-base font-medium"
                  >
                    Blogs
                  </a>
                  <div className="contact-us">
                    <a
                        onClick={() => setIsOpen(!isOpen)}
                      href="#contact"
                      className="bg-green font-PoppinsBold uppercase  inline-block  px-3 py-2  text-sm hover:text-black  text-[12px]"
                    >
                      <span className="">Contact Us</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    </header>
  );
}

export default MyNavbar;
