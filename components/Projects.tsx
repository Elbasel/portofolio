import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <div className="relative h-screen flex items-center justify-evenly overflow-hidden text-left md:flex-row max-w-full mx-auto z-0">
      <h3 className="absolute top-20 uppercase text-xl tracking-[20px] text-gray-500 ">
        Projects
      </h3>

      <div className="flex overflow-x-scroll  overflow-y-hidden snap-x p-5 snap-mandatory h-[86%] sm:h-[99%] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 z-20 snap-center flex justify-center flex-col items-center space-y-5 py-20 px-5 md:p-44  "
          >
            <motion.img
              initial={{
                y: -200,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{
                once: true,
              }}
              className="w-72"
              src={urlFor(project?.image).url()}
            />

            <div className="space-y-10 px-0 max-w-6xl">
              <h4 className="text-3xl xl:text-4xl font-semibold text-center ">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects?.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center justify-center space-x-2">
                {project?.technologies.map((t) => (
                  <img
                    className="h-10 w-10"
                    key={t._id}
                    src={urlFor(t.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#F7AB0A]/10 absolute top-[30%] left-0 w-full h-[270px] -skew-y-12" />
    </div>
  );
}
