import React from "react";
import { motion } from "framer-motion";
import ProfileImage2 from "../images/profile2.jpg";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
      >
        <Image
          className="relative h-64 w-64 mx-auto object-cover mb-20"
          src={ProfileImage2}
          alt="profilepic2"
        />
      </motion.div>
    </div>
  );
}
