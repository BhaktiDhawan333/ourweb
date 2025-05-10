"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { DivideIcon as LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  index: number;
}

const gradients = [
  "from-blue-500/10 to-blue-600/10",
  "from-emerald-500/10 to-emerald-600/10",
  "from-orange-500/10 to-orange-600/10",
  "from-pink-500/10 to-pink-600/10",
];

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  buttonText,
  index,
}: ServiceCardProps) => {
  return (
    <motion.div
      className={`group relative flex flex-col p-5 rounded-lg bg-gradient-to-br ${gradients[index]} border border-gray-200/20 hover:border-gray-300/30 transition-all duration-300`}
      whileHover={{
        y: -2,
        scale: 1.01,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/80 mb-4 group-hover:scale-105 transition-transform duration-300">
        <Icon className="w-6 h-6 text-primary/80" strokeWidth={1.5} />
      </div>

      <h3 className="text-lg font-semibold tracking-tight mb-2 text-foreground/90">
        {title}
      </h3>

      <p className="text-sm text-foreground/70 mb-4 flex-grow">{description}</p>

      <Button
        variant="ghost"
        className="w-fit text-sm hover:text-primary transition-colors duration-300"
      >
        {buttonText}
        <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          →
        </span>
      </Button>
    </motion.div>
  );
};

export { ServiceCard };
