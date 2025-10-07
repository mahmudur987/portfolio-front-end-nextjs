import Project from "./Project";
import type { IResponse, project } from "@/types";
import SingleProject from "@/components/Home/SingleProject";
import { base_url } from "@/axios/Axios";

const Projects = async () => {
  const res = await fetch(`${base_url}/project?limit=50`, {
    next: { tags: ["projects"] },
  });
  const result: IResponse<project[]> = (await res.json()) || [];

  const clientProject =
    (result.data &&
      result.data.length > 0 &&
      result.data.filter((x) => x.projectType === "Client")) ||
    [];
  const personalProjects =
    (result.data &&
      result.data.length > 0 &&
      result.data.filter((x) => x.projectType === "Personal")) ||
    [];
  return (
    <div className="my-10">
      <div className=" my-10 md:my-20 lg:my-30 ">
        <h1 className="my-5 text-center text-2xl md:text-3xl lg:text-4xl   text-green-700  uppercase">
          Clients Projects{" "}
        </h1>

        <div className="flex justify-around flex-wrap gap-5">
          {clientProject &&
            clientProject?.length > 0 &&
            clientProject?.map((work, i) => (
              <SingleProject key={i} work={work} />
            ))}

          {clientProject?.length === 0 && (
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
              No Projects Found
            </h2>
          )}
        </div>
      </div>
      <h1 className="my-5 text-center text-2xl md:text-3xl lg:text-4xl   text-blue-700  uppercase">
        Personal Projects{" "}
      </h1>

      <div className="flex justify-around flex-wrap gap-5">
        {personalProjects &&
          personalProjects?.length > 0 &&
          personalProjects?.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}

        {personalProjects?.length === 0 && (
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
            No Projects Found
          </h2>
        )}
      </div>
    </div>
  );
};

export default Projects;
