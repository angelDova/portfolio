import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../images/profile.jpg";
import ReactImage from "../images/react.png";
import { FaReact } from "react-icons/fa";
import Image from "next/image";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={ProfileImage}
          alt="profilepic"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Job Title</h4>
        <p className="font-bold text-2xl mt-1">Company</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src={ProfileImage}
            alt="profilepic"
          />
          <FaReact className="h-10 w-10 rounded-full" />
          <FaReact className="h-10 w-10 rounded-full" />
          <FaReact className="h-10 w-10 rounded-full" />

          {/* Tech Used
          Tech Used
          Tech Used */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started Work... -Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
