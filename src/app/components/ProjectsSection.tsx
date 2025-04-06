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
        id: 2,
        title: "React.js/Next.js Portfolio Website",
        description: "Designed and developed a personal portfolio website using React.js and Next.js. The website is fully responsive, optimized for performance, and deployed on Vercel. It showcases projects, skills, and contact information with a clean and modern UI.",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/jaganraajan/jagan-portfolio",
        previewUrl: "https://jagan-raajan.vercel.app/",
    },
    {
        id: 3,
        title: "Shopify E-commerce Application",
        description: "Developed a responsive Shopify E-commerce application using Liquid and Shopify's Storefront API. This project showcases a seamless integration of Shopify's backend with a custom frontend with HTML, CSS, and vanilla JavaScript, allowing users to browse products, add them to the cart, and checkout.",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/jaganraajan/Jagadeeshwaran-RajaUmashankar/",
        previewUrl: "https://github.com/jaganraajan/Jagadeeshwaran-RajaUmashankar/",
    }
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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