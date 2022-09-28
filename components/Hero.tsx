import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, the names' ${pageInfo?.name}`,
      "a Guy who lives to code",
      "I eat <HTML /> and {CSS} for lunch",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[10px] pb-2">
          {pageInfo?.role}
        </h2>
        <h1 className="text-4xl h-24 lg:text-6xl font-semibold  px-10 mt-4">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="mt-8 ">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
