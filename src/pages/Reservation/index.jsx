import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import HomeColumnhotfood from "components/HomeColumnhotfood";

const geustsCounterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ReservationPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <HomeColumnhotfood
            className="flex flex-col items-center justify-start w-full"
            grouponetext="Login"
          />
          <div className="h-[231px] md:px-5 relative w-full">
            <Img
              className="h-[231px] m-auto object-cover w-full"
              src="images/img_rectangle2_3.png"
              alt="rectangleTwo"
            />
            <div className="absolute bg-black-900_84 flex flex-col gap-1.5 h-max inset-[0] items-center justify-start m-auto md:px-10 px-11 sm:px-5 py-[23px] w-auto">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700 w-auto"
                size="txtRobotoRomanLight56WhiteA700"
              >
                Reservation
              </Text>
              <Text
                className="text-[15px] text-white-A700 w-auto"
                size="txtSchoolbellRegular15WhiteA700"
              >
                Place your subheader here
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1112px] mt-[116px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[43%] md:w-full">
              <Text
                className="text-black-900 text-sm"
                size="txtRobotoRomanLight14"
              >
                Party size
              </Text>
              <div className="md:h-[537px] h-[538px] mt-[9px] relative w-full">
                <div className="absolute md:h-[528px] h-[530px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bottom-1/4 flex flex-col inset-x-[0] items-center justify-start mx-auto w-[99%]">
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <List
                        className="flex flex-col gap-3 items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-between my-0 w-full">
                          <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                            8 AM
                          </Button>
                          <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                            8 AM
                          </Button>
                          <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                            8 AM
                          </Button>
                        </div>
                        <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-between my-0 w-full">
                          <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                            1 PM
                          </Button>
                          <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                            1 PM
                          </Button>
                          <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                            1 PM
                          </Button>
                        </div>
                      </List>
                      <div className="flex flex-row gap-5 items-center justify-start w-[66%] md:w-full">
                        <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                          6 PM
                        </Button>
                        <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                          6 PM
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button className="absolute border border-black-900 border-solid bottom-1/4 cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] right-[0] text-black-900 text-center text-xl ml-[50px]">
                    6 PM
                  </Button>
                  <div className="absolute flex flex-col h-full inset-y-[0] justify-start left-[0] my-auto w-[42%]">
                    <SelectBox
                      className="border border-black-900 border-solid font-light leading-[normal] pb-2.5 pt-[13px] px-3.5 text-black-900 text-left text-xl w-full"
                      placeholderClassName="text-black-900"
                      indicator={
                        <Img
                          className="h-5 mr-[0] w-5"
                          src="images/img_arrowdown_gray_600.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="geustsCounter"
                      options={geustsCounterOptionsList}
                      isSearchable={false}
                      placeholder="2 geusts"
                    />
                    <Text
                      className="md:ml-[0] ml-[58px] mt-[84px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                      size="txtRobotoRomanLight24"
                    >
                      SUN
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[60px] text-base text-black-900 text-center"
                      size="txtRobotoRomanLight16Black900"
                    >
                      12/27
                    </Text>
                    <Text
                      className="mt-[275px] text-black-900 text-sm"
                      size="txtRobotoRomanLight14"
                    >
                      Any special request?{" "}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[13px] mt-[10px] text-gray-700_02 text-xl"
                      size="txtRobotoRomanLight20Gray70002"
                    >
                      Type
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-12 left-[0]"
                  src="images/img_group73.svg"
                  alt="groupSeventyThree"
                />
                <div className="absolute flex flex-col items-center justify-start right-[10%] top-1/4 w-[45%]">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                      size="txtRobotoRomanLight24"
                    >
                      MON
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                      size="txtRobotoRomanLight24"
                    >
                      TUE
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                    <Text
                      className="text-base text-black-900 text-center"
                      size="txtRobotoRomanLight16Black900"
                    >
                      12/28
                    </Text>
                    <Text
                      className="text-base text-black-900 text-center"
                      size="txtRobotoRomanLight16Black900"
                    >
                      12/29
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-blue-A200 border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[194px] mt-[34px] py-3 text-center text-white-A700 text-xl">
                Reservation
              </Button>
            </div>
            <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start md:mt-0 mt-[159px] w-[57%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[85%] md:w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtRobotoRomanLight24"
                  >
                    WED
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtRobotoRomanLight24"
                  >
                    THU
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtRobotoRomanLight24"
                  >
                    FRI
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtRobotoRomanLight24"
                  >
                    SAT
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanLight16Black900"
                  >
                    12/30
                  </Text>
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanLight16Black900"
                  >
                    12/31
                  </Text>
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanLight16Black900"
                  >
                    01/01
                  </Text>
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanLight16Black900"
                  >
                    02/01
                  </Text>
                </div>
              </div>
              <List
                className="flex flex-col gap-3 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-between w-full">
                  <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                    8 AM
                  </Button>
                  <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                    8 AM
                  </Button>
                  <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                    8 AM
                  </Button>
                  <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                    8 AM
                  </Button>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-between w-full">
                  <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                    1 PM
                  </Button>
                  <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                    1 PM
                  </Button>
                  <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                    1 PM
                  </Button>
                  <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                    1 PM
                  </Button>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-between w-full">
                  <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                    6 PM
                  </Button>
                  <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                    6 PM
                  </Button>
                  <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                    6 PM
                  </Button>
                  <Button className="border border-black-900 border-solid cursor-pointer font-light leading-[normal] min-w-[141px] py-[18px] text-black-900 text-center text-xl">
                    6 PM
                  </Button>
                </div>
              </List>
            </div>
          </div>
          <Text
            className="mt-[78px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
            size="txtRobotoRomanLight48"
          >
            Contact
          </Text>
          <Text
            className="mt-[43px] text-black-900 text-center text-xl"
            size="txtRobotoRomanLight20"
          >
            500 Terry Francois Street, 6th Floor. San Francisco, CA 94158
          </Text>
          <Text
            className="mt-[58px] text-base text-black-900 text-center"
            size="txtRobotoRomanLight16Black900"
          >
            info@gmail.com
          </Text>
          <Text
            className="mt-[17px] text-base text-black-900 text-center"
            size="txtRobotoRomanLight16Black900"
          >
            778-3037-479055
          </Text>
          <Footer className="bg-white-A700 flex items-center justify-center mt-[161px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ReservationPage;
