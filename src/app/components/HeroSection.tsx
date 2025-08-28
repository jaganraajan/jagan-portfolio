"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Page() {
    return (
        <section className="lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
              <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
              <div className="flex flex-col gap-4">
                <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                    Hello, I&apos;m Jagan{" "}
                </span>
                <span className="text-2xl sm:text-3xl lg:text-5xl mb-4">
                    <TypeAnimation
                    sequence={[
                        "a Full-stack AI Developer",
                        1000,
                        "a MLOps Python Developer",
                        1000,
                        "a React.js/Next.js Developer",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </span>
                </div>
              </h1>
              <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                I am a passionate Full-stack AI Software Developer specializing in LLM integration and retrieval optimization in modern, responsive, and user-friendly web applications. Let&apos;s create something amazing together!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
              <div className="relative md:ml-16 lg:ml-16 w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full bg-gray-700 flex items-center justify-center">
                <Image
                  src="/images/hero-image.png"
                  alt="hero image"
                  className="rounded-full"
                  fill
                />
              </div>
            </motion.div>
          </div>
        </section>
      );
}