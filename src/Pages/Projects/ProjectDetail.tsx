import type { project } from "@/types";
import { useLoaderData } from "react-router";

const ProjectDetail = () => {
  const project = useLoaderData() as project;
  const {
    projectName,
    picture,

    about,
    registered,
    technologies,
    features,
    clientSite,
    liveSite,
    serverSite,
  } = project;
  console.log(project);
  return (
    <div className="card w-full  shadow-xl ">
      <figure>
        <img
          className=" max-w-2xl w-full min-h-[500px]"
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title text-2xl   ">{projectName}</h2>
        <p className=" ">{about}</p>
        <p className=" ">{project.description}</p>

        <div className=" ">
          <p>Project Features</p>
          {features?.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </div>

        <div className="font-mono ">
          <p>Used Technology</p>
          {technologies?.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </div>
        <div className="font-mono flex gap-5 justify-start items-center  max-w-xs">
          <button>GitHub :</button>
          <p className="flex-grow flex justify-between ">
            <a
              href={clientSite}
              rel="noreferrer"
              target="_blank"
              className="text-blue-500"
            >
              Front-end
            </a>
            <a
              href={serverSite}
              rel="noreferrer"
              target="_blank"
              className={serverSite ? "text-blue-500" : "hidden"}
            >
              {" "}
              Backend
            </a>
          </p>
        </div>
        <p className=" font-mono"> complete on {registered.toISOString()}</p>
        <div className="card-actions justify-end   text-2xl">
          <a
            href={liveSite}
            rel="noreferrer"
            target="_blank"
            className="btn btn-info btn-sm"
          >
            Live site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
