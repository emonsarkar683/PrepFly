import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Search, Book, Globe, Award, Plane } from "lucide-react";
import { motion } from "framer-motion";
import LottieAnimation from "@/components/ui/LottieAnimation";
import departureAnimation from "../../../../animation/departure.json";

const floatingElements = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div
        className="absolute inset-0 bg-gradient-shimmer"
        style={
          {
            opacity: "0.2",
          } as any
        }
      >
        <div className="absolute inset-0 dot-pattern [mask-image:radial-gradient(ellipse_at_center,black_85%,transparent_100%)]" />
        <div className="absolute -left-[300px] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl bg-gradient-pulse" />
        <div className="absolute -right-[200px] bottom-[100px] w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl bg-gradient-pulse" />
        <div className="absolute left-[50%] top-[30%] w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-2xl" />
        <div className="absolute right-[30%] top-[15%] w-[200px] h-[200px] rounded-full bg-purple-500/5 blur-xl" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Badge */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 glass-morphism">
              <Plane className="h-4 w-4 animate-float text-primary" />
              <span className="text-sm font-medium">
                <span className="text-primary">New Feature</span>
                <span className="hidden sm:inline">
                  {" "}
                  - AI-Powered Learning Platform
                </span>
              </span>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary animate-gradient" //Added drop-shadow and text-white
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Path to Global
              <br />
              Education Success
            </motion.h1>

            {/* Lottie Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-xl mx-auto my-8"
            >
              <LottieAnimation
                animationData={departureAnimation}
                className="w-full h-64"
              />
            </motion.div>

            <motion.p
              className="mt-6 text-lg md:text-xl text-white font-medium drop-shadow-md max-w-3xl mx-auto leading-relaxed" //Added drop-shadow, text-white, font-medium
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Experience our cutting-edge platform featuring AI-powered university search and comparison, 
              instant IELTS writing & speaking evaluation, and personalized study plans with progress tracking. 
              Access our comprehensive scholarship database and benefit from expert-curated study 
              materials to excel in your educational journey.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="mt-10 max-w-2xl mx-auto"
              variants={floatingElements}
              initial="hidden"
              animate="show"
            >
              <div className="glass-morphism rounded-2xl p-2 flex items-center gap-2 shadow-lg">
                <Search className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-3" />
                <input
                  type="text"
                  placeholder="Search universities, scholarships, or courses..."
                  className="flex-1 bg-transparent border-0 focus:ring-0 text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  size="sm"
                  className="flex-shrink-0 shadow-md hover:shadow-lg transition-shadow"
                >
                  Search
                </Button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: <Globe className="h-8 w-8" />,
                  count: "1000+",
                  label: "Universities all over the World.",
                },
                {
                  icon: <Book className="h-8 w-8" />,
                  count: "50+",
                  label: "Test Preparations",
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  count: "500+",
                  label: "Scholarships",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-morphism rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="text-primary mb-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {stat.count}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link href="/signup">
                <Button
                  size="lg"
                  className="w-full sm:w-auto group shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto glass-morphism"
                >
                  View Plans
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;