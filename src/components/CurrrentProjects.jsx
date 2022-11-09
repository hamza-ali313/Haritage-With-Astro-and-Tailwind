import React from "react";


const CurrrentProjects = () => {
 
  return (
    <div id="our-projects">
    <div className="CurrrentProjects-sec bg-[#f5f5f5] py-[100px]">
      <div className="container sm:max-w-[590px] md:max-w-[700px] mx-auto">
        <div className="heading-sec text-center">
          <div className="heading ">
            <h3 className="font-PoppinsMedium text-black text-5xl xs:text-[32px]">
              Current<span className="text-green font-PoppinsBold"> Projects</span>{" "}
            </h3>
          </div>
          <div className="text inline-block w-[50%] xs:w-[100%] sm:w-[100%] xs:text-[13px]">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration some form, by injected..
            </p>
          </div>
        </div>

      </div>
      <div className="slider-sec yrux-slider mt-[40px]">
          <div>
            <img src="images/slider1.png"  />
            <div class="btm-txt hidden">
                <h1 className="font-PoppinsBold text-[25px] xs:text-[18px]">The Community School</h1>
                <p>Brick, Block Air Barrier</p>
            </div>
          </div>
          <div>
            <img src="images/slider2.png" />
            <div class="btm-txt hidden">
                <h4 className="font-PoppinsBold text-[25px] xs:text-[18px]">The Community Hall</h4>
                <p>Brick, Block Air Barrier</p>
            </div>
          </div>
          <div>
            <img src="images/slider3.png" />
            <div class="btm-txt hidden">
                <h4 className="font-PoppinsBold text-[25px] xs:text-[18px]">The Comunity park</h4>
                <p>Brick, Block Air Barrier</p>
            </div>
          </div>
          <div>
            <img src="images/slider4.png" />
            <div class="btm-txt hidden">
                <h4 className="font-PoppinsBold text-[25px] xs:text-[18px]">The Construction Company</h4>
                <p>Brick, Block Air Barrier</p>
            </div>
          </div>
          <div>
            <img src="images/slider1.png" />
            <div class="btm-txt hidden">
                <h4 className="font-PoppinsBold text-[25px] xs:text-[18px]">The University Building</h4>
                <p>Brick, Block Air Barrier</p>
            </div>
          </div>
          <div>
            <img src="images/slider3.png" />
            <div class="btm-txt hidden">
                <h4 className="font-PoppinsBold text-[25px] xs:text-[18px]">The College Building</h4>
                <p>Brick, Block Air Barrier</p>
            </div>
          </div>
          <div>
            <img src="images/slider2.png" />
            <div class="btm-txt hidden">
                <h4 className="font-PoppinsBold text-[25px] xs:text-[18px]">The Community Hospital</h4>
                <p>Brick, Block Air Barrier</p>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default CurrrentProjects;
