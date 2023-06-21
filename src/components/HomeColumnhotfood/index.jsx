import React, { useState } from "react";

import { Img, Text, Button } from "components";
import { FiMenu } from "react-icons/fi";

const HomeColumnhotfood = (props) => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-row md:gap-10 gap-[471px] items-center justify-center p-[15px] w-full">

          

          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
            size="txtRobotoRomanLight28"
          >
            {props?.hotfoodtext}
          </Text>
          <a href="/login">
          <Button className="border border-black-900 border-solid cursor-pointer font-light font-roboto leading-[normal] min-w-[140px] min- mr-[53px] my-[10px] py-[5px] text-black-900 text-center text-xl"> Login
            {props?.loginbutton}
          </Button></a>
        </div>
        <div className="bg-gray-100 flex flex-col items-end justify-center p-2 w-full mr-[px] xl:mx-w-7xl xl:mx-auto mx-w-full px-[1%]">
        <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)}/>
  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center mr-[60px] mt-2 w-[63%] md:w-full mr-[300px] ">
  
  <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto`} >
    <ul className="flex gap-10">
      <li>
        <a href="/" >
          <Text className="mb-[9px] md:ml-[0] ml-[49px] text-black-900 text-sm" size="txtRobotoRomanLight14">
            {props?.hometext}
          </Text>
        </a>
      </li>
      <li>
        <a href="#">
          <Text className="mb-[9px] md:ml-[0] ml-[49px] text-black-900 text-sm" size="txtRobotoRomanLight14">
            {props?.abouttext}
          </Text>
        </a>
      </li>
      <li>
        <a href="/ourteam">
          <Text className="mb-[9px] md:ml-[0] ml-[49px] text-black-900 text-sm" size="txtRobotoRomanLight14">
            {props?.ourteamtext}
          </Text>
        </a>
      </li>
      <li>
        <a href="/menu">
          <Text className="mb-[9px] md:ml-[0] ml-[57px] text-black-900 text-sm" size="txtRobotoRomanLight14">
            {props?.menutext}
          </Text>
        </a>
      </li>
      <li>
        <a href="/orderonline">
          <Text className="mb-[9px] md:ml-[0] ml-[49px] text-black-900 text-sm" size="txtRobotoRomanLight14">
            {props?.orderonlinetext}
          </Text>
        </a>
      </li>
      <li>
        <a href="/loyaltyprogram">
          <Text className="md:ml-[0] ml-[294px] md:mt-0 mt-[9px] text-black-900 text-sm underline" size="txtRobotoRomanLight14">
            {props?.joinloyaltytext}
          </Text>
        </a>
      </li>
    </ul>
    </nav>
  </div>
</div>

      </div>
    </>
  );
};

HomeColumnhotfood.defaultProps = {
  hotfoodtext: "Hot Food",
  hometext: "Home",
  abouttext: "About",
  ourteamtext: "Our Team",
  menutext: "Menu",
  orderonlinetext: "Order Online",
  joinloyaltytext: "Join our loyalty program"
};

export default HomeColumnhotfood;
