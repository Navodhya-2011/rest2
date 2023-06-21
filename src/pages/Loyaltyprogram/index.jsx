import React from "react";

import { Button, Img, Input, Line, SeekBar, Text } from "components";
import Footer from "components/Footer";
import HomeColumnhotfood from "components/HomeColumnhotfood";

const LoyaltyprogramPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <HomeColumnhotfood
          className="flex flex-col items-center justify-start w-full"
          grouponetext="My Account"
        />
        <Img
          className="h-[231px] sm:h-auto object-cover w-full"
          src="images/img_frame105_231x1440.png"
          alt="frame105"
        />
        <div className="border border-black-900_23 border-solid flex flex-col items-center justify-start max-w-[1070px] mt-[31px] mx-auto p-[22px] md:px-5 rounded-[20px] shadow-bs1 w-full">
          <div className="flex flex-col gap-[37px] items-center justify-start mb-14 mt-[29px] w-full">
            <div className="bg-gray-100_02 flex flex-col items-center justify-start p-3 rounded-[15px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mb-4 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-0.5 w-[17%] md:w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtRobotoRomanMedium14"
                  >
                    Get Membership
                  </Text>
                  <div className="flex flex-row gap-[18px] items-center justify-start mt-6 w-full">
                    <Img
                      className="h-[43px] md:h-auto object-cover w-[43px]"
                      src="images/img_rectangle99.png"
                      alt="rectangleNinetyNine"
                    />
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanLight16Black900"
                    >
                      100000 Points
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[18px] items-center justify-start mt-5 w-[95%] md:w-full">
                    <Img
                      className="h-[43px] md:h-auto object-cover w-[43px]"
                      src="images/img_rectangle100.png"
                      alt="rectangle100"
                    />
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanLight16Black900"
                    >
                      50000 Points
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[18px] items-center justify-start mt-5 w-[95%] md:w-full">
                    <Img
                      className="h-[43px] md:h-auto object-cover w-[43px]"
                      src="images/img_rectangle101.png"
                      alt="rectangle101"
                    />
                    <Text
                      className="text-base text-black-900"
                      size="txtRobotoRomanLight16Black900"
                    >
                      10000 Points
                    </Text>
                  </div>
                </div>
                <div className="h-[190px] md:h-[195px] mb-[5px] md:ml-[0] ml-[125px] md:mt-0 mt-[17px] relative rounded-[19px] w-[46%] md:w-full">
                  <div className="absolute h-[190px] inset-y-[0] my-auto right-[0] w-[89%] sm:w-full">
                    <Img
                      className="absolute h-[190px] inset-y-[0] my-auto object-cover right-[0] w-[52%]"
                      src="images/img_rectangle101_190x201.png"
                      alt="rectangle101_One"
                    />
                    <Img
                      className="absolute h-[190px] inset-y-[0] left-[0] my-auto object-cover w-[81%]"
                      src="images/img_rectangle100_190x317.png"
                      alt="rectangle100_One"
                    />
                  </div>
                  <Img
                    className="absolute h-[190px] inset-y-[0] left-[0] my-auto object-cover w-[191px]"
                    src="images/img_rectangle99_190x191.png"
                    alt="rectangleNinetyNine_One"
                  />
                  <div className="absolute bg-white-A700_bc flex flex-col h-full inset-[0] items-start justify-center m-auto p-[45px] md:px-10 sm:px-5 rounded-[19px] w-full">
                    <div className="bg-black-900_72 flex flex-col items-center justify-start md:ml-[0] ml-[27px] p-[13px] rounded-[12px] w-[79%] md:w-full">
                      <div className="flex flex-row items-end justify-between my-0.5 w-[98%] md:w-full">
                        <div className="md:h-[57px] h-[68px] relative w-[34%]">
                          <Text
                            className="absolute left-[6%] text-base text-white-A700 top-[0]"
                            size="txtRobotoRomanMedium16"
                          >
                            Points
                          </Text>
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-max"
                            size="txtRobotoRomanBold48"
                          >
                            100
                          </Text>
                        </div>
                        <Text
                          className="mb-0.5 mt-[9px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                          size="txtRobotoRomanBold48"
                        >
                          =
                        </Text>
                        <Text
                          className="mb-[3px] mt-2 text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                          size="txtRobotoRomanBold48"
                        >
                          $ 1
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 items-center justify-start md:ml-[0] ml-[83px] md:mt-0 mt-[26px] w-[17%] md:w-full">
                  <Img
                    className="h-[161px] md:h-auto object-cover w-[161px]"
                    src="images/img_rectangle102.png"
                    alt="rectangle102"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtRobotoRomanSemiBold16"
                  >
                    H 637 646
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
                <Img
                  className="h-5 md:mt-0 mt-[7px] w-5"
                  src="images/img_notov1bookmark.svg"
                  alt="notov1bookmark_One"
                />
                <Text
                  className="md:ml-[0] ml-[13px] md:mt-0 mt-2 text-base text-black-900"
                  size="txtRobotoRomanLight16Black900"
                >
                  Earn 10000 points to become a bronze member
                </Text>
                <Img
                  className="h-[27px] md:h-auto md:ml-[0] ml-[583px] object-cover w-[27px]"
                  src="images/img_rectangle101.png"
                  alt="rectangle111"
                />
              </div>
              <div className="flex md:flex-col flex-row gap-3.5 items-end justify-between w-[98%] md:w-full">
                <div className="h-[11px] md:mt-0 mt-1.5 relative w-[90%] md:w-full">
                  <div className="h-[5px] m-auto w-full"></div>
                  <SeekBar
                    inputValue={[10.99]}
                    trackColors={["", "#d9d9d9"]}
                    thumbClassName="h-[11px] bg-amber-500 w-[11px] flex absolute justify-center items-center rounded-[50%] outline-none"
                    className="absolute flex h-[11px] inset-[0] justify-center m-auto w-full"
                    trackClassName="h-[3px] flex absolute w-full"
                  />{" "}
                </div>
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoRomanLight16Black900"
                >
                  100 / 10000
                </Text>
              </div>
              <Text
                className="mt-[73px] text-black-900 text-sm"
                size="txtRobotoRomanMedium14"
              >
                Membership Benefit
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[34px] w-full">
                <Button className="bg-blue-50 flex h-[45px] items-center justify-center mb-[3px] md:mt-0 mt-2 p-[7px] rounded-[12px] w-[45px]">
                  <Img
                    className="h-[30px]"
                    src="images/img_materialsymbolsredeem.svg"
                    alt="materialsymbols"
                  />
                </Button>
                <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[27px] md:mt-0 mt-[3px]">
                  <Text
                    className="text-black-900 text-justify text-xl"
                    size="txtRobotoRomanMedium20Black900"
                  >
                    Redeem Points
                  </Text>
                  <Text
                    className="text-base text-black-900 text-justify tracking-[-0.72px]"
                    size="txtRobotoRomanLight16Black900"
                  >
                    Use your points for more discounts
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-row gap-[27px] items-start justify-center md:ml-[0] ml-[50px] md:mt-0 mt-1 w-[27%] md:w-full">
                  <Button className="bg-blue-50 flex h-[45px] items-center justify-center mb-[5px] mt-0.5 p-[7px] rounded-[12px] w-[45px]">
                    <Img
                      className="h-[30px]"
                      src="images/img_arrowdown_blue_a200.svg"
                      alt="arrowdown"
                    />
                  </Button>
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="text-black-900 text-justify text-xl"
                      size="txtRobotoRomanMedium20Black900"
                    >
                      Earn More Points
                    </Text>
                    <Text
                      className="text-base text-black-900 text-justify"
                      size="txtRobotoRomanLight16Black900"
                    >
                      Scan your friend’s QR code
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row gap-[18px] items-start justify-between md:ml-[0] ml-[50px] w-[35%] md:w-full">
                  <Button className="bg-blue-50 flex h-[45px] items-center justify-center mb-[5px] p-[7px] rounded-[12px] w-[45px]">
                    <Img
                      className="h-[30px]"
                      src="images/img_group88.svg"
                      alt="groupEightyEight"
                    />
                  </Button>
                  <div className="flex flex-col gap-[7px] items-start justify-start">
                    <Text
                      className="text-black-900 text-justify text-xl"
                      size="txtRobotoRomanMedium20Black900"
                    >
                      Enjoy Exclusive Vouchers
                    </Text>
                    <Text
                      className="text-base text-black-900 text-justify"
                      size="txtRobotoRomanLight16Black900"
                    >
                      Get access to special discount vouchers
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-white-A700 flex items-center justify-center mt-[106px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default LoyaltyprogramPage;
