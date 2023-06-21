import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import HomeColumnhotfood from "components/HomeColumnhotfood";

const MyAccountPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <HomeColumnhotfood
          className="flex flex-col items-center justify-start w-full"
          grouponetext="My Account"
        />
        <Img
          className="h-[231px] sm:h-auto object-cover w-full"
          src="images/img_frame105.png"
          alt="frame105"
        />
        <div className="h-[722px] md:px-5 relative w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start mb-[-36px] mx-auto pb-9 sm:px-5 px-9 w-full z-[1]">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[95px] items-start justify-start md:ml-[0] ml-[149px] w-[58%] md:w-full">
              <div className="md:h-96 h-[388px] relative w-1/4 md:w-full">
                <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[7px] rounded-bl-md rounded-br-md shadow-bs w-full">
                  <a href="/myaccount">
                  <Text
                    className="md:ml-[0] ml-[11px] mt-12 text-blue-A200 text-center text-xl"
                    size="txtRobotoRomanSemiBold20BlueA200"
                  >
                    Profile
                  </Text></a>
                  <a href="/myorders">
                  <Text
                    className="ml-3 md:ml-[0] mt-[42px] text-black-900 text-xl"
                    size="txtRobotoRomanLight20"
                  >
                    My Orders
                  </Text></a>
                  <a href="/favourite">
                  <Text
                    className="ml-3 md:ml-[0] mt-[38px] text-black-900 text-xl"
                    size="txtRobotoRomanLight20"
                  >
                    Favourite{" "}
                  </Text></a>
                  <a href="/addressbook">
                  <Text
                    className="ml-3 md:ml-[0] mt-[39px] text-black-900 text-xl"
                    size="txtRobotoRomanLight20"
                  >
                    Address Book
                  </Text></a>
                  <a
                    href="javascript:"
                    className="ml-3 md:ml-[0] mt-[42px] text-black-900 text-xl"
                  >
                    <Text size="txtRobotoRomanLight20">Logout</Text>
                  </a>
                  <Text
                    className="ml-14 md:ml-[0] mt-[26px] text-blue-A200 text-xs"
                    size="txtRobotoRomanLight12"
                  >
                    Minimize
                  </Text>
                </div>
                <Line className="absolute bg-black-900_19 h-px inset-x-[0] mx-auto top-[26%] w-full" />
                <Line className="absolute bg-black-900_19 h-px inset-x-[0] mx-auto top-[43%] w-full" />
                <Line className="absolute bg-black-900_19 bottom-[41%] h-px inset-x-[0] mx-auto w-full" />
                <Line className="absolute bg-black-900_19 bottom-[24%] h-px inset-x-[0] mx-auto w-full" />
                <Line className="absolute bg-black-900_19 bottom-[9%] h-px inset-x-[0] mx-auto w-full" />
              </div>
              <div className="flex flex-col font-poppins gap-4 items-center justify-start md:mt-0 mt-[58px] w-[64%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Name
                  </Text>
                  <Input
                    name="language_Three"
                    placeholder="David "
                    className="leading-[normal] p-0 placeholder:text-black-900 text-base text-black-900 text-left w-full"
                    wrapClassName="border border-black-900_33 border-solid flex mt-[3px] px-[13px] py-[7px] rounded-lg w-full"
                    suffix={
                      <Img
                        className="mt-1 mb-[3px] h-4 ml-[35px]"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    }
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Email
                  </Text>
                  <Input
                    name="email_One"
                    placeholder="David@gmail.com "
                    className="leading-[normal] p-0 placeholder:text-black-900 text-base text-black-900 text-left w-full"
                    wrapClassName="border border-black-900_33 border-solid flex mt-1 pb-[5px] pt-2.5 px-[13px] rounded-lg w-full"
                    suffix={
                      <Img
                        className="mt-px mb-1.5 h-4 ml-[35px]"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    }
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Birthday
                  </Text>
                  <Input
                    name="language_Four"
                    placeholder="1990 - 02 - 14 "
                    className="leading-[normal] p-0 placeholder:text-black-900 text-base text-black-900 text-left w-full"
                    wrapClassName="border border-black-900_33 border-solid flex mt-0.5 px-[13px] py-[7px] rounded-lg w-full"
                    suffix={
                      <Img
                        className="mt-[3px] mb-1 h-4 ml-[35px]"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    }
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtPoppinsRegular16"
                  >
                    Contact Number
                  </Text>
                  <Input
                    name="groupEightyTwo"
                    placeholder="0648303477594"
                    className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-gray-600 text-left w-full"
                    wrapClassName="border border-black-900_33 border-solid flex mt-[3px] px-[13px] py-[7px] rounded-lg w-full"
                    type="number"
                    suffix={
                      <Img
                        className="mt-[3px] mb-1 h-4 ml-[35px]"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    }
                  ></Input>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-white-A700 flex items-center justify-center mt-auto mx-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default MyAccountPage;
