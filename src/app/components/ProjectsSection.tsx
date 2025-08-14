"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Favourite Stocks Dashboard",
        description: "Built a Fullstack dashboard on Vercel using Next.js, providing real-time data from Polygon.io APIs. Implemented dynamic routing for detailed company pages, persistent data with Neon's serverless Postgres, and automated nightly data updates using Vercel's cron jobs.",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/jaganraajan/fav-stocks-dashboard",
        previewUrl: "https://fav-stocks-dashboard.vercel.app/", 
    },
    {
      id: 4,
      title: "Gemini AI Chatbot",
      description: "A simplified AI project built with Next.js. This side project helped me to quickly experiment with AI integrations and learn the basics of building AI-powered applications. Built with Next.js, AI SDK, Tailwind CSS, TypeScript, and shadcn, it provides a minimalistic foundation for creating AI chatbots, focusing on simplicity and speed.",
      image: "/images/projects/4.png",
      tag: ["All", "AI", "Web"],
      gitUrl: "https://github.com/jaganraajan/ai-lite-nextjs",
      previewUrl: "https://chatbot-lite-nextjs.vercel.app/",
    },
    {
      id: 5,
      title: "Projects Board",
      description:
        "A collaborative project management board built with Next.js and TypeScript. This tool allows teams to organize, track, and manage tasks efficiently with a modern UI and real-time updates. Features include drag-and-drop task management, user authentication, and integration with popular developer tools.",
      image: "/images/projects/5.png",
      tag: ["All", "Web", "Management"],
      gitUrl: "https://github.com/jaganraajan/projects-board",
      previewUrl: "https://projects-board-zeta.vercel.app/",
    },
    {
      id: 6,
      title: "Projects Board Tenant Server",
      description:
        "A multi-tenant backend server for the Projects Board application. Built with Ruby on Rails, it provides secure APIs, tenant isolation, and scalable architecture for managing multiple organizations and users. Designed for reliability and easy integration with the Projects Board frontend.",
      image: "/images/projects/5.png",
      tag: ["All", "Backend", "API"],
      gitUrl: "https://github.com/jaganraajan/projects-board-tenant-server",
      previewUrl: "https://projects-board-zeta.vercel.app/",
    },
    {
      id: 7,
      title: "Projects Board App",
      description: "A mobile-optimized Kanban-style project management board built with Expo React Native. Features include touch-friendly task management with To Do, In Progress, and Done columns; secure JWT authentication with multi-tenant support; create, edit, delete, and move tasks; native iOS design with rounded corners and smooth animations; offline-ready with AsyncStorage; task priority and due date management.",
image: "/images/projects/6.png",
      tag: ["All", "Mobile", "Frontend"],
      gitUrl: "https://github.com/jaganraajan/projects-board-app",
      previewUrl: "https://github.com/jaganraajan/projects-board-app",
    },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mt-16">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;