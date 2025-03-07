import React from 'react';
import { motion } from 'framer-motion';
import { User, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "PrepFly helped me achieve band 8 in IELTS. The AI-powered speaking practice was a game-changer for my preparation.",
    author: "Sarah J.",
    role: "International Student",
    rating: 5
  },
  {
    id: 2,
    content: "The university finder tool saved me countless hours of research. I found my dream program in just a few clicks!",
    author: "Michael T.",
    role: "Graduate Student",
    rating: 5
  },
  {
    id: 3,
    content: "As someone with test anxiety, the personalized study plan really helped me stay focused and confident for my GRE.",
    author: "Priya K.",
    role: "Master's Applicant",
    rating: 5
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how PrepFly has helped students achieve their academic goals
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="gradient-card p-8 rounded-xl border border-white/10 relative"
            >
              <div className="absolute -top-4 -left-4 bg-primary/10 p-3 rounded-full">
                <Quote className="h-6 w-6 text-primary" />
              </div>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="mb-6 text-foreground/90 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="bg-primary/10 rounded-full p-2 mr-3">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;