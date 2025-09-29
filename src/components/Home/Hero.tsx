"use client";

import img1 from "@/assets/PROFILE.1.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import TextAnimation from "../animation/AnimatedName";
import Aos from "aos";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";
interface Hero1Props {
  image?: {
    src: StaticImageData;
    alt: string;
  };
}

const Hero = ({
  image = {
    src: img1,
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) => {
  useEffect(() => {
    Aos.init();
  }, []);

  Aos.init();

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="hero h-[100%] rounded-3xl"
    >
      <div className="hero-overlay bg-opacity-60"></div>

      <section className="py-32">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="hero-content text-center ">
              <div className="max-w-5xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold  mb-5">
                  MD MAHMUDUR RAHMAN
                </h1>

                <div className="w-full h-16 flex justify-center items-center">
                  <TextAnimation />
                </div>
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/mahmudur.rahman.98478/"
                  target={"_blank"}
                >
                  <button className="text-3xl m-5">
                    {" "}
                    <FaFacebook />
                  </button>
                </a>
                <a
                  rel="noreferrer"
                  href="https://github.com/mahmudur987"
                  target={"_blank"}
                >
                  <button className="text-3xl m-5">
                    {" "}
                    <FaGithub />
                  </button>
                </a>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://www.linkedin.com/in/md-mahmudur-rahman-466598259/"
                >
                  {" "}
                  <button className="text-3xl m-5">
                    <FaLinkedin />
                  </button>
                </a>
              </div>
            </div>

            {/* Right - Animated Photo Frame */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-48 h-48 md:w-[500px] md:h-[500px] rounded-full overflow-hidden"
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-b-blue-500 border-r-red-500 border-t-yellow-500 border-l-green-500"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              />

              {/* Image */}

              <figure className="w-full flex justify-start">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="h-[600px] w-auto rounded-full object-right-top "
                  width={600}
                  height={600}
                />
              </figure>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
