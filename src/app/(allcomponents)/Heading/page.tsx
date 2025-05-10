import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="w-full py-12 md:pt-5 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute -top-4 right-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-8 right-1/6 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl"
          />
        </div>

        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-primary/80 mb-2"
          >
            Why us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            We help brands by offering them 360° CX outsourcing services and
            solutions.
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
