
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Search, Book, Globe, Award, Plane, Star } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-0">
      {/* Background Effects */}
      <div
        className="absolute inset-0 bg-gradient-shimmer"
        style={
          {
            opacity: "0.3",
          } as any
        }
      >
        <div className="absolute inset-0 dot-pattern [mask-image:radial-gradient(ellipse_at_center,black_85%,transparent_100%)]" />
        <div className="absolute -left-[300px] w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-3xl bg-gradient-pulse" />
        <div className="absolute -right-[200px] bottom-[100px] w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl bg-gradient-pulse" />
        <div className="absolute left-[50%] top-[30%] w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-2xl" />
        <div className="absolute right-[30%] top-[15%] w-[200px] h-[200px] rounded-full bg-purple-500/10 blur-xl" />
        
        {/* Animated stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              opacity: 0.7,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Star className="text-yellow-300 h-3 w-3" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Badge */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 glass-morphism shadow-lg border border-green-400/20">
              <Plane className="h-4 w-4 animate-float text-primary" />
              <span className="text-xs sm:text-sm font-medium">
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
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-primary to-primary/80 animate-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Path to Global
              <br />
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400"
                animate={{ 
                  scale: [1, 1.05, 1],
                  filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Education Success
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white font-medium drop-shadow-md max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Experience our cutting-edge platform featuring AI-powered
              university search and comparison, instant IELTS writing & speaking
              evaluation, and personalized study plans with progress tracking.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="mt-8 sm:mt-10 max-w-md sm:max-w-2xl mx-auto px-4 sm:px-0"
              variants={floatingElements}
              initial="hidden"
              animate="show"
            >
              <div className="glass-morphism rounded-2xl p-2 flex items-center gap-2 shadow-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300 transform hover:scale-[1.02]">
                <Search className="h-5 w-5 text-green-400 flex-shrink-0 ml-3" />
                <input
                  type="text"
                  placeholder="Search universities, scholarships, or courses..."
                  className="flex-1 bg-transparent border-0 focus:ring-0 text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  size="sm"
                  className="flex-shrink-0 shadow-md hover:shadow-lg transition-all duration-300 bg-green-500 hover:bg-green-600"
                >
                  Search
                </Button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
              {[
                {
                  icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
                  count: "1000+",
                  label: "Universities all over the World.",
                },
                {
                  icon: <Book className="h-6 w-6 sm:h-8 sm:w-8" />,
                  count: "50+",
                  label: "Test Preparations",
                },
                {
                  icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
                  count: "500+",
                  label: "Scholarships",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-morphism rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-green-400/20 hover:border-green-400/40"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="text-green-400 mb-3"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-xl sm:text-2xl font-bold group-hover:text-green-400 transition-colors">
                      {stat.count}
                    </div>
                    <div className="text-sm sm:text-base text-muted-foreground text-center">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link href="/signup">
                <Button
                  size="lg"
                  className="w-full sm:w-auto group shadow-lg hover:shadow-xl transition-all duration-300 bg-green-500 hover:bg-green-600 text-white"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto glass-morphism border-green-400/30 hover:border-green-400/50 text-white"
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
