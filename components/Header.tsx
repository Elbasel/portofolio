import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    //building the header: overflow-hidden : to prevent page from being padded left and right on mobile on the start of animation
    <header className="sticky top-0 flex justify-between max-w-7xl mx-auto z-20 p-5 items-start xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="grey"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <Link href="#contact">
          <div>
            <SocialIcon
              network="email"
              className="cursor-pointer"
              fgColor="grey"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get In Touch
            </p>
          </div>
        </Link>
      </motion.div>
    </header>
  );
}
