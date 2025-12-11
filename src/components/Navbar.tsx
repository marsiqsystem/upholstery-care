"use client";

import { motion } from "framer-motion";
import logo from "@/assets/logo-white.png";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            className="flex items-center"
          >
            <Image src={logo} alt="Upholstery Care" className="h-10 md:h-12 w-auto" />
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-sm tracking-wide"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm tracking-wide hover:glow-gold transition-all duration-300"
          >
            Book Now
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
