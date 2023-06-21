import React from "react";

const sizeClasses = {
  txtRobotoRomanRegular20Bluegray900: "font-normal font-roboto",
  txtPoppinsMedium9: "font-medium font-poppins",
  txtRobotoRomanLight16: "font-light font-roboto",
  txtRobotoRomanMedium32: "font-medium font-roboto",
  txtRobotoRomanLight14: "font-light font-roboto",
  txtRobotoRomanLight56WhiteA700: "font-light font-roboto",
  txtRobotoRomanSemiBold16: "font-roboto font-semibold",
  txtRobotoRomanSemiBold20BlueA200: "font-roboto font-semibold",
  txtPoppinsBold13: "font-bold font-poppins",
  txtRobotoRomanRegular16Bluegray400: "font-normal font-roboto",
  txtRobotoRomanLight20Gray900: "font-light font-roboto",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtSchoolbellRegular15WhiteA700: "font-normal font-schoolbell",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtPoppinsMedium10: "font-medium font-poppins",
  txtRobotoRomanRegular20: "font-normal font-roboto",
  txtRobotoRomanLight56: "font-light font-roboto",
  txtRobotoRomanLight12: "font-light font-roboto",
  txtRobotoRomanSemiBold20: "font-roboto font-semibold",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtRobotoRomanRegular24: "font-normal font-roboto",
  txtRobotoRomanLight48: "font-light font-roboto",
  txtRobotoRomanLight24: "font-light font-roboto",
  txtRobotoRomanMedium20: "font-medium font-roboto",
  txtSchoolbellRegular15: "font-normal font-schoolbell",
  txtRobotoRomanLight28: "font-light font-roboto",
  txtRobotoRomanLight12Black900: "font-light font-roboto",
  txtRobotoRomanMedium20Black900: "font-medium font-roboto",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtRobotoRomanRegular16: "font-normal font-roboto",
  txtRobotoRomanMedium16Black900: "font-medium font-roboto",
  txtRobotoRomanRegular16Black900: "font-normal font-roboto",
  txtRobotoRomanRegular16Bluegray900: "font-normal font-roboto",
  txtRobotoRomanLight20Gray70002: "font-light font-roboto",
  txtPoppinsRegular16Gray600: "font-normal font-poppins",
  txtRobotoRomanLight40: "font-light font-roboto",
  txtRobotoRomanSemiBold20Gray900: "font-roboto font-semibold",
  txtInterRegular14: "font-inter font-normal",
  txtRobotoRomanMedium16: "font-medium font-roboto",
  txtRobotoRomanLight20: "font-light font-roboto",
  txtRobotoRomanSemiBold20Blue800: "font-roboto font-semibold",
  txtRobotoRomanBold48: "font-bold font-roboto",
  txtRobotoRomanLight16Black900: "font-light font-roboto",
  txtRobotoRomanMedium14: "font-medium font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
