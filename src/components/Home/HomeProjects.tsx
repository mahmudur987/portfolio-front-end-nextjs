import SingleProject from "./SingleProject";
import { Button } from "../ui/button";
import Link from "next/link";
import { IResponse, project } from "@/types";
import { base_url } from "@/axios/Axios";
import AppSlider from "./app-slider";

const HomeProjects = async () => {
  const res = await fetch(`${base_url}/project?limit=50`, {
    next: { tags: ["projects"] },
  });
  const data: IResponse<project[]> = await res.json();
  const projects = data?.data?.filter((x) => x.projectType === "Client");
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
          {projects && projects.length > 0 ? (
            <AppSlider {...settings}>
              {projects.slice(0, 4)?.map((work, i) => (
                <SingleProject key={i} work={work} />
              ))}
            </AppSlider>
          ) : (
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
              No Projects Found
            </h2>
          )}
        </div>
      </div>

      <div className="flex justify-center ">
        <Link href="/projects">
          <Button className="my-10" variant={"outline"}>
            See All Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeProjects;
