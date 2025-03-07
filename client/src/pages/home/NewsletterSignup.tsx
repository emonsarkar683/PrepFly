import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { ArrowRight } from 'lucide-react'; // Assumed import

const NewsletterSignup = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects - Using site-wide gradient */}
      <div
        className="absolute inset-0 bg-gradient-shimmer"
        style={{
          opacity: "0.2",
        }}
      >
        <div className="absolute inset-0 dot-pattern [mask-image:radial-gradient(ellipse_at_center,black_85%,transparent_100%)]" />
        <div className="absolute right-[30%] top-[15%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl bg-gradient-pulse" />
        <div className="absolute -left-[200px] bottom-[100px] w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl bg-gradient-pulse" />
        <div className="absolute left-[40%] top-[50%] w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-2xl" />
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass-card p-8 rounded-2xl animate-glow shadow-2xl hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.3)] transition-all duration-500 hover:-translate-y-2 border border-white/20" style={{ backdropFilter: "blur(20px)" }}>
            <div className="inline-flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 text-primary mr-2" />
              <h2 className="text-3xl font-bold">Stay Updated</h2>
            </div>

            <p className="text-lg text-body mb-8">
              Subscribe to our newsletter for exam tips, study resources, and the latest updates on our platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 text-body"
              />
              <Button size="lg" className="whitespace-nowrap group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="text-xs text-muted mt-4 text-center">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;