"use client";

import { motion } from "framer-motion";
import { Sofa, Bed, LayoutGrid, Car, Blinds, Armchair } from "lucide-react";

const services = [
  {
    icon: Sofa,
    title: "Sofa Cleaning",
    description: "Deep cleaning for fabric & leather sofas with stain removal and sanitization.",
  },
  {
    icon: Bed,
    title: "Mattress Cleaning",
    description: "Dust mite elimination and deep sanitization for healthier sleep.",
  },
  {
    icon: LayoutGrid,
    title: "Carpet Cleaning",
    description: "Hot water extraction and professional grooming for all carpet types.",
  },
  {
    icon: Car,
    title: "Auto Upholstery",
    description: "Complete interior cleaning for car seats and vehicle upholstery.",
  },
  {
    icon: Blinds,
    title: "Curtain Cleaning",
    description: "On-site or off-site curtain cleaning with fabric care.",
  },
  {
    icon: Armchair,
    title: "Headboard Restoration",
    description: "Specialized cleaning and restoration for upholstered headboards.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional care for every piece of upholstery in your home or vehicle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
