import type { RunningProject } from "@/types";
import { FaStar } from "react-icons/fa";

const WorkCard = ({ work }: { work: RunningProject }) => {
  const { picture, projectName, about, technologies, features, liveSite } =
    work;

  return (
    <div className="card card-compact w-full max-w-sm p-2 bg-base-100 shadow-xl">
      <figure>
        <img
          className=" h-80 w-full m-3 rounded-lg"
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body justify-between text-left">
        <div>
          <h2 className="card-title uppercase   "> {projectName} </h2>
          <p className=" font-mono"> {about} </p>
        </div>
        {/* technologies */}
        <div className="my-3">
          Technologies:
          <p className="grid md:grid-cols-2">
            {" "}
            {technologies?.map((x, i) => (
              <p className=" flex flex-wrap" key={i}>
                <span className="  ">{x}</span>
              </p>
            ))}{" "}
          </p>
        </div>

        {/* features */}

        <div className="my-3">
          Features :
          <ul className="flex flex-col gap-3">
            {" "}
            {features.map((x, i) => (
              <li className="   flex gap-2  " key={i}>
                <FaStar /> {x}
              </li>
            ))}{" "}
          </ul>
        </div>

        <div className="card-actions justify-end">
          {liveSite && (
            <a href={liveSite} target="_blank" rel="noreferrer">
              {" "}
              <button className="btn btn-btn-info btn-sm">Live</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
