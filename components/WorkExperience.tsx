import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import { Experience } from "../typings";

type Props = { experiences: Experience[] };

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="relative h-screen flex items-center justify-center"
    >
      <h3 className="absolute top-20 text-2xl tracking-[15px] text-gray-500 uppercase ">
        Experience
      </h3>
      <div className="flex gap-5 overflow-x-scroll p-4 h-[79%]  md:h-[80%] mt-12 md:mt-24 w-full snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences.map((e) => (
          <ExperienceCard key={e._id} experience={e} />
        ))}
      </div>
    </motion.div>
  );
}
