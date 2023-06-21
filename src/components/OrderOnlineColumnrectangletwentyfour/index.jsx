import React from "react";

import { Img, Text } from "components";

const OrderOnlineColumnrectangletwentyfour = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <Img
            className="md:flex-1 h-[115px] sm:h-auto object-cover rounded-[9px] w-[14%] md:w-full"
            src="images/img_rectangle24.png"
            alt="rectangleTwentyFour"
          />
          <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[25px] md:mt-0 mt-2.5">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtRobotoRomanRegular24"
            >
              {props?.foodname}
            </Text>
            <Text
              className="text-black-900 text-center text-xl"
              size="txtRobotoRomanLight20"
            >
              {props?.price}
            </Text>
          </div>
          <div className="flex md:flex-1 flex-col gap-3 justify-start md:ml-[0] ml-[72px] w-[62%] md:w-full">
            {!!props?.closeicon ? (
              <Img
                className="h-[26px] md:ml-[0] ml-[534px] w-[26px]"
                alt="icroundclose"
                src="props?.closeicon"
              />
            ) : null}
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mr-4 w-[98%] md:w-full">
              {!!props?.addons ? (
                <Text
                  className="sm:mt-0 mt-2 text-black-900 text-center text-xl"
                  size="txtRobotoRomanLight20"
                >
                  {props?.addons}
                </Text>
              ) : null}
              <div className="h-12 sm:ml-[0] ml-[15px] relative w-[28%] sm:w-full">
                {!!props?.addons1 ? (
                  <Text
                    className="ml-5 my-auto text-black-900 text-center text-xl"
                    size="txtRobotoRomanLight20"
                  >
                    {props?.addons1}
                  </Text>
                ) : null}
                <div className="absolute border border-black-900_99 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-3.5 rounded-md w-full">
                  {!!props?.arrowdown ? (
                    <Img
                      className="h-5 mr-0.5 w-5"
                      alt="arrowdown"
                      src="props?.arrowdown"
                    />
                  ) : null}
                </div>
              </div>
              {!!props?.quantity ? (
                <Text
                  className="sm:ml-[0] ml-[65px] sm:mt-0 mt-2.5 text-black-900 text-center text-xl"
                  size="txtRobotoRomanLight20"
                >
                  {props?.quantity}
                </Text>
              ) : null}
              <div className="h-12 sm:ml-[0] ml-[15px] relative w-[28%] sm:w-full">
                {!!props?.two ? (
                  <Text
                    className="m-auto text-black-900 text-center text-xl"
                    size="txtRobotoRomanLight20"
                  >
                    {props?.two}
                  </Text>
                ) : null}
                <div className="absolute border border-black-900_99 border-solid flex flex-row h-full inset-[0] items-center justify-between m-auto p-3.5 rounded-md w-full">
                  {!!props?.arrowleft ? (
                    <Img
                      className="h-5 ml-[5px] w-5"
                      alt="arrowleft"
                      src="props?.arrowleft"
                    />
                  ) : null}
                  {!!props?.arrowright ? (
                    <Img
                      className="h-5 mr-[7px] w-5"
                      alt="arrowright"
                      src="props?.arrowright"
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

OrderOnlineColumnrectangletwentyfour.defaultProps = {
  foodname: "Food Name",
  price: "$00.00",
};

export default OrderOnlineColumnrectangletwentyfour;
