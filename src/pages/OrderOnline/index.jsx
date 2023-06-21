import React from "react";

import { Button, Img, Input, Line, Switch, Text } from "components";
import HomeColumnhotfood from "components/HomeColumnhotfood";
import OrderOnlineColumnrectangletwentyfour from "components/OrderOnlineColumnrectangletwentyfour";
import OrderOnlineFooter3 from "components/OrderOnlineFooter3";

const OrderOnlinePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto pb-3.5 w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <HomeColumnhotfood
            className="flex flex-col items-center justify-start w-full"
            grouponetext="Login"
          />
          <div className="h-[231px] md:px-5 relative w-full">
            <Img
              className="h-[231px] m-auto object-cover w-full"
              src="images/img_rectangle2_231x1440.png"
              alt="rectangleTwo"
            />
            <div className="absolute bg-black-900_84 bottom-[11%] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-[21px] sm:px-5">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700"
                size="txtRobotoRomanLight56WhiteA700"
              >
                Order Online
              </Text>
              <Text
                className="mb-[22px] text-[15px] text-white-A700"
                size="txtSchoolbellRegular15WhiteA700"
              >
                Place your subheader here
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[909px] mt-[92px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center justify-center"
            size="txtRobotoRomanLight40"
          >
            Checkout
          </Text>
          <OrderOnlineColumnrectangletwentyfour
            className="bg-white-A700 border border-black-900_42 border-solid flex flex-col items-center justify-start max-w-[928px] mt-[150px] mx-auto p-2 md:px-5 rounded-[12px] w-full"
            closeicon="images/img_icroundclose.svg"
            addons="Add-ons"
            addons1="Select"
            arrowdown="images/img_arrowdown.svg"
            quantity="Quantity"
            two="02"
            arrowleft="images/img_arrowleft.svg"
            arrowright="images/img_arrowright.svg"
          />
          <OrderOnlineColumnrectangletwentyfour
            className="bg-white-A700 border border-black-900_42 border-solid flex flex-col items-center justify-start max-w-[928px] mt-3 mx-auto p-2 md:px-5 rounded-[12px] w-full"
            closeicon="images/img_icroundclose.svg"
            addons="Add-ons"
            addons1="Select"
            arrowdown="images/img_arrowdown.svg"
            quantity="Quantity"
            two="02"
            arrowleft="images/img_arrowleft.svg"
            arrowright="images/img_arrowright.svg"
          />
          <OrderOnlineColumnrectangletwentyfour
            className="bg-white-A700 border border-black-900_42 border-solid flex flex-col items-center justify-start max-w-[928px] mt-3 mx-auto p-2 md:px-5 rounded-[12px] w-full"
            closeicon="images/img_icroundclose.svg"
            addons="Add-ons"
            addons1="Select"
            arrowdown="images/img_arrowdown.svg"
            quantity="Quantity"
            two="02"
            arrowleft="images/img_arrowleft.svg"
            arrowright="images/img_arrowright.svg"
          />
          <Text
            className="md:ml-[0] ml-[603px] mt-[83px] text-black-900 text-xl"
            size="txtRobotoRomanLight20"
          >
            How to receive your order?
          </Text>
          <div className="flex flex-row flex-wrap gap-[21px] items-center justify-center max-w-[919px] mt-[19px] mx-auto md:px-5 w-full">
            <Button className="bg-blue-A200 cursor-pointer font-semibold leading-[normal] min-w-[444px] sm:min-w-full py-3 rounded-[10px] text-center text-white-A700 text-xl">
              Delivey
            </Button>
            <Button className="bg-white-A700 border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[454px] sm:min-w-full py-3 rounded-[10px] text-black-900 text-center text-xl">
              Pickup
            </Button>
          </div>
          <div className="bg-gray-50_01 flex flex-col items-center justify-start max-w-[916px] mt-12 mx-auto p-[30px] md:px-5 rounded-[12px] w-full">
            <div className="flex flex-col gap-[9px] items-start justify-start mb-1.5 w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="text-blue-800 text-xl"
                  size="txtRobotoRomanSemiBold20Blue800"
                >
                  Standard Delivery
                </Text>
                <Text
                  className="text-gray-900 text-xl"
                  size="txtRobotoRomanSemiBold20Gray900"
                >
                  $ 00.00
                </Text>
              </div>
              <Text
                className="text-base text-gray-900"
                size="txtRobotoRomanRegular16"
              >
                Receive by 1 hour - 2 hour
              </Text>
            </div>
          </div>
          <div className="bg-gray-50_01 flex flex-col items-center justify-end max-w-[916px] mt-3 mx-auto p-[15px] md:px-5 rounded-[12px] w-full">
            <div className="flex flex-col gap-[22px] items-start justify-start mt-3.5 w-[96%] md:w-full">
              <Text
                className="text-gray-900 text-xl"
                size="txtRobotoRomanSemiBold20Gray900"
              >
                Hot food Promotion
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <Img
                  className="h-5 mb-1 w-5"
                  src="images/img_notov1bookmark.svg"
                  alt="notov1bookmark"
                />
                <Text
                  className="md:ml-[0] ml-[19px] md:mt-0 mt-0.5 text-base text-black-900"
                  size="txtRobotoRomanRegular16Black900"
                >
                  Use points
                </Text>
                <Text
                  className="md:ml-[0] ml-[502px] md:mt-0 mt-[5px] text-base text-blue_gray-400"
                  size="txtRobotoRomanRegular16Bluegray400"
                >
                  Loyalty Program Required{" "}
                </Text>
                <Switch
                  onColor="#555353"
                  offColor="#555353"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  value={false}
                  className="ml-3 md:ml-[0] md:mt-0 mt-1 w-[5%]"
                />
              </div>
            </div>
          </div>
          <div className="h-[342px] max-w-[916px] mt-3 mx-auto md:px-5 relative w-full">
            <div className="flex flex-col items-center justify-start mb-[-89.42px] mx-auto w-full z-[1]">
              <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
                <div className="bg-gray-50_01 flex flex-col items-center justify-end p-[15px] rounded-[12px] w-full">
                  <div className="flex flex-col items-start justify-start mt-1.5 w-[96%] md:w-full">
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtRobotoRomanMedium20"
                    >
                      Order Summary
                    </Text>
                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-4 w-full">
                      <div className="md:h-6 h-[30px] relative w-[11%]">
                        <Text
                          className="absolute inset-x-[0] mx-auto text-gray-900 text-xl top-[0] w-max"
                          size="txtRobotoRomanLight20Gray900"
                        >
                          Food Total
                        </Text>
                        <Img
                          className="absolute bottom-[0] h-6 left-[0] w-6"
                          src="images/img_notov1bookmark_black_900.svg"
                          alt="notov1bookmark_One"
                        />
                      </div>
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtRobotoRomanLight20Gray900"
                      >
                        $00.00
                      </Text>
                    </div>
                    <div className="flex flex-row sm:gap-10 items-center justify-between mt-1 w-full">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtRobotoRomanLight20Gray900"
                      >
                        Add-ons Total
                      </Text>
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtRobotoRomanLight20Gray900"
                      >
                        $00.00
                      </Text>
                    </div>
                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-[11px] w-full">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtRobotoRomanLight20Gray900"
                      >
                        Delivery Fee
                      </Text>
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtRobotoRomanLight20Gray900"
                      >
                        $00.00
                      </Text>
                    </div>
                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-[9px] w-full">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtRobotoRomanLight20Gray900"
                      >
                        Total Payment
                      </Text>
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtRobotoRomanLight20Gray900"
                      >
                        $00.00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row sm:gap-10 items-start justify-between w-[93%] md:w-full">
                  <Text
                    className="mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-blue-A200"
                    size="txtRobotoRomanMedium32"
                  >
                    Total Payment
                  </Text>
                  <Text
                    className="mb-0.5 md:text-3xl sm:text-[28px] text-[32px] text-blue-A200"
                    size="txtRobotoRomanMedium32"
                  >
                    $ 00.00
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_01 h-[121px] mt-auto mx-auto rounded-[12px] w-full"></div>
          </div>
          <Button className="bg-blue-A200 cursor-pointer font-semibold leading-[normal] min-w-[194px] md:ml-[0] ml-[623px] mt-[72px] py-3 rounded-[10px] text-center text-white-A700 text-xl justify-center ml-[800px]">
            Place Order
          </Button>
          <OrderOnlineFooter3 className="bg-white-A700 flex flex-col items-start justify-end mt-[60px] p-[19px] md:px-5 w-[96%] md:w-full" />
        </div>
      </div>
    </>
  );
};

export default OrderOnlinePage;
