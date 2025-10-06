"use client";

import Slider from "react-slick";

const AppSlider = ({ children, ...props }: { children: React.ReactNode }) => {
  return <Slider {...props}>{children}</Slider>;
};

export default AppSlider;
