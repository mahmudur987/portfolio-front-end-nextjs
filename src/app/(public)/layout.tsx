"use client";

import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import { motion } from "framer-motion";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <motion.section
        className="relative "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Gradient Background */}
        <div className="   absolute inset-0 bg-gradient-to-r from-cyan-500 via-green-500 to-sky-500 opacity-20 blur-3xl rounded-3xl" />

        <div className="min-h-screen container mx-auto flex flex-col justify-between items-center ">
          <div className="w-full h-20 fixed top-0 left-0 z-50">
            <Navbar />
          </div>

          <section className="w-full h-full grow mt-20 relative">
            {children}
          </section>

          <Footer />
        </div>
      </motion.section>
    </main>
  );
};

export default Main;
