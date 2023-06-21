import React from "react";

import { Button, Img, Line, List, Text } from "components";
import OrderOnlineColumnrectangletwentyfour from "components/OrderOnlineColumnrectangletwentyfour";

const MyOrdersPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto pb-[143px] md:px-10 sm:px-5 px-[143px] w-full">
        <div className="flex md:flex-col flex-row gap-9 items-start justify-center max-w-[1070px] mx-auto w-full">
          <div className="md:h-96 h-[388px] relative w-[18%] md:w-full">
            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[7px] rounded-bl-md rounded-br-md shadow-bs w-full">
              <Text
                className="md:ml-[0] ml-[11px] mt-12 text-black-900 text-xl"
                size="txtRobotoRomanLight20"
              >
                Profile
              </Text>
              <Text
                className="ml-3 md:ml-[0] mt-[42px] text-blue-A200 text-center text-xl"
                size="txtRobotoRomanSemiBold20BlueA200"
              >
                My Orders
              </Text>
              <Text
                className="ml-3 md:ml-[0] mt-[38px] text-black-900 text-xl"
                size="txtRobotoRomanLight20"
              >
                Favourite{" "}
              </Text>
              <Text
                className="ml-3 md:ml-[0] mt-[39px] text-black-900 text-xl"
                size="txtRobotoRomanLight20"
              >
                Address Book
              </Text>
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
            <Line className="absolute bg-black-900_19 bottom-[9%] h-px inset-x-[0] mx-auto w-full" />
            <Line className="absolute bg-black-900_19 h-px inset-x-[0] mx-auto top-[26%] w-full" />
            <Line className="absolute bg-black-900_19 h-px inset-x-[0] mx-auto top-[43%] w-full" />
            <Line className="absolute bg-black-900_19 bottom-[41%] h-px inset-x-[0] mx-auto w-full" />
            <Line className="absolute bg-black-900_19 bottom-[24%] h-px inset-x-[0] mx-auto w-full" />
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[58px] w-[79%] md:w-full">
            <List
              className="flex flex-col gap-5 items-center w-full"
              orientation="vertical"
            >
              {new Array(3).fill({}).map((props, index) => (
                <React.Fragment
                  key={`OrderOnlineColumnrectangletwentyfour${index}`}
                >
                  <OrderOnlineColumnrectangletwentyfour
                    className="bg-white-A700 border border-black-900_42 border-solid flex flex-1 flex-col items-center justify-start my-0 p-2 rounded-[12px] w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
            <Text
              className="mt-[85px] text-black-900 text-center text-xl"
              size="txtRobotoRomanRegular20"
            >
              History
            </Text>
            <List
              className="flex flex-col gap-5 items-center mt-[63px] w-full"
              orientation="vertical"
            >
              {new Array(3).fill({}).map((props, index) => (
                <React.Fragment
                  key={`OrderOnlineColumnrectangletwentyfour${index}`}
                >
                  <OrderOnlineColumnrectangletwentyfour
                    className="bg-white-A700 border border-black-900_42 border-solid flex flex-1 flex-col items-center justify-start p-2 rounded-[12px] w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrdersPage;
