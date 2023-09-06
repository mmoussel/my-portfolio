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
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out a
        solution to a problem. My core stack is{" "}
        <span className="font-medium">React, Next.js, React Native</span>. I am
        also familiar with NodeJs and MySql. I am always looking to learn new
        technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games 🎮, watching movies 📺,
        <br />
        watching football matches ⚽, and playing it also💪. I also enjoy{" "}
        <span className="font-medium">reading new books 📚</span>.
      </p>
    </motion.section>
  );
}
