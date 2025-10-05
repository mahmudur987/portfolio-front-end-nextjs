"use client";

import AOS from "aos";
import "aos/dist/aos.css";
const EducationPage = () => {
  AOS.init();
  const educationData = [
    {
      degree: "Bachelor of Science (BSc)",
      institution: "Gov Titumir College",
      year: "2013 - 2018",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Gov Science College",
      year: "2011 - 2012",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Darunnajat Siddiquia Kamil Madrasah",
      year: "2009 - 2010",
    },
  ];

  return (
    <div className="container mx-auto py-8 w-full flex flex-col gap-10">
      <h1 className="text-5xl text-center  mb-4">Education</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {educationData.map((education) => (
          <div
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            key={education.degree}
            className="bg-white shadow-md rounded-md p-4"
          >
            <h2 className="text-2xl ">{education.degree}</h2>
            <p className="text-gray-600 mt-2 text-lg">
              {education.institution}
            </p>
            <p className="text-gray-600 mt-2 text-lg">{education.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
