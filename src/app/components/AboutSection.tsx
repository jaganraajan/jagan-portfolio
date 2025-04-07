"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabData {
    title: string;
    id: string;
    content: React.ReactNode;
}

  
const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>React.js</li>
        <li>PostgreSQL</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Go</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "workexperience",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Developer at HMH</li>
        <li>Software Engineer at National Instruments</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Masters in Applied Computer Science at Concordia University</li>
        <li>Bachelors in Electronics and Communication Engineering at MSRIT</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpeg" alt="About me illustration" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Fullstack Web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, TypeScript, React.js, Next.js, Node.js, PostgreSQL,
            HTML, CSS, and Git. I am excited to work with others to create amazing applications and I am always
            looking to expand my skill set.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("workexperience")}
              active={tab === "workexperience"}
            >
              {" "}
              Work Experience{" "}
            </TabButton>
          </div>
          {isPending ? (
            <p className="text-gray-400">Loading...</p> // Show loading indicator
          ) : (
            <div>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
          )}
        </div>
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">My Work Style</h3>
        <Image
          src="/images/work-style.png"
          alt="VS Code and Copilot in action"
          width={1920}
          height={1080}
          className="rounded-lg mx-auto"
        />
      </div>
    </section>
  );
};

export default AboutSection;