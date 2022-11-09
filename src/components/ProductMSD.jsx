import React, { useState } from "react";

const ProductMSDTABS = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";
     
  return (
    <div className="relative py-[94px] after:content-[''] after:absolute after:w-[100%] after:h-[300px] after:bg-afterMSD after:bg-no-repeat after:bg-cover after:-z-[1] after:bottom-0" id="productMSD-sec">
      <div className="container max-w-[1140px] xs:max-w-[315px] sm:max-w-[590px] lg:max-w-[976px] md:max-w-[700px] mx-auto text-center">
        <div className=" inline-block">
          <div className="text-center">
              <h3 className="font-PoppinsMedium  text-black text-5xl xs:text-[32px]">
                Product
                <span className="text-green font-PoppinsBold"> MSDS</span>{" "}
              </h3>
            <div className="text inline-block w-[50%] xs:w-full">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration some form, by
                injected.. humour,
              </p>
            </div>
          </div>
          <ul className="tab-list flex items-center justify-center xs:grid xs:grid-cols-3 xs:gap-[10px] sm:grid sm:grid-cols-3 sm:gap-[10px] py-[30px]">
            <li
              className={`tabs w-[50%] xs:w-[90px] sm:w-[153px]      flex justify-center`}
              onClick={() => toggleTab(1)}
            >
              <a
                className={` hover:text-black border-[#c7c7c7]  border-[1px] py-[7px] px-[39px] md:px-[9px] xs:py-[2px] xs:px-[2px] sm:py-[12px] sm:px-[19px] lg:px-[12px] lg:w-[95%] xs:text-[12px]  ${getActiveClass(
                  1,
                  "active-tabs text-nav-link font-active border-hidden bg-[#48ff00] xs:w-[100px] lg:w-[100%]"
                )}`}
              >
                <span className=" ">CATEGORIES 1</span>
              </a>
            </li>
            <li
              className={`tabs w-[50%] xs:w-[90px] sm:w-[153px]     flex justify-center`}
              onClick={() => toggleTab(2)}
            >
              <a
                className={`hover:text-black border-[#c7c7c7]  border-[1px] py-[7px] px-[39px] md:px-[9px] xs:py-[2px] xs:px-[2px] sm:py-[12px] sm:px-[19px] lg:px-[12px] lg:w-[95%] xs:text-[12px]  ${getActiveClass(
                  2,
                  "active-tabs text-nav-link font-active border-hidden bg-[#48ff00] xs:w-[100px] lg:w-[100%]"
                )}`}
              >
                <span className="">CATEGORIES 2</span>
              </a>
            </li>
            <li
              className={`tabs w-[50%] xs:w-[90px] sm:w-[153px]     flex justify-center`}
              onClick={() => toggleTab(3)}
            >
              <a
                className={` hover:text-black border-[#c7c7c7]  border-[1px] py-[7px] px-[39px] md:px-[9px] xs:py-[2px] xs:px-[2px] sm:py-[12px] sm:px-[19px] lg:px-[12px] lg:w-[95%] xs:text-[12px]  ${getActiveClass(
                  3,
                  "active-tabs text-nav-link font-active border-hidden bg-[#48ff00] xs:w-[100px] lg:w-[100%]"
                )}`}
              >
                <span className="">CATEGORIES 3</span>
              </a>
            </li>
            <li
              className={`tabs w-[50%] xs:w-[90px] sm:w-[153px]      flex justify-center`}
              onClick={() => toggleTab(4)}
            >
              <a
                className={` hover:text-black border-[#c7c7c7]  border-[1px] py-[7px] px-[39px] md:px-[9px] xs:py-[2px] xs:px-[2px] sm:py-[12px] sm:px-[19px] lg:px-[12px] lg:w-[95%] xs:text-[12px]  ${getActiveClass(
                  4,
                  "active-tabs text-nav-link font-active border-hidden bg-[#48ff00] xs:w-[100px] lg:w-[100%]"
                )}`}
              >
                <span className="">CATEGORIES 4</span>
              </a>
            </li>
            <li
              className={`tabs w-[50%] xs:w-[90px] sm:w-[153px]    flex justify-center`}
              onClick={()  => toggleTab(5)}   
              
            >
              <a
                className={`hover:text-black border-[#c7c7c7]  border-[1px] py-[7px] px-[39px] md:px-[9px] xs:py-[2px] xs:px-[2px] sm:py-[12px] sm:px-[19px] lg:px-[12px] lg:w-[95%] xs:text-[12px]  ${getActiveClass(
                  5,
                  "active-tabs text-nav-link font-active border-hidden bg-[#48ff00] xs:w-[100px] lg:w-[100%]"
                )}`}
              >
                <span className="xs:text-[px]">CATEGORIES 5</span>
              </a>
            </li>
          </ul>
          <div className="content-container">
            <div className={`content bg-transparent hidden p-[10px] tabcontent ${getActiveClass(1, "active-content ")}`}>
              <div className="grid grid-cols-3  xs:grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-4">
                <div className="">
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px] ">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500 text"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium  xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black"
                      >
                        1 Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`content bg-transparent hidden p-[10px] tabcontent ${getActiveClass(2, "active-content  ")}`}>
              <div className="grid grid-cols-3  xs:grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-4">
                <div className="">
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px] ">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500 text"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium  xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black  "
                      >
                        2 Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`content bg-transparent hidden p-[10px] tabcontent ${getActiveClass(3, "active-content  ")}`}>
              <div className="grid grid-cols-3  xs:grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-4">
                <div className="">
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px] ">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500 text"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium  xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black  "
                      >
                        3 Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`content bg-transparent hidden p-[10px] tabcontent ${getActiveClass(4, "active-content  ")}`}>
              <div className="grid grid-cols-3  xs:grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-4">
                <div className="">
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px] ">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500 text"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium  xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black  "
                      >
                        4 Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`content bg-transparent hidden p-[10px] tabcontent ${getActiveClass(5, "active-content  ")}`}>
              <div className="grid grid-cols-3  xs:grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-4">
                <div className="">
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px] ">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500 text"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium  xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black  "
                      >
                        5 Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                  <div className="pdf-links-sec flex items-center mt-[25px] xs:mt-[15px]">
                    <div className="pdf-icon">
                      <i className="fa fa-file-pdf-o text-3xl leading-10 text-red-500"></i>
                    </div>
                    <div className="pdf-link">
                      <a
                        href="/"
                        className="font-PoppinsMedium xs:text-[12px] md:text-[10px] lg:text-[14px] ml-[15px]  border-b-[1px] hover:no-underline hover:text-black "
                      >
                        Brick <i className="fas fa-angle-right xs:text-[12px] md:text-[10px] lg:text-[14px] font-icon text-[21px] mx-[4px]"></i>{" "}
                        Red_Stone_brick_457.pdf
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMSDTABS;
