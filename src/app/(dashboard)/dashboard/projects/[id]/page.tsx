import { base_url } from "@/axios/Axios";
import type { project } from "@/types";
import ProjectForm from "@/components/dashboard/update-project-form";

export default async function UpdateProject({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

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

  return <ProjectForm project={project} />;
}
