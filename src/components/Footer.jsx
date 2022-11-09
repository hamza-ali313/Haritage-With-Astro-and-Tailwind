import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className=" bg-[#101010] text-[#efefef] text-[14px] pt-[68px] pb-[10px] ">
        <div className="container  max-w-[1140px] xs:max-w-[315px] sm:max-w-[590px] lg:max-w-[976px] md:max-w-[700px]  mx-auto">
          <div className="grid grid-cols-3 xs:grid-cols-1 gap-4">
            <div className="text-left">
              <p className="text-[24px] border-b-[3px] border-b-green inline-block pb-[7px]">
                Location
              </p>
              <p>
                P.O. Box 996, Palisade, CO 81526 3210 C 1/2 Road, Palisade, CO
                81526
              </p>
            </div>
            <div className="">
              <div className=" lg:text-center">
                <div className="  lg:text-center">
                  <img src="images/footer-logo.png" className="inline-block" />
                </div>
                <div className="">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium lorem ipsum dolor sit amet..
                  </p>
                </div>
                <div className=" pt-[40px]">
                  <ul className="flex  items-center lg:justify-center xs:justify-left">
                    <li>
                      <a
                        href="/"
                        className="facebook bg-[#343434] mx-[7px] text-[#fff] py-[10px] px-[18px] rounded-[50%] hover:bg-green transition-all hover:text-[#000]"
                      >
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="twitter bg-[#343434] mx-[7px] text-[#fff] py-[10px] px-[15px] rounded-[50%] hover:bg-green transition-all hover:text-[#000]"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="google bg-[#343434] mx-[7px] text-[#fff] py-[10px] px-[12px] rounded-[50%] hover:bg-green transition-all hover:text-[#000]"
                      >
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="linkedIn bg-[#343434] mx-[7px] text-[#fff] py-[10px] px-[15px] rounded-[50%] hover:bg-green transition-all hover:text-[#000]"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" xl:float-right lg:float-right xs:float-left">
                <div className="">
                  <p className="text-[24px] border-b-[3px] border-b-green inline-block pb-[7px]">
                    Hours
                  </p>
                </div>
                <div className="diff-links">
                  <ul>
                    <li>
                      <a
                        href="/"
                        className="flex items-baseline hover:text-green hover:no-underline "
                      >
                        <div>
                          <i className="fa fa-phone text-green"></i>
                        </div>
                        <div className="ml-[8px]">
                          <p className="">970-242-4700</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-baseline hover:text-green hover:no-underline "
                      >
                        <div>
                          <i className="fa fa-phone text-green"></i>
                        </div>
                        <div className="ml-[8px]">
                          <p className="">970-230-6756</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-baseline hover:text-green hover:no-underline "
                      >
                        <div>
                          <i className="fa fa-envelope text-green"></i>
                        </div>
                        <div className="ml-[8px]">
                          <p>HeritageMasonryLLC.com</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-[73px] border-t-[1px] border-[#282828] pt-[14px]">
            <p>
              © Copyright 2022 <span>HERITAGE MASONRY </span>All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
