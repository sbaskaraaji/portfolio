"use client";

import { FaUbuntu, FaGit, FaReact, FaDocker, FaNode } from "react-icons/fa";

import { SiVirtualbox, SiVmware, SiCisco, SiAnsible } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description: "Get to know me better",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sukma Aji Baskara",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 8956 0405 1378",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian",
    },
    {
      fieldName: "Email",
      fieldValue: "ajikbaskara@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Indonesia, English, Java",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/Me-too.png",
  title: "My Experience",
  description: "I have related experience on infosec field as internship.",
  items: [
    {
      company: "PT Korelasi Persada Indonesia",
      position: "Network Security Engineer",
      duration: "September 2020 - February 2021",
    },
  ],
};

// education data
const education = {
  icon: "/assets/Me-too.png",
  title: "My Education",
  description:
    "With study focus computer networking, I believe in my knowlede to work further",
  items: [
    {
      institution: "Satya Wacana Christian University",
      degree: "Informatics Engineering",
      durations: "August 2017 - July 2024",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "I have been working with some technologies with more than 60% confidence hands-on of all of them, but web development technologies",
  skillList: [
    {
      icon: <FaUbuntu />,
      name: "ubuntu",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
    {
      icon: <FaGit />,
      name: "git",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNode />,
      name: "node.js",
    },
    {
      icon: <SiCisco />,
      name: "cisco routing & switching",
    },
    {
      icon: <SiVirtualbox />,
      name: "virtualbox",
    },
    {
      icon: <SiVmware />,
      name: "vmware",
    },
    {
      icon: <SiAnsible />,
      name: "ansible",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-whites/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul
                    className="grid grid-cols-1
                   lg:grid-cols-1 gap-[30px]"
                  >
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#243642] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-whites/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-whites/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul
                    className="grid grid-cols-1
                   lg:grid-cols-1 gap-[30px]"
                  >
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#243642] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                        >
                          <span className="text-accent">{item.durations}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-whites/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-whites/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[120px] bg-[#243642] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-whites/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-whites/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
