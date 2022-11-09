import React, { useState } from "react";
const image1 = "images/gallery8.png";
const image2 = "images/gallery6.png";
const image3 = "images/gallery7.png";
const image4 = "images/gallery9.png";
const image5 = "images/gallery1.png";
const image6 = "images/gallery3.png";
const image7 = "images/gallery4.png";
const image8 = "images/gallery5.png";
const image9 = "images/gallery2.png";

const Ourgallery = () => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };
  return (
    <div id="our-gr">
      {lightboxDisplay ? (
        <div
          className="flex items-center justify-between z-[1] fixed top-0 left-0 w-[100%] h-[100%] bg-[#060606d1]"
          onClick={hideLightBox}
        >
          <button
            className="lightboxbtn text-[#fff] text-[45px]  border-hidden"
            onClick={showPrev}
          >
            ⭠
          </button>
          <img className="object-[auto] w-[auto] xs:w-[70%]" src={imageToShow}></img>
          <button
            className="lightboxbtn text-[#fff] text-[45px] border-hidden "
            onClick={showNext}
          >
            ⭢
          </button>
        </div>
      ) : (
        ""
      )}
      <div
        id="our-gr"
        className=" bg-[#121111] text-[#fff] pb-[100px] pt-[60px]"
      >
        <div className="container max-w-[1140px] xs:max-w-[360px] sm:max-w-[590px] lg:max-w-[976px] md:max-w-[700px] mx-auto">
          <div className=" text-center">
            <h3 className="font-PoppinsMedium  text-lgk text-5xl xs:text-[50px]">
              Our<span className=" font-PoppinsBold "> Gallery</span>{" "}
            </h3>
            <p className="inline-block w-[50%] xs:w-full">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration some form, by injected..
            </p>
          </div>
          <div className=" pt-[30px]">
            <div className="grid grid-cols-12 gap-[1px]">
              <div className="col-span-5  xs:col-span-12 pl-[2px] pr-[2px] ">
                  <div className="grid grid-cols-12 gap-[1px]">
                    <div className="col-span-6 left-side-upper px-[2px]">
                        <div className="">
                          <img
                            src={image1}
                            className="w-[100%] h-[317px]"
                            onClick={() => showImage(image1)}
                          />
                        </div>
                    </div>
                    <div className="col-span-6  pl-[2px] ">
                      <div>
                        <div className="">
                          <img
                            src={image2}
                            className="w-[100%] h-[156px] mb-[4px]"
                            onClick={() => showImage(image2)}
                          />
                        </div>
                        <div className="">
                          <img
                            src={image3}
                            className="w-[100%] h-[157px]"
                            onClick={() => showImage(image3)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-[1px]">
                    <div className="col-span-1 left-bottom-col w-[100%]  mt-[3px]  pl-[2px]">
                      <div className="">
                        <div className="">
                          <img
                            src={image4}
                            className="h-[227px]"
                            onClick={() => showImage(image4)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-span-4 xs:col-span-12 px-[2px]">
                <div className="">
                  <div className="">
                    <img
                      src={image5}
                      className="w-[100%]  h-[208px] mb-[3px]"
                      onClick={() => showImage(image5)}
                    />
                  </div>
                  <div className="">
                    <img
                      src={image9}
                      className="w-[100%]  h-[337px] "
                      onClick={() => showImage(image9)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-3 xs:col-span-12 xs:flex xs:gap-[7px] xs:mt-[3px] px-[2px]">
                <div className="">
                  <img
                    src={image6}
                    className="w-[100%]  h-[181px] mb-[3px]"
                    onClick={() => showImage(image6)}
                  />
                </div>
                <div className="">
                  <img
                    src={image7}
                    className="w-[100%]  h-[181px] mb-[3px]"
                    onClick={() => showImage(image7)}
                  />
                </div>
                <div className="">
                  <img
                    src={image8}
                    className="w-[100%]  h-[181px] mb-[3px]"
                    onClick={() => showImage(image8)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourgallery;
