import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
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
      className="relative h-screen flex flex-col md:flex-row items-center max-w-4xl mx-auto justify-center px-4 text-center md:text-left"
    >
      <h3 className="absolute top-20 text-2xl tracking-[20px] text-gray-500 uppercase">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="h-56 w-56 md:mr-8 rounded-full object-cover mt-10 md:mt-0 md:w-64 md:h-96 md:rounded-lg"
        src={urlFor(pageInfo?.profilePic).url()}
      />
      <div>
        <h4 className="text-4xl font-semibold mt-8">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base mt-8">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
