"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Request sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send request. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Book Your Free Inspection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your upholstery? Contact us for a free consultation and inspection.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">+91 8282004101</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">upholsterycareservices@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">54, Sikher Bagan, Rajarhat, Kolkata-700136</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">Hours</h3>
                <p className="text-muted-foreground">Mon - Sun: 9 AM - 8 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
            />
            <select
              name="service"
              required
              className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-muted-foreground"
            >
              <option value="">Select Service</option>
              <option value="sofa">Sofa Cleaning</option>
              <option value="mattress">Mattress Cleaning</option>
              <option value="carpet">Carpet Cleaning</option>
              <option value="auto">Auto Upholstery</option>
              <option value="curtain">Curtain Cleaning</option>
              <option value="other">Other</option>
            </select>
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold tracking-wide glow-gold transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Request Free Inspection"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
