import React from "react";

const OurStory = () => {
  return (
    <div id="ourstory " className="">
      <div className="container max-w-[1576px] xs:max-w-[315px] sm:max-w-[590px] lg:max-w-[976px] md:max-w-[700px] mx-auto">
        <div className=" relative -top-2">
          <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="">
              <div className=" -skew-x-[17deg]">
                <a
                  href="#"
                  className="bg-green font-PoppinsBold hover:text-black uppercase block w-full text-center inline-block  px-3 py-2  text-sm font-medium border-white border-[3px]"
                >
                  <span className="skew-x-[18deg] inline-block">
                    Employment application
                  </span>
                </a>
              </div>
            </div>
            <div className="">
              <div className=" -skew-x-[17deg]">
                <a
                  href="#"
                  className="bg-green font-PoppinsBold hover:text-black uppercase block  w-full text-center inline-block  px-3 py-2  text-sm font-medium border-white border-[3px]"
                >
                  <span className="skew-x-[18deg] inline-block">
                    insurance compliance information
                  </span>{" "}
                </a>
              </div>
            </div>
            <div className="">
              <div className=" -skew-x-[17deg]">
                <a
                  href="#"
                  className="bg-green font-PoppinsBold hover:text-black uppercase block w-full text-center inline-block  px-3 py-2  text-sm font-medium border-white border-[3px]"
                >
                  <span className="skew-x-[18deg] inline-block">
                    request a call
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container max-w-[1576px] xs:max-w-[315px] sm:max-w-[590px] lg:max-w-[924px] md:max-w-[700px] mx-auto md:w-[90%] pt-[60px]">
        <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
          <div className="">
            <div className="text-center">
              <img
                src="images/story-img.jpg"
                className="w-[60%] xs:w-full inline-block"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="">
                <h3 className="font-PoppinsMedium text-black text-6xl xs:text-[50px]">
                  Our{" "}
                  <span className="text-green font-PoppinsBold ">Story</span>
                </h3>
              </div>
              <div className="xs:text-[13px]  pt-[18px] text-left">
                <p className="font-PoppinsRegular">
                  {" "}
                  Heritage Masonry is a leader in quality commercial and
                  residential masonry construction. Our experience starts with
                  Vern Brock, Kevin Brock's Grandfather, who started Brock
                  Masonry, Inc. in 1959. Vern was one of the first commercial
                  masonry companies in Vail Colorado. The Famous postcard
                  picture of the clock tower; built by Vern, still signifies
                  Vail.{" "}
                </p>
                <p className="font-PoppinsRegular">
                  The Tradition continues with Kevin Brock a 6th generation
                  mason and his dad Allan Brock. The two of them have completed
                  jobs in Aspen, Vail, Cherry Hills, Telluride, Big Sky, Big
                  Fork, Whitefish, as well as the Roaring Fork and Flathead
                  Valleys.{" "}
                </p>
                <p className="font-PoppinsRegular">
                  Throughout his career, Allan Brock has supervised the
                  stonework for over 50 homes between 12,000 - 42,000 square
                  feet, built commercial building of 480,000 square feet, and
                  has worked on a personally supervised more than 300 homes for
                  the rich and famous.
                </p>
                <p className=" font-PoppinsRegular">
                  {" "}
                  Heritage Masonry has assembled only the best artisans and
                  craftsmen with our #1 goal to please the Owner, Architects,
                  and Contractor.
                </p>{" "}
                <p className="  font-PoppinsRegular">
                  Though we specialized in natural stone brick, block, tile,
                  plaster and stucco, our hallmark is fine parkitecture
                  stonework, distinctive fireplaces, landscape, and retaining
                  walls.{" "}
                </p>
                <p className="  font-PoppinsRegular">
                  Heritage Masonry, LLC has chosen to follow the path of
                  friendly service, quality stonework, and contented owners. We
                  are never satisfied, until our clients are..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
