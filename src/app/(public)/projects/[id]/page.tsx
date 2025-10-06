import { base_url } from "@/axios/Axios";
import type { project } from "@/types";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export const revalidate = 60; // optional: ISR support (refresh every 60s)

export default async function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const res = await fetch(`${base_url}/project/${id}`, {
    next: { tags: ["projects"] },
  });

  const result = await res.json();
  const project = result.data as project;

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-muted-foreground text-lg">Project not found</p>
      </div>
    );
  }

  const {
    projectName,
    picture,
    description,
    endDate: registered,
    technologies,
    features,
    git_frontend,
    liveSite,
    git_server,
  } = project;

  // 🧠 Fix: Convert string to Date safely
  const date = new Date(registered);
  const formattedDate = isNaN(date.getTime())
    ? "Unknown date"
    : date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

  return (
    <div className="container mx-auto py-10 px-4">
      <Card className="overflow-hidden shadow-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{projectName}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Thumbnail */}
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src={picture}
              alt={projectName}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg leading-relaxed">
            {description}
          </p>

          {/* Features */}
          {features && features.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <Separator />

          {/* GitHub / Live Links */}
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            {git_frontend && (
              <Button asChild variant="outline">
                <a href={git_frontend} target="_blank" rel="noreferrer">
                  Frontend Repo
                </a>
              </Button>
            )}
            {git_server && (
              <Button asChild variant="outline">
                <a href={git_server} target="_blank" rel="noreferrer">
                  Backend Repo
                </a>
              </Button>
            )}
            {liveSite && (
              <Button asChild variant="default">
                <a href={liveSite} target="_blank" rel="noreferrer">
                  Visit Live Site
                </a>
              </Button>
            )}
          </div>

          {/* Date */}
          <p className="text-sm text-muted-foreground">
            Completed on: {formattedDate}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
