"use client";

import { motion } from "framer-motion";
import { Shield, Leaf, Award, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Hygienic",
    description: "Chemical-conscious cleaning safe for kids, pets, and all fabrics.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Environmentally responsible solutions without harsh chemicals.",
  },
  {
    icon: Award,
    title: "Certified Process",
    description: "Science-backed methodology with guaranteed results.",
  },
  {
    icon: Users,
    title: "Trained Experts",
    description: "Professional uniformed technicians with specialized training.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Kolkata's Trusted Upholstery Experts
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Upholstery Care, we believe your furniture deserves scientific care.
              Using advanced technology and eco-safe methods, we restore your upholstery
              to its original beauty while ensuring a healthier environment for your family.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is to become the benchmark for professional upholstery cleaning
              in Kolkata — delivering premium, trustworthy service that transforms spaces.
            </p>

            <div className="flex flex-wrap gap-6">
              <div>
                <span className="font-heading text-4xl font-bold text-primary">20+</span>
                <p className="text-muted-foreground text-sm">Happy Clients</p>
              </div>
              <div>
                <span className="font-heading text-4xl font-bold text-primary">6</span>
                <p className="text-muted-foreground text-sm">Step Process</p>
              </div>
              <div>
                <span className="font-heading text-4xl font-bold text-primary">100%</span>
                <p className="text-muted-foreground text-sm">Eco-Safe</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border/50 rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
