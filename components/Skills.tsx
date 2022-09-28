import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";

type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
  const skillsHalf = Math.round(skills.length / 2);
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
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] min-h-screen justify-center mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-20 uppercase text-2xl tracking-[20px] text-gray-500 ">
        Skills
      </h3>

      <h3 className="absolute top-36 text-gray-500 text-sm tracking-[2px] md:tracking-[4px] min-w-[500px]">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 md:mt-40">
        {skills.map((s, i) => (
          <Skill key={s._id} skill={s} slideLeft={i > skillsHalf} />
        ))}
      </div>
    </motion.div>
  );
}
