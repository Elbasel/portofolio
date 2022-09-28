import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="w-[100%] md:w-[70%] snap-center bg-[#292929] h-full flex-shrink-0 flex flex-col items-center justify-center xl:p-20">
      <motion.img
        initial={{
          y: -130,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: -35,
        }}
        viewport={{
          once: true,
        }}
        // md:mb-2 mb-8
        className="w-32 h-32 rounded-full "
        src={urlFor(experience?.companyImage).url()}
      />
      <div className="">
        <div className="ml-1 md:space-y-2 space-y-4 px-4">
          <h4 className="text-2xl font-light">{experience?.jobTitle}</h4>
          <p className="font-bold text-2xl">{experience?.company}</p>
        </div>
        <div className="flex md:my-2 my-4 px-4 space-x-1">
          {experience.technologies.map((t) => (
            <img
              key={t._id}
              className="h-10 w-10 rounded-full object-cover"
              src={urlFor(t.image).url()}
            />
          ))}
        </div>
        <p className="ml-2 uppercase text-gray-300 md:my-2 my-4">
          {new Date(experience.dateStarted).toDateString()}
          {" - "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="ml-5 list-disc text-lg md:space-y-1 space-y-1">
          {experience.points.map((p, index) => (
            <li key={index}>{p}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
