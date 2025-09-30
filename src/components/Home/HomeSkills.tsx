"use client";
import "aos/dist/aos.css";
import Aos from "aos";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";

import { Button } from "../ui/button";
import { useEffect } from "react";
import Link from "next/link";
const HomeSkills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const skills = [
    { name: "HTML", progress: 90 },
    { name: "CSS", progress: 85 },
    { name: "JavaScript", progress: 80 },
    { name: "React", progress: 85 },
    { name: "Node.js", progress: 75 },
    { name: "Express.js", progress: 70 },
    { name: "Next.js", progress: 80 },
    { name: "TypeScript", progress: 50 },
    { name: "Redux", progress: 50 },
    { name: "Graph Ql", progress: 50 },
    { name: "Tailwin CSS", progress: 80 },
    { name: "Bootstrap", progress: 70 },
    { name: "Styled Component", progress: 70 },
    { name: "Vue js", progress: 50 },
    { name: "Nest js", progress: 50 },
    { name: "Mongodb", progress: 50 },
    { name: "Prisma", progress: 50 },
  ];

  return (
    <div className="container mx-auto py-8  w-full flex flex-col gap-5">
      <h1 className="text-5xl text-center font-bold uppercase  mb-4">
        {" "}
        Skills
      </h1>
      <div className="flex justify-end max-w-6xl mx-auto w-full font-bold ">
        <Button variant={"secondary"}>
          <Link href={"/resume"}>Resume</Link>
        </Button>
      </div>
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            key={skill.name}
            className="bg-white shadow-md rounded-md p-4"
          >
            <Badge key={skill.name}>{skill.name}</Badge>

            <div className="h-3 bg-gray-200 rounded overflow-hidden mt-3">
              <Progress value={skill.progress} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSkills;
