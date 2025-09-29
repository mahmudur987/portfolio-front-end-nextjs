import { RunningProjects } from "@/constant/worksData";
import SingleProject from "./SingleProject";
import { Link } from "react-router";
import { Button } from "../ui/button";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeProjects = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-10 py-5">
      <div className=" my-10 md:my-20 lg:my-30  ">
        <h1 className="my-5 text-center text-2xl md:text-3xl lg:text-4xl   text-green-700  uppercase mb-10 font-bold">
          Projects{" "}
        </h1>
        <div className="w-full  max-w-7xl mx-auto">
          <Slider {...settings}>
            {RunningProjects.slice(0, 4)?.map((work, i) => (
              <SingleProject key={i} work={work} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="flex justify-center ">
        <Link to="/projects">
          <Button className="my-10" variant={"outline"}>
            See All Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeProjects;
