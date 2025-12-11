"use client";

import { motion } from "framer-motion";
import logo from "@/assets/logo-white.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image src={logo} alt="Upholstery Care" className="h-10 w-auto" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm"
          >
            © {new Date().getFullYear()} Upholstery Care. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Terms
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
