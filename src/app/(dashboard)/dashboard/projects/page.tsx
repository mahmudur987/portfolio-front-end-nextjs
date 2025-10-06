import { base_url } from "@/axios/Axios";
import Project from "@/components/dashboard/single-project";
import { IResponse, project } from "@/types";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const Projects = async () => {
  const res = await fetch(`${base_url}/project?limit=50`, {
    next: { tags: ["projects"] },
  });
  const result: IResponse<project[]> = (await res.json()) || [];

  const personalProjects = result.data;
  return (
    <div className="my-10">
      <div className="flex justify-end w-full">
        <Link
          href="/dashboard/projects/create-project"
          className="text-blue-600 hover:underline flex gap-2 items-center"
        >
          <FaPlus /> Add New Project
        </Link>
      </div>
      <h1 className="my-5 text-center text-2xl md:text-3xl lg:text-4xl   text-blue-700  uppercase">
        Projects{" "}
      </h1>

      <div className="flex justify-around flex-wrap gap-5">
        {personalProjects?.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
