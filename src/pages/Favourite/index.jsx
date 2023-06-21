import React from "react";

import { Button, Img, Line, Text } from "components";

const FavouritePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto pb-[185px] md:px-10 sm:px-5 px-[185px] w-full">
        <div className="flex md:flex-col flex-row gap-[38px] items-start justify-center max-w-[1038px] mb-[70px] mx-auto w-full">
          <div className="md:h-[381px] h-[385px] relative w-[19%] md:w-full">
            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[7px] rounded-bl-md rounded-br-md shadow-bs w-full">
              <a href="/myaccount">
              <Text
                className="md:ml-[0] ml-[11px] mt-12 text-black-900 text-xl"
                size="txtRobotoRomanLight20"
              >
                Profile {" "}
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
                className="md:ml-[0] ml-[11px] mt-[38px] text-blue-A200 text-center text-xl"
                size="txtRobotoRomanSemiBold20BlueA200"
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
                className="ml-14 md:ml-[0] mt-[23px] text-blue-A200 text-xs"
                size="txtRobotoRomanLight12"
              >
                Minimize
              </Text>
            </div>
            <Line className="absolute bg-black-900_19 h-px inset-x-[0] mx-auto top-[26%] w-full" />
            <Line className="absolute bg-black-900_19 h-px inset-x-[0] mx-auto top-[43%] w-full" />
            <Line className="absolute bg-black-900_19 bottom-[40%] h-px inset-x-[0] mx-auto w-full" />
            <Line className="absolute bg-black-900_19 bottom-[23%] h-px inset-x-[0] mx-auto w-full" />
            <Line className="absolute bg-black-900_19 bottom-[7%] h-px inset-x-[0] mx-auto w-full" />
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[58px] w-[78%] md:w-full">
            <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <div className="border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start pb-4 rounded-[12px] shadow-bs2 w-full">
                <div className="h-[108px] relative w-full">
                  <Img
                    className="h-[108px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    src="images/img_rectangle24_108x187.png"
                    alt="rectangleTwentyFour"
                  />
                  <Img
                    className="absolute h-[30px] right-[3%] top-[6%] w-[30px]"
                    src="images/img_mdiheart.svg"
                    alt="mdiheart"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-[13px] w-8 md:w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanMedium16Black900"
                  >
                    $00
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Name
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-1.5">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 1
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 2
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 3
                  </Text>
                </div>
                <Button className="bg-blue-A200 cursor-pointer font-medium leading-[normal] min-w-[128px] mt-[22px] py-2.5 rounded-[7px] text-center text-white-A700 text-xs">
                  Add
                </Button>
              </div>
              <div className="border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start pb-4 rounded-[12px] shadow-bs2 w-full">
                <div className="h-[108px] relative w-full">
                  <Img
                    className="h-[108px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    src="images/img_rectangle24_108x187.png"
                    alt="rectangleTwentyFour"
                  />
                  <Img
                    className="absolute h-[30px] right-[6%] top-[6%] w-[30px]"
                    src="images/img_mdiheart.svg"
                    alt="mdiheart"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-[13px] w-8 md:w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanMedium16Black900"
                  >
                    $00
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Name
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-1.5">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 1
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 2
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 3
                  </Text>
                </div>
                <Button className="bg-blue-A200 cursor-pointer font-medium leading-[normal] min-w-[128px] mt-[22px] py-2.5 rounded-[7px] text-center text-white-A700 text-xs">
                  Add
                </Button>
              </div>
              <div className="border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start pb-4 rounded-[12px] shadow-bs2 w-full">
                <div className="h-[108px] relative w-full">
                  <Img
                    className="h-[108px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    src="images/img_rectangle24_108x187.png"
                    alt="rectangleTwentyFour"
                  />
                  <Img
                    className="absolute h-[30px] right-[3%] top-[6%] w-[30px]"
                    src="images/img_mdiheart.svg"
                    alt="mdiheart"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-[13px] w-8 md:w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanMedium16Black900"
                  >
                    $00
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Name
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-1.5">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 1
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 2
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 3
                  </Text>
                </div>
                <Button className="bg-blue-A200 cursor-pointer font-medium leading-[normal] min-w-[128px] mt-[22px] py-2.5 rounded-[7px] text-center text-white-A700 text-xs">
                  Add
                </Button>
              </div>
              <div className="border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start pb-4 rounded-[12px] shadow-bs2 w-full">
                <div className="h-[108px] relative w-full">
                  <Img
                    className="h-[108px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    src="images/img_rectangle24_108x187.png"
                    alt="rectangleTwentyFour"
                  />
                  <Img
                    className="absolute h-[30px] right-[0] top-[6%] w-[30px]"
                    src="images/img_mdiheart.svg"
                    alt="mdiheart"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-[13px] w-8 md:w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanMedium16Black900"
                  >
                    $00
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Name
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-1.5">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 1
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 2
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 3
                  </Text>
                </div>
                <Button className="bg-blue-A200 cursor-pointer font-medium leading-[normal] min-w-[128px] mt-[22px] py-2.5 rounded-[7px] text-center text-white-A700 text-xs">
                  Add
                </Button>
              </div>
              <div className="border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start pb-4 rounded-[12px] shadow-bs2 w-full">
                <div className="h-[108px] relative w-full">
                  <Img
                    className="h-[108px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    src="images/img_rectangle24_108x187.png"
                    alt="rectangleTwentyFour"
                  />
                  <Img
                    className="absolute h-[30px] right-[3%] top-[7%] w-[30px]"
                    src="images/img_mdiheart.svg"
                    alt="mdiheart"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-[13px] w-8 md:w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanMedium16Black900"
                  >
                    $00
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Name
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-1.5">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 1
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 2
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 3
                  </Text>
                </div>
                <Button className="bg-blue-A200 cursor-pointer font-medium leading-[normal] min-w-[128px] mt-[22px] py-2.5 rounded-[7px] text-center text-white-A700 text-xs">
                  Add
                </Button>
              </div>
              <div className="border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start pb-4 rounded-[12px] shadow-bs2 w-full">
                <div className="h-[108px] relative w-full">
                  <Img
                    className="h-[108px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    src="images/img_rectangle24_108x187.png"
                    alt="rectangleTwentyFour"
                  />
                  <Img
                    className="absolute h-[30px] right-[6%] top-[7%] w-[30px]"
                    src="images/img_mdiheart.svg"
                    alt="mdiheart"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-[13px] w-8 md:w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanMedium16Black900"
                  >
                    $00
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Name
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-1.5">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 1
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 2
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 3
                  </Text>
                </div>
                <Button className="bg-blue-A200 cursor-pointer font-medium leading-[normal] min-w-[128px] mt-[22px] py-2.5 rounded-[7px] text-center text-white-A700 text-xs">
                  Add
                </Button>
              </div>
              <div className="border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start pb-4 rounded-[12px] shadow-bs2 w-full">
                <div className="h-[108px] relative w-full">
                  <Img
                    className="h-[108px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    src="images/img_rectangle24_108x187.png"
                    alt="rectangleTwentyFour"
                  />
                  <Img
                    className="absolute h-[30px] right-[3%] top-[7%] w-[30px]"
                    src="images/img_mdiheart.svg"
                    alt="mdiheart"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-[13px] w-8 md:w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanMedium16Black900"
                  >
                    $00
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Name
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-1.5">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 1
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 2
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 3
                  </Text>
                </div>
                <Button className="bg-blue-A200 cursor-pointer font-medium leading-[normal] min-w-[128px] mt-[22px] py-2.5 rounded-[7px] text-center text-white-A700 text-xs">
                  Add
                </Button>
              </div>
              <div className="border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start pb-4 rounded-[12px] shadow-bs2 w-full">
                <div className="h-[108px] relative w-full">
                  <Img
                    className="h-[108px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    src="images/img_rectangle24_108x187.png"
                    alt="rectangleTwentyFour"
                  />
                  <Img
                    className="absolute h-[30px] right-[0] top-[7%] w-[30px]"
                    src="images/img_mdiheart.svg"
                    alt="mdiheart"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-[13px] w-8 md:w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanMedium16Black900"
                  >
                    $00
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Name
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-1.5">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 1
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 2
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 3
                  </Text>
                </div>
                <Button className="bg-blue-A200 cursor-pointer font-medium leading-[normal] min-w-[128px] mt-[22px] py-2.5 rounded-[7px] text-center text-white-A700 text-xs">
                  Add
                </Button>
              </div>
              <div className="border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start pb-4 rounded-[12px] shadow-bs2 w-full">
                <div className="h-[108px] relative w-full">
                  <Img
                    className="h-[108px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    src="images/img_rectangle24_108x187.png"
                    alt="rectangleTwentyFour"
                  />
                  <Img
                    className="absolute h-[30px] right-[3%] top-[7%] w-[30px]"
                    src="images/img_mdiheart.svg"
                    alt="mdiheart"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-[13px] w-8 md:w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanMedium16Black900"
                  >
                    $00
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Name
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-1.5">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 1
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 2
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 3
                  </Text>
                </div>
                <Button className="bg-blue-A200 cursor-pointer font-medium leading-[normal] min-w-[128px] mt-[22px] py-2.5 rounded-[7px] text-center text-white-A700 text-xs">
                  Add
                </Button>
              </div>
              <div className="border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start pb-4 rounded-[12px] shadow-bs2 w-full">
                <div className="h-[108px] relative w-full">
                  <Img
                    className="h-[108px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    src="images/img_rectangle24_108x187.png"
                    alt="rectangleTwentyFour"
                  />
                  <Img
                    className="absolute h-[30px] right-[6%] top-[7%] w-[30px]"
                    src="images/img_mdiheart.svg"
                    alt="mdiheart"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-[13px] w-8 md:w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanMedium16Black900"
                  >
                    $00
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Name
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-1.5">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 1
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 2
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 3
                  </Text>
                </div>
                <Button className="bg-blue-A200 cursor-pointer font-medium leading-[normal] min-w-[128px] mt-[22px] py-2.5 rounded-[7px] text-center text-white-A700 text-xs">
                  Add
                </Button>
              </div>
              <div className="border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start pb-4 rounded-[12px] shadow-bs2 w-full">
                <div className="h-[108px] relative w-full">
                  <Img
                    className="h-[108px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    src="images/img_rectangle24_108x187.png"
                    alt="rectangleTwentyFour"
                  />
                  <Img
                    className="absolute h-[30px] right-[3%] top-[7%] w-[30px]"
                    src="images/img_mdiheart.svg"
                    alt="mdiheart"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-[13px] w-8 md:w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanMedium16Black900"
                  >
                    $00
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Name
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-1.5">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 1
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 2
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 3
                  </Text>
                </div>
                <Button className="bg-blue-A200 cursor-pointer font-medium leading-[normal] min-w-[128px] mt-[22px] py-2.5 rounded-[7px] text-center text-white-A700 text-xs">
                  Add
                </Button>
              </div>
              <div className="border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start pb-4 rounded-[12px] shadow-bs2 w-full">
                <div className="h-[108px] relative w-full">
                  <Img
                    className="h-[108px] m-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                    src="images/img_rectangle24_108x187.png"
                    alt="rectangleTwentyFour"
                  />
                  <Img
                    className="absolute h-[30px] right-[0] top-[7%] w-[30px]"
                    src="images/img_mdiheart.svg"
                    alt="mdiheart"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-[13px] w-8 md:w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtRobotoRomanMedium16Black900"
                  >
                    $00
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Name
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start mt-1.5">
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 1
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 2
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xs"
                    size="txtRobotoRomanLight12Black900"
                  >
                    Feature 3
                  </Text>
                </div>
                <Button className="bg-blue-A200 cursor-pointer font-medium leading-[normal] min-w-[128px] mt-[22px] py-2.5 rounded-[7px] text-center text-white-A700 text-xs">
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouritePage;
