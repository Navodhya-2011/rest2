import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const AddressBookPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-start justify-start mx-auto pb-[78px] md:px-10 sm:px-5 px-[78px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[94px] items-start justify-start md:ml-[0] ml-[107px] w-[62%] md:w-full">
          <div className="md:h-96 h-[388px] relative w-1/4 md:w-full">
            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[7px] rounded-bl-md rounded-br-md shadow-bs w-full">
              <a href="/myaccount">
              <Text
                className="md:ml-[0] ml-[11px] mt-12 text-black-900 text-xl"
                size="txtRobotoRomanLight20"
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
                className="md:ml-[0] ml-[11px] mt-[38px] text-black-900 text-xl"
                size="txtRobotoRomanLight20"
              >
                Favourite{" "}
              </Text></a>
              <a href="/addressbook">
              <Text
                className="md:ml-[0] ml-[11px] mt-[39px] text-blue-A200 text-center text-xl"
                size="txtRobotoRomanSemiBold20BlueA200"
              >
                Address Book
              </Text></a>
              <Text
                className="ml-3 md:ml-[0] mt-[42px] text-black-900 text-xl"
                size="txtRobotoRomanLight20"
              >
                Logout{" "}
              </Text>
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
            <Line className="absolute bg-black-900_19 bottom-[7%] h-px inset-x-[0] mx-auto w-full" />
          </div>
          <div className="flex flex-col items-start justify-start md:mt-0 mt-[58px] w-[64%] md:w-full">
            <div className="flex flex-col font-poppins items-start justify-start w-full">
              <Text
                className="text-base text-black-900"
                size="txtPoppinsRegular16"
              >
                Full Name
              </Text>
              <Input
                name="language_Two"
                placeholder="David "
                className="leading-[normal] p-0 placeholder:text-black-900 sm:pr-5 text-base text-black-900 text-left w-full"
                wrapClassName="border border-black-900_33 border-solid mt-[3px] pl-3.5 pr-[35px] py-[7px] rounded-lg w-full"
              ></Input>
            </div>
            <div className="font-poppins h-[152px] md:h-[159px] mt-[15px] relative w-full">
              <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtPoppinsRegular16"
                >
                  Mobile Number
                </Text>
                <Input
                  name="group112"
                  placeholder="466236467"
                  className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-base text-gray-600 text-left w-full"
                  wrapClassName="border border-black-900_33 border-solid mt-1 pl-3.5 pr-[35px] py-[7px] rounded-lg w-full"
                  type="number"
                ></Input>
                <Text
                  className="ml-3.5 md:ml-[0] mt-[52px] text-base text-gray-600"
                  size="txtPoppinsRegular16Gray600"
                >
                  Select
                </Text>
              </div>
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtPoppinsRegular16"
                >
                  Area
                </Text>
                <Input
                  name="group110"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-black-900_33 border-solid flex mt-[3px] pr-2.5 py-2.5 rounded-lg w-full"
                  suffix={
                    <Img
                      className="h-5 ml-[35px] my-auto"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                ></Input>
              </div>
            </div>
            <div className="flex flex-col font-poppins items-start justify-start mt-4 w-full">
              <Text
                className="text-base text-black-900"
                size="txtPoppinsRegular16"
              >
                Address
              </Text>
              <Input
                name="group113"
                placeholder="0648303477594"
                className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-base text-gray-600 text-left w-full"
                wrapClassName="border border-black-900_33 border-solid mt-[3px] pl-3.5 pr-[35px] py-[7px] rounded-lg w-full"
                type="number"
              ></Input>
            </div>
            <Button className="bg-blue-A200 cursor-pointer font-roboto font-semibold leading-[normal] min-w-[128px] mt-[43px] py-2 rounded-[7px] text-base text-center text-white-A700">
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressBookPage;
