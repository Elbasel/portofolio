import React, { useState } from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";
type Props = { skill: SkillType; slideLeft?: boolean };

export default function Skill({ skill, slideLeft }: Props) {
  const [inView, setInView] = useState(false);

  return (
    <motion.div
      // Intersction observer api prevents the elements from "being in view"
      // @ts-ignore
      whileInView={() => {
        setInView(true);
        return {};
      }}
      className="group relative flex md:cursor-pointer select-none "
    >
      <motion.img
        initial={{
          opacity: 0,
          x: slideLeft ? -200 : 200,
        }}
        animate={
          inView && {
            opacity: 1,
            x: 0,
          }
        }
        transition={{
          duration: 1,
        }}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-18 md:h-18 xl:w-24 xl:h-24 group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill?.image).url()}
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-full w-full  rounded-full">
        <div className="flex items-center justify-center h-full ">
          <p className="text-xl xl:text-3xl font-bold text-black opacity-100  select-none ">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </motion.div>
  );
}
