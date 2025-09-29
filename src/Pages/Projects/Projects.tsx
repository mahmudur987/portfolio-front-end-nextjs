import { useEffect, useState } from "react";
import Project from "./Project";
import Loading from "../../components/Loading/Loading";
import { RunningProjects } from "../../constant/worksData";
import WorkCard from "../../components/workCard/WorkCard";
import AXIOSBASEURL from "../../axios/Axios";
import toast from "react-hot-toast";
import type { project } from "@/types";

const Projects = () => {
  const [projects, SetProjects] = useState<project[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    AXIOSBASEURL.get("/projects")
      .then((data) => {
        setLoading(false);
        SetProjects(data.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  const sortedProjects = projects
    ?.filter((x) => x._id !== "65ca683faf25190326cb95d8")
    .slice()
    .sort((a, b) => {
      return (
        new Date(b.registered).getTime() - new Date(a.registered).getTime()
      );
    });

  return (
    <div className="my-10">
      <div className=" my-10 md:my-20 lg:my-30 ">
        <h1 className="my-5 text-center text-2xl md:text-3xl lg:text-4xl   text-green-700  uppercase">
          Clients Projects{" "}
        </h1>

        <div className="flex justify-around flex-wrap gap-5">
          {RunningProjects?.map((work, i) => (
            <WorkCard key={i} work={work} />
          ))}
        </div>
      </div>
      <h1 className="my-5 text-center text-2xl md:text-3xl lg:text-4xl   text-blue-700  uppercase">
        Personal Projects{" "}
      </h1>

      {loading && (
        <div className="w-full h-full flex items-center justify-center">
          <Loading />
        </div>
      )}

      {!loading && sortedProjects.length > 0 && (
        <div className="flex justify-around flex-wrap gap-5">
          {sortedProjects?.map((project) => (
            <Project key={project._id} project={project}></Project>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
