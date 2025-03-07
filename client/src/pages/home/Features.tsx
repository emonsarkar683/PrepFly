import {
  School,
  Search,
  MessageSquare,
  Video,
  Award,
  BookOpen,
  Brain,
  Globe,
  BadgeCheck,
  Clock,
  CreditCard,
  Users,
  Mic,
  CloudDownload,
  MonitorSmartphone,
  Bot,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

// Screenshot section data with bullet points and icons
const screenshots = [
  {
    title: "University Finder",
    icon: School,
    points: [
      "AI-powered search across global universities",
      "Compare multiple institutions side by side",
      "Personalized recommendations based on profile",
      "Save universities to favorites",
    ],
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    title: "AI IELTS Evaluation",
    icon: Brain,
    points: [
      "Instant writing task feedback",
      "Real-time speaking assessment",
      "Detailed scoring breakdown",
      "Practice with AI-generated questions",
    ],
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    title: "Study Resources",
    icon: BookOpen,
    points: [
      "Video tutorials for all sections",
      "Practice tests from official sources",
      "Progress tracking dashboard",
      "Personalized study plans",
    ],
    color: "from-green-500/20 to-green-600/20",
  },
  {
    title: "AI Doubt Solver",
    icon: Bot,
    points: [
      "Instant AI-powered explanations",
      "Upload images or type questions",
      "Context-aware answers with examples",
    ],
    color: "from-yellow-500/20 to-yellow-600/20",
  },
  {
    title: "Voice Command Support",
    icon: Mic,
    points: [
      "Navigate platform using voice",
      "Voice-based search for study materials",
      "AI Speech Tutor for pronunciation practice",
    ],
    color: "from-red-500/20 to-red-600/20",
  },
  {
    title: "Offline Study Mode",
    icon: CloudDownload,
    points: [
      "Download study materials",
      "Access saved content without the internet",
      "Sync progress when back online",
    ],
    color: "from-teal-500/20 to-teal-600/20",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects - Using site-wide gradient */}
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
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white font-['Montserrat'] animate-gradient">
            Features
          </h2>
          <p className="text-xl text-white/90 font-['Open_Sans'] max-w-2xl mx-auto">
            Explore our comprehensive platform features designed to help you
            succeed
          </p>
        </div>

        {/* Feature Section with Icons */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.title}
              variants={item}
              className="glass-card rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                background: `linear-gradient(135deg, ${screenshot.color})`,
              }}
            >
              <div className="h-full p-8 bg-background/30 backdrop-blur-lg border border-white/20">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="p-4 rounded-full bg-primary/20 shadow-lg mb-4 backdrop-blur-xl border border-white/20 transform transition-all duration-300 hover:rotate-6">
                    {screenshot.icon && (
                      <screenshot.icon className="h-7 w-7 text-[#3498DB] animate-pulse" />
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold text-white font-['Montserrat']">{screenshot.title}</h3>
                </div>
                <ul className="space-y-3">
                  {screenshot.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-3 mt-1 text-[#3498DB]">
                        <BadgeCheck className="h-5 w-5" />
                      </div>
                      <span className="text-white font-['Open_Sans'] font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-[#3498DB] hover:text-[#2980B9] font-['Montserrat']"
                  >
                    Learn more <Clock className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;