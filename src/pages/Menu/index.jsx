import React from "react";
import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import HomeColumnhotfood from "components/HomeColumnhotfood";

const MenuPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <HomeColumnhotfood
          className="flex flex-col items-center justify-start w-full"
          grouponetext="Login"
        />
        <div className="h-[231px] md:px-5 relative w-full">
          {/* Image and text */}
          <Img
            className="h-[231px] m-auto object-cover w-full"
            src="images/img_rectangle2_231x1440.png"
            alt="rectangleTwo"
          />
          <div className="absolute bg-black-900_84 flex flex-col gap-1.5 h-max inset-[0] items-center justify-end m-auto md:px-10 sm:px-5 px-[108px] py-[23px] w-auto">
            <Text
              className="md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700 w-auto"
              size="txtRobotoRomanLight56WhiteA700"
            >
              Menu
            </Text>
            <Text
              className="text-[15px] text-white-A700 w-auto"
              size="txtSchoolbellRegular15WhiteA700"
            >
              Place your subheader here
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1164px] mt-20 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-7 items-center justify-start w-full">
            <Text
              className="text-base text-black-900 text-center"
              size="txtRobotoRomanLight16Black900"
            >
              Categories
            </Text>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <div className="md:gap-10 gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                {/* Image and text */}
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle19.png"
                    alt="rectangleNineteen"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle20.png"
                    alt="rectangleTwenty"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle21.png"
                    alt="rectangleTwentyOne"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle22.png"
                    alt="rectangleTwentyTwo"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
              </div>
            </div>
          </div>
        

        <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <div className="md:gap-10 gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                {/* Image and text */}
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle19.png"
                    alt="rectangleNineteen"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle20.png"
                    alt="rectangleTwenty"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle21.png"
                    alt="rectangleTwentyOne"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle22.png"
                    alt="rectangleTwentyTwo"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
              </div>
            </div>
            </div>
        
        
            <div className="flex flex-col items-center justify-start max-w-[1164px] mt-20 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-7 items-center justify-start w-full">
            <Text
              className="text-base text-black-900 text-center"
              size="txtRobotoRomanLight16Black900"
            >
              Categories
            </Text>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <div className="md:gap-10 gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                {/* Image and text */}
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle19.png"
                    alt="rectangleNineteen"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle20.png"
                    alt="rectangleTwenty"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle21.png"
                    alt="rectangleTwentyOne"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle22.png"
                    alt="rectangleTwentyTwo"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
              </div>
            </div>
          </div>
        

        <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <div className="md:gap-10 gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                {/* Image and text */}
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle19.png"
                    alt="rectangleNineteen"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle20.png"
                    alt="rectangleTwenty"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle21.png"
                    alt="rectangleTwentyOne"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Img
                    className="flex-1 h-[394px] md:h-auto object-cover w-full"
                    src="images/img_rectangle22.png"
                    alt="rectangleTwentyTwo"
                  />
                  <Text
                    className="text-base text-black-900 text-center w-full"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Name Here
                  </Text>
                </div>
              </div>
            </div>
            </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;
