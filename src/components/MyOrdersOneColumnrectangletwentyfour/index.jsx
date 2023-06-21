import React from "react";

import { Button, Img, Text } from "components";

const MyOrdersOneColumnrectangletwentyfour = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
          <Img
            className="h-[115px] md:h-auto object-cover rounded-[9px] w-[114px] sm:w-full"
            src="images/img_rectangle24.png"
            alt="rectangleTwentyFour"
          />
          <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[19px] md:mt-0 mt-2.5 w-[44%] md:w-full">
            <Text
              className="md:ml-[0] ml-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtRobotoRomanRegular24"
            >
              {props?.foodname}
            </Text>
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="mt-2 text-black-900 text-center text-xl"
                size="txtRobotoRomanLight20"
              >
                {props?.price}
              </Text>
              <Text
                className="mb-2 text-blue_gray-900 text-center text-xl"
                size="txtRobotoRomanRegular20Bluegray900"
              >
                {props?.timeleft}
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[92px] md:mt-0 mt-12 text-base text-blue_gray-900 text-center"
            size="txtRobotoRomanRegular16Bluegray900"
          >
            {props?.status}
          </Text>
          <Button className="bg-blue-A100 cursor-pointer font-bold font-roboto leading-[normal] min-w-[164px] md:ml-[0] ml-[15px] md:mt-0 my-[35px] py-2.5 rounded-[9px] text-center text-white-A700 text-xl">
            {props?.cooking}
          </Button>
        </div>
      </div>
    </>
  );
};

MyOrdersOneColumnrectangletwentyfour.defaultProps = {
  foodname: "Food Name",
  price: "$00.00",
};

export default MyOrdersOneColumnrectangletwentyfour;
