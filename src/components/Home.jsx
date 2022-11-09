import React from "react";

const Home = () => {
  return (
    <div id='home' className=" bg-hero-bg bg-no-repeat bg-cover bg-center py-[185px] ">
      <div className="container max-w-[1576px] xs:max-w-[315px] sm:max-w-[590px] lg:max-w-[923px]  mx-auto md:w-[60%]">
        <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2   gap-4 xs:gap-0 items-center ">
          <div className="2xl:col-span-2 text-left">
            <div className=" w-[60%] xs:w-full sm:w-[75%]">
              <div className="">
                <p className="text-hero-main-heading xs:tracking-normal xs:text-[37px] sm:text-[47px] xs:leading-[37px] text-white font-PoppinsMedium">
                  Commercial <span className="text-green font-PoppinsBold xs:text-[33px]">And Residential </span>Masonry
                </p>
              </div>
              <div className="text-white">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majorityy suffered alteration form, by
                </p>
              </div>
              {/* <div className="bbb">
                <div className="bbb-img">
                  <img src="/images/BBB.jpg" />
                </div>
                <div className="video-img">
                 <a href="#"><i class="fa fa-play"></i></a> 
                  <img src="/images/video-img.jpg" />
                </div>
              </div> */}
            </div>
          </div>
          <div className="2xl:col-span-1 ">
            <div className="">
              <div className=" bg-white p-[30px] text-center border-t-[7px] border-green xs:py-[16px] xs:px-[12px] ">
                <div className="">
                  <h1 className="font-PoppinsBold text-2xl xs:text-[16px]">Employment Application</h1>
                  <p className="text-sm font-PoppinsLight text-xs pt-[10px] pb-[30px] xs:text-[10px] xs:pb-[0px]">
                    There are many variations of passages of Lorem Ipsum Lorem
                    Ipsum tions of passages of Lorem Ipsum Lorem
                  </p>
                </div>
                <form>
                  <input type="text" placeholder="Name*" className="w-full bg-input-bg rounded outline-none pl-3 py-[10px] mb-[15px] border-[1px] border-[#cecece] xs:py-[2px]"/>
                  <input type="text" placeholder="Phone*"  className="w-full bg-input-bg rounded outline-none pl-3 py-[10px] mb-[15px] border-[1px] border-[#cecece]  xs:py-[2px]" />
                  <input type="text" placeholder="Email*"  className="w-full bg-input-bg rounded outline-none pl-3 py-[10px] mb-[15px] border-[1px] border -[#cecece]  xs:py-[2px]"/>
                  <textarea
                    name="comment"
                    form="usrform"
                    placeholder="your message*"
                    className="rounded w-full h-[134px] outline-none bg-input-bg pl-3 py-[10px] mb-[15px]  border-[1px] border -[#cecece] resize-none "
                  ></textarea>
                  <a href="/" className="bg-green block text-black font-PoppinsBold py-[11px] hover:no-underline hover:text-black">SUBMIT</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
