import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { RunningProject } from "@/types";
import Image from "next/image";

const SingleProject = ({ work }: { work: RunningProject }) => {
  const { picture, projectName, about, technologies, liveSite } = work;

  return (
    <div className=" flex justify-center items-center">
      <Card className="w-full max-w-sm  shadow-md rounded-2xl flex flex-col justify-between h-[500px] ">
        {/* Image */}
        <div className="w-full  overflow-hidden">
          <Image
            width={500}
            height={500}
            src={picture}
            alt={projectName}
            className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div>
          {/* Content */}
          <CardHeader>
            <CardTitle className="uppercase text-xl font-bold">
              {projectName}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* About */}
            <p className="text-sm text-muted-foreground font-mono">{about}</p>
          </CardContent>
        </div>
        <CardContent className="space-y-4">
          {/* Technologies */}
          <div>
            <p className="font-semibold mb-1">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              {technologies?.slice(0, 2).map((tech, i) => (
                <Badge key={i} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="card-actions w-full flex justify-end">
            {liveSite && (
              <a href={liveSite} target="_blank" rel="noreferrer">
                {" "}
                <button className="btn btn-btn-info btn-sm">Live</button>
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleProject;
