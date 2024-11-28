import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sonbol from "@/public/sonbol.png";
import finflx from "@/public/finflx.png";
import winfi from "@/public/winfi.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer",
    location: "@Barakah, Saudi",
    companySite:"https://www.linkedin.com/company/barakahapp/mycompany/",
    description: [
      'Leading the development and maintenance of innovative mobile applications using React Native and Expo.',
      'Ensured seamless functionality and performance of a released version of an e-commerce mobile app.',
      'Optimized app performance and user engagement by implementing analytics tools like Mixpanel and Sentry, supporting data-driven decisions for marketing and audience targeting.'
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2024 - present",
  },
  {
    title: "Frontend & Mobile Apps Software Engineer",
    location: "@FinFlx, Dubai",
    companySite:"https://www.linkedin.com/company/finflx/posts/?feedView=all",
    description: [
      `Developed and published a React-native app that has been downloaded over 1000 times, allowing employees to manage their gratuity and create savings and investment accounts.`,
      `Maintained a released version of a dashboard built with NextJs that helps companies to manage their employee's gratuity and other HR features.`,
      `Leveraged analytics solutions like Segment, Log Rocket, Heep, and Sentry to enhance app performance and empower the marketing team in audience targeting.`,
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2022 - Sep 2024",
  },
  {
    title: "Frontend Developer | Mobile Apps Developer",
    location: "@Valoro, Cairo",
    companySite:"https://www.linkedin.com/company/valoro-xyz/posts/?feedView=all",
    description: [
      `Managed full-cycle design tasks, handling all phases from conception to completion while maintaining guidelines throughout.`,
      `Utilized React, React-native, NextJs, TypeScript, and JavaScript to develop new applications.`,
      `Translated basic design plans into full iOS and Android app frameworks, delegating project components to appropriate team members and ensuring on-time delivery.`,
      `Used NextJS and Web3.js to interact with Blockchain`,
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2020 – Oct 2022",
  },
  {
    title: "Frontend Developer",
    location: "@WinFi, Cairo",
    companySite:"https://www.linkedin.com/company/winfi/posts/?feedView=all",
    description: [
      `Provided a front-end web application using React, TypeScript, React Query, and other editing software.`,
      `Reviewed and tested customer-facing prototypes before deployment, applying best practice diagnostic techniques to verify usability and accessibility.`,
      `Collaborated with stakeholders during development processes to confirm creative proposals and design best practices, resulting in a better user experience and higher satisfaction rates.`,
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2022 – Jun 2022",
  },
] as const;

export const projectsData = [
  {
    title: "FinFlx App",
    description: "financial app",
    tags: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "Context API",
      "React Query",
      "Online Banking",
      "SumSub",
      "LogRocket",
    ],
    imageUrl: finflx,
  },
  {
    title: "Sonbol",
    description: "e-commerce app",
    tags: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "Context API",
      "React Query",
      "ApplePay",
      "GraphQl",
    ],
    imageUrl: sonbol,
  },
  {
    title: "WinFi",
    description: "WiFi management platform",
    tags: ["React", "TypeScript", "React Router Dom", "MUI", "React Query"],
    imageUrl: winfi,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "X Code",
  "Android Studio",
  "Mobile Apps Automated Deployment",
  "Jest",
  "Git",
  "Tailwind",
  "MUI",
  "Redux",
  "Contexts API",
  "Node.js",
  "Express",
  "MongoDB",
  "GraphQL",
  "MySQL",
] as const;
