import React from "react";
import { ServiceCard } from "../ServiceCard/page";
import { Users, Brain, UserRound, BarChart3 } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Users,
    title: "Enhanced CX for every stage of Customer Lifecycle",
    description:
      "A combination of CX experts and innovative strategies generate personalized insights to address the needs of customers across different industries and ensure customer engagement.",
    buttonText: "Explore CX Services",
  },
  {
    id: 2,
    icon: Brain,
    title: "Revolutionizing global CX through Gen-AI powered solutions",
    description:
      "A blend of GenAI with human expertise to provide personalized services on a scale, like automating complex tasks with highly-rare predictions and recommendations.",
    buttonText: "Our Gen-AI Solutions",
  },
  {
    id: 3,
    icon: UserRound,
    title: "People-Centric Approach",
    description:
      "Recognizing a diverse mix of talents, experiences, and perspectives, we maintain an open-door policy for direct communication with upper management. Our strategies value both customer satisfaction and agent's empowerment, reflecting company values and better outcomes.",
    buttonText: "Learn More",
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Transformed over 50 businesses with advanced CX strategies",
    description:
      "Our expertise, technology, and industry-specific vertical gained access to all kinds of businesses in more than 15 industries and leveraged their business growth by delivering exceptional customer service experience.",
    buttonText: "Our Success Stories",
  },
];

const ServiceGrid = () => {
  return (
    <section className="w-full pb-15">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
