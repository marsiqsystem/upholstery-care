"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Inspection",
    description: "Detailed fabric analysis and stain identification for optimal treatment.",
  },
  {
    number: "02",
    title: "Pre-Treatment",
    description: "Application of specialized eco-safe solutions for deep penetration.",
  },
  {
    number: "03",
    title: "Deep Cleaning",
    description: "Industrial-grade hot water extraction for thorough cleaning.",
  },
  {
    number: "04",
    title: "UV Sterilization",
    description: "UV + ultrasonic treatment to eliminate bacteria and allergens.",
  },
  {
    number: "05",
    title: "Grooming",
    description: "Professional fabric grooming and texture restoration.",
  },
  {
    number: "06",
    title: "Final Check",
    description: "Quality inspection and aftercare guidance for lasting results.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Our Method
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Six-Step Scientific Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A certified cleaning methodology that ensures deep, safe, and hygienic restoration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-6">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="font-heading text-5xl font-bold text-primary/20 select-none"
                >
                  {step.number}
                </motion.span>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
