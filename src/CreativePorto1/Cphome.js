import React, { useRef, useEffect, useState } from "react";
import "./Cphome.css";
import gsap from "gsap";

const projects = [
  {
    name: "RHAPSODIE.CO",
    services: ["Web Development", "Web Development", "Web Development"],
    image: "./CpHome1/mockup.png",
  },
  {
    name: "DOUBLE S AGENCY",
    services: ["Web Development", "Web Development", "Web Development"],
    image: "./CpHome1/woman.webp",
  },
  {
    name: "NASI CIA",
    services: ["Web Development", "Web Development", "Web Development"],
    image: "./CpHome1/mockup.png",
  },
  {
    name: "PORTOFOLIO",
    services: ["Web Development", "Web Development", "Web Development"],
    image: "./CpHome1/woman.webp",
  },
];

const Cphome = () => {

  return (
    <div className="font-pt_serif">
      <div className="h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-700 via-neutral-800 to-black to-30% flex justify-center">
        <img className="" src="./CpHome1/woman.webp" alt="Creator Picture" />
        <div className="absolute bottom-24 flex flex-col leading-none">
          <h1 className="text-[10rem] text-[#FAFAFA] font-semibold tracking-wide [text-shadow:3px_3px_5px_var(--tw-shadow-color)] shadow-black">
            CREATI<span className="italic">V</span>E
          </h1>
          <h1 className="-mt-8 pl-28 text-[10rem] text-[#FAFAFA] font-semibold tracking-wide [text-shadow:3px_3px_5px_var(--tw-shadow-color)] shadow-black">
            DE<span className="italic">S</span>IGNER
          </h1>
        </div>
      </div>
      <div className="p-20 py-52 bg-black flex justify-center items-center">
        <div className="flex flex-col text-center text-white font-league text-[3.5rem]">
          <p className="pb-1">
            I AM A{" "}
            <span className="border rounded-full border-white font-pt_serif italic text-[3rem] tracking-tight px-8 hover:bg-white hover:text-black hover:border-black hover:px-10 ease-in-out duration-300">
              <i className="bi bi-brush"></i> Graphic Designer
            </span>{" "}
            
            AND{" "}
            <span className="border rounded-full border-white font-pt_serif italic text-[3rem] tracking-tight px-8 hover:bg-white hover:text-black hover:border-black hover:px-10 ease-in-out duration-300">
              Illustrator <i className="bi bi-pencil-square"></i>
            </span>
            , WHO HAS BEEN
          </p>
          <p className="pb-1">
            IN THIS INDUSTRY FOR{" "}
            <span className="border rounded-full border-white font-pt_serif italic text-[3rem] tracking-tight px-8 hover:bg-white hover:text-black hover:border-black hover:px-10 ease-in-out duration-300">
              Five Years <i className="bi bi-clock-history"></i>
            </span>
            . SPECIALIZED IN{" "}
            <span className="border rounded-full border-white font-pt_serif italic text-[3rem] tracking-tight px-8 hover:bg-white hover:text-black hover:border-black hover:px-10 ease-in-out duration-300">
              <i className="bi bi-easel"> Visual Content</i>
            </span>
          </p>
          <p className="pb-1">
            <span className="border rounded-full border-white font-pt_serif italic text-[3rem] tracking-tight px-8 hover:bg-white hover:text-black hover:border-black hover:px-10 ease-in-out duration-300">
              Branding <i className="bi bi-people"></i>
            </span>{" "}
            AND{" "}
            <span className="border rounded-full border-white font-pt_serif italic text-[3rem] tracking-tight px-8 hover:bg-white hover:text-black hover:border-black hover:px-10 ease-in-out duration-300">
              Illustrations <i className="bi bi-palette2"></i>
            </span>{" "}
            AT{" "}
            <span className="border rounded-full border-white font-pt_serif italic text-[3rem] tracking-tight px-8 hover:bg-white hover:text-black hover:border-black hover:px-10 ease-in-out duration-300">
              <i className="bi bi-buildings"></i> Small Companies
            </span>
          </p>
        </div>
      </div>

      <div className="py-20 px-36 bg-black">
        <div className="flex items-center overflow-hidden min-h-[100vh]">
          <ul className="lg:w-full md:w-[93%]">
            {projects.map((project, index) => (
              <li
                key={index}
                className="border-b-[.05rem] border-white z-10 w-full"
              >
                <div className="link">
                  <p className="italic py-4">{project.name}</p>
                  <ul className="text-[1.2rem] items-end list-none -space-y-9">
                    {project.services.map((service, idx) => (
                      <li key={idx} className="py-4">
                        {service}
                      </li>
                    ))}
                  </ul>
                  <div className={`hover-reveal image${index + 1}`}>
                    <img
                      className="hidden-img"
                      src={project.image}
                      alt={project.name}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="py-20 px-36 bg-black flex">
        <div className="w-full flex flex-col text-left text-white font-pt_serif text-[3.5rem]">
          <div ref={previewRef} className="preview">
            <div ref={previewImgRef} className="preview-img"></div>
          </div>
          <p className="italic pb-4">
            Projects{" "}
            <i className="text-[2rem] bi bi-arrow-down-right border border-white p-2 px-3 rounded-full"></i>
          </p>
          <hr className="w-full" />
          <div className="projects" ref={projectsRef}>
            <div className="project flex flex-row justify-between" id="header">
              <p className="italic py-4">RHAPSODIE.CO</p>
              <ul className="text-[1.2rem] items-end list-none -space-y-9">
                <li className="py-4">Web Development</li>
                <li className="py-4">Web Development</li>
                <li className="py-4">Web Development</li>
              </ul>
            </div>
            <hr className="w-full" />
            <div className="project flex flex-row justify-between" id="p1">
              <p className="italic py-4">RHAPSODIE.CO</p>
              <ul className="text-[1.2rem] items-end list-none -space-y-9">
                <li className="py-4">Web Development</li>
                <li className="py-4">Web Development</li>
                <li className="py-4">Web Development</li>
              </ul>
            </div>
            <hr className="w-full" />
            <div className="project flex flex-row justify-between" id="p2">
              <p className="italic py-4">RHAPSODIE.CO</p>
              <ul className="text-[1.2rem] items-end list-none -space-y-9">
                <li className="py-4">Web Development</li>
                <li className="py-4">Web Development</li>
                <li className="py-4">Web Development</li>
              </ul>
            </div>
            <hr className="w-full" />
            <div className="project flex flex-row justify-between" id="p3">
              <p className="italic py-4">RHAPSODIE.CO</p>
              <ul className="text-[1.2rem] items-end list-none -space-y-9">
                <li className="py-4">Web Development</li>
                <li className="py-4">Web Development</li>
                <li className="py-4">Web Development</li>
              </ul>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Cphome;
