const ExperiencePage = () => {
  const experiences = [
    {
      company: "Across the Globe",
      position: "Full-Stack Developer",
      duration: "January 2024 - Present",
      description:
        "Worked on developing full-stack web applications using the MERN stack. Collaborated with cross-functional teams to deliver high-quality and scalable solutions.",
    },
    {
      company: "Isbah It ",
      position: "Full stack Developer",
      duration: "September 2019 - Present",
      description:
        "Focused on building responsive and user-friendly interfaces using HTML, CSS, and JavaScript. Implemented client-side functionalities and worked closely with designers to bring concepts to life.",
    },
    {
      company: " Paradox Alpha",
      position: "Web Developer Intern",
      duration: "January 2023 - August 2023",
      description:
        "Gained practical experience in web development by assisting senior developers in various projects. Developed and maintained websites using HTML, CSS, and JavaScript.",
    },
  ];

  return (
    <div className="container mx-auto py-8  w-full flex flex-col gap-10">
      <h1 className="text-3xl md:text-5xl text-center   mb-4">Experience</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {experiences.map((experience) => (
          <div
            key={experience.company}
            className="bg-white shadow-md rounded-md p-4"
          >
            <h2 className="text-2xl ">{experience.position}</h2>
            <p className="text-gray-600 mt-2 text-lg">{experience.company}</p>
            <p className="text-gray-600 mt-2 text-lg    ">
              {experience.duration}
            </p>
            <p className="text-gray-700 mt-4 text-lg">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
