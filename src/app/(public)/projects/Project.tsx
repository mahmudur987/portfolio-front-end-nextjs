import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { project } from "@/types";

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
        <Link href={`/projects/${_id}`}>
          <Button variant="outline">Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Project;
