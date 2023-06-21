import React from "react";

import { Text } from "components";

const MyAccountOneColumnhotfood = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-row md:gap-10 gap-[471px] items-center justify-end p-[15px] w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
            size="txtRobotoRomanLight28"
          >
            {props?.hotfood}
          </Text>
          <Text
            className="border border-black-900 border-solid mr-[53px] my-[5px] pb-0.5 pt-[7px] px-[17px] text-black-900 text-center text-xl"
            size="txtRobotoRomanLight20"
          >
            {props?.groupone}
          </Text>
        </div>
        <div className="bg-gray-100 flex flex-col items-end justify-end p-2 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end mr-[60px] mt-2 w-[63%] md:w-full">
            <Text
              className="mb-[9px] text-black-900 text-sm"
              size="txtRobotoRomanLight14"
            >
              {props?.homelink}
            </Text>
            <Text
              className="mb-[9px] md:ml-[0] ml-[49px] text-black-900 text-sm"
              size="txtRobotoRomanLight14"
            >
              {props?.aboutlink}
            </Text>
            <Text
              className="mb-[9px] md:ml-[0] ml-[49px] text-black-900 text-sm"
              size="txtRobotoRomanLight14"
            >
              {props?.ourteamlink}
            </Text>
            <Text
              className="mb-[9px] md:ml-[0] ml-[57px] text-black-900 text-sm"
              size="txtRobotoRomanLight14"
            >
              {props?.menulink}
            </Text>
            <Text
              className="mb-[9px] md:ml-[0] ml-[49px] text-black-900 text-sm"
              size="txtRobotoRomanLight14"
            >
              {props?.orderonlinelink}
            </Text>
            <Text
              className="md:ml-[0] ml-[294px] md:mt-0 mt-[9px] text-black-900 text-sm underline"
              size="txtRobotoRomanLight14"
            >
              {props?.joinourloyaltylink}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

MyAccountOneColumnhotfood.defaultProps = {
  hotfood: "Hot Food",
  groupone: "My Account",
  homelink: "Home",
  aboutlink: "About",
  ourteamlink: "Our Team",
  menulink: "Menu",
  orderonlinelink: "Order Online",
  joinourloyaltylink: "Join our loyalty program",
};

export default MyAccountOneColumnhotfood;
