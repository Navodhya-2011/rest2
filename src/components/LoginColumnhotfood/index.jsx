import React, {useState} from "react";

import { Button, Text } from "components";
import { FiMenu } from "react-icons/fi";

const LoginColumnhotfood = (props) => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-row md:gap-10 gap-[471px] items-center justify-center p-[15px] w-full  md:ml-[800px] sm:mr-[135px] sm:ml-[200px]">

        <FiMenu className="hidden lg:hidden block h-6 w-6 cursor-pointer md:block" onClick={() => setOpen(!open)} />
          <a href="/">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 "
            size="txtRobotoRomanLight28"
          >
            {props?.hotfoodtext} Hot Food
          </Text></a>
          <a href="/login">
          <Button className="border border-black-900 border-solid cursor-pointer font-light font-roboto leading-[normal] min-w-[140px] min- mr-[53px] my-[10px] py-[5px] text-black-900 text-center text-xl sm:ml-[20px]"> Login
            {props?.loginbutton}
          </Button></a>
        </div>
    

<div className="bg-gray-100 flex flex-col items-end justify-center p-2 w-full ml-[px] xl:max-w-7xl xl:max-auto max-w-full px-[1%] md:ml-[50px]">
  
  <nav className="lg:flex lg:items-center lg:w-auto block">
    <ul className={`flex gap-5 md:flex-row md:mr-[285px] sm:flex-col sm:mr-[200px] ${open ? "block" : "hidden"}`}>
      <li>
        <a href="/">
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
          <Text className="mb-[9px] sm:ml-[0] md:ml-[0px] ml-[49px] text-black-900 text-sm" size="txtRobotoRomanLight14">
            {props?.orderonlinetext}
          </Text>
        </a>
      </li>
      <li>
        <a href="/loyaltyprogram">
          <Text className="sm:ml-[0]  md:mt-[10px] mt-[3px] text-black-900 text-sm underline md:ml-[250px]" size="txtRobotoRomanLight14">
            {props?.joinloyaltytext}
          </Text>
        </a>
      </li>
    </ul>
  </nav>
</div>
</div>
      
    </>
  );
};

LoginColumnhotfood.defaultProps = {
  hotfood: "Hot Food",
  loginOne: "Login",
  hometext: "Home",
  abouttext: "About",
  ourteamtext: "Our Team",
  menutext: "Menu",
  orderonlinetext: "Order Online",
  joinloyaltytext: "Join our loyalty program",
};

export default LoginColumnhotfood;
