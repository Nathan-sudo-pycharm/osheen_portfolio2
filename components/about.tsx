"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Am puruing my degree in{" "}
        <span className="font-medium">Bachelor of Computer Applications</span>,
        I decided to pursue my passion for programming. I am learning{" "}
        <span className="font-medium">Data Science</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My faviorite
        language is <span className="font-medium">Python</span>. I am currently
        looking for an <span className="font-medium">internship</span> as a data
        scientist.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
