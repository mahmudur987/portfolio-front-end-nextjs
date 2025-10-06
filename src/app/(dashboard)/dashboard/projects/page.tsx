import type { IResponse, project } from "@/types";
import { base_url } from "@/axios/Axios";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
const Project = ({ project }: { project: project }) => {
  const {
    projectName,
    description: about,
    id: _id,
    picture,
    technologies,
  } = project;

  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-md transition hover:shadow-lg">
      <CardHeader className="p-0">
        <Image
          src={picture}
          alt={projectName}
          width={500}
          height={300}
          className="h-60 w-full object-cover rounded-t-lg"
        />
      </CardHeader>

      <CardContent className="p-4 space-y-3 flex-1">
        <h2 className="text-xl font-semibold text-blue-700 uppercase">
          {projectName}
        </h2>
        <p className="text-sm text-gray-600">{about}</p>

        <div>
          <h4 className="font-medium text-gray-800 mb-1">Technologies:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {technologies?.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Link href={`/dashboard/projects/${_id}`}>
          <Button variant="outline">update</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const Projects = async () => {
  const res = await fetch(`${base_url}/project?limit=50`, {
    next: { tags: ["projects"] },
  });
  const result: IResponse<project[]> = (await res.json()) || [];
  console.log(result);

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
