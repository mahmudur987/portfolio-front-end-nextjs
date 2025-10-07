"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
const MyAbility = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const projects: {
    title: string;
    description: string;
    image: string;
  }[] = [
    {
      title: "Full-Stack Application",
      description:
        "Developed a full-stack application using MERN stack (MongoDB, Express.js, React, Node.js).",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
    },
    {
      title: "Front-End Development",
      description:
        "Built responsive and interactive user interfaces using HTML, CSS, JavaScript and React.",
      image:
        "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "Back-End Development",
      description:
        "Created server-side logic and API endpoints using Garaph Ql, Node.js and Express.js.",
      image:
        "https://plus.unsplash.com/premium_photo-1685086785013-acc71c40e5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      title: "Responsive Website",
      description:
        "Designed and developed a fully responsive website using modern web technologies.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "Figma to HTML",
      description:
        "Converted Figma designs into pixel-perfect and responsive HTML/CSS templates.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      title: "PSD to HTML",
      description:
        "Transformed PSD (Photoshop) designs into functional and visually appealing HTML/CSS templates.",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
  ];

  return (
    <div className="container mx-auto py-8 w-full flex flex-col gap-10">
      <h1 className="text-3xl md:text-5xl text-center   mb-4">
        What I Can Do !{" "}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            key={project.title}
            className="bg-white shadow-md rounded-md p-4"
          >
            <Image
              width={130}
              height={130}
              src={project.image}
              alt={project.title}
              className="w-32 h-32 mb-4 rounded-lg"
            />
            <h2 className="text-2xl   mb-2">{project.title}</h2>
            <p className="text-gray-600 text-lg">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAbility;
