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
                <span className="text-2xl sm:text-3xl lg:text-5xl">
                    <TypeAnimation
                    sequence={[
                        "a Full Stack Developer",
                        1000,
                        "a Go/Node.js Backend Developer",
                        1000,
                        "a React.js/Next.js UI Developer",
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
                I am a passionate Software Developer specializing in building modern, responsive, and user-friendly web applications. Let&apos;s create something amazing together!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
              <div className="rounded-full bg-[#999999] w-[250px] h-[250px] lg:w-[320px] lg:h-[320px] relative">
                <Image
                  src="/images/hero-image.png"
                  alt="hero image"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                  width={300}
                  height={300}
                />
              </div>
            </motion.div>
          </div>
        </section>
      );
}