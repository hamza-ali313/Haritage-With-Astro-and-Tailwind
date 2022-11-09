import React from "react";

const OurLocation = () => {
  return (
    <div className="OurLocation-sec py-[90px]">
      <div className="container max-w-[1140px] xs:max-w-[315px] sm:max-w-[590px] lg:max-w-[976px] md:max-w-[700px] mx-auto">
        <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 gap-[40px]">
          <div className="">
            <h3 className="font-PoppinsMedium text-black text-lgk text-5xl xs:text-[32px]">
              Our
              <span className="text-green font-PoppinsBold ">
                {" "}
                Location
              </span>{" "}
            </h3>
            <p>
              There are many variations of passages Lorem Ipsum availabe, but
              the majority have suffered alteration some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle..
            </p>
            <p>
              {" "}
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence..
            </p>

            <div className="direction-btn ml-[0px]">
              <a
                href="/"
                className="bg-green font-PoppinsBold uppercase  inline-block  px-3 py-2  text-sm font-medium hover:text-black hover:no-underline"
              >
                <span>GET DIRECTION</span>
              </a>
            </div>
          </div>
          <div className="googleMap">
            <div className="mapouter w-[100%] h-[400px] relative text-right">
              <div className="gmap_canvas @apply bg-none w-[100%] h-[400px] overflow-hidden">
                <iframe
                  className="gmap_iframe  w-[100%] h-[400px]"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <a href="https://piratebay-proxys.com/">Pirate bay</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
