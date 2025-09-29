import React from "react";
import aboutData from "@/constant/AboutData";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";

const AboutSectionItems: React.FC = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: "easeInOut",
          staggerChildren: 0.2,
        }}
        viewport={{ once: false, amount: 0.2 }} // 👈 Animate every scroll
        className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2"
      >
        {aboutData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }} // 👈 Animate every scroll
            className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl hover:scale-105 hover:border-green-500 border"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-green-500">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AboutSectionItems;
