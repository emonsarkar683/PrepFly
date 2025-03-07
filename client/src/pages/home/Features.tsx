import {
  School,
  Brain,
  BookOpen,
  Bot,
  Mic,
  CloudDownload,
  Compass,
  Medal,
  FileText,
  BarChart4,
  Smartphone,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Feature data with icons, titles, bullet points, and colors
const features = [
  {
    title: "University Finder",
    icon: <School className="h-8 w-8 text-blue-400" />,
    bullets: [
      "AI-powered search across global universities",
      "Compare multiple institutions side by side",
      "Personalized recommendations based on profile",
      "Save universities to favorites",
    ],
    color: "from-blue-500/20 to-blue-600/20",
    comingSoon: false,
  },
  {
    title: "AI IELTS Evaluation",
    icon: <Brain className="h-8 w-8 text-purple-400" />,
    bullets: [
      "Instant writing task feedback",
      "Real-time speaking assessment",
      "Detailed scoring breakdown",
      "Practice with AI-generated questions",
    ],
    color: "from-purple-500/20 to-purple-600/20",
    comingSoon: false,
  },
  {
    title: "Study Resources",
    icon: <BookOpen className="h-8 w-8 text-green-400" />,
    bullets: [
      "Video tutorials for all sections",
      "Practice tests from official sources",
      "Progress tracking dashboard",
      "Personalized study plans",
    ],
    color: "from-green-500/20 to-green-600/20",
    comingSoon: false,
  },
  {
    title: "AI Doubt Solver",
    icon: <Bot className="h-8 w-8 text-yellow-400" />,
    bullets: [
      "Instant AI-powered explanations",
      "Upload images or type questions",
      "Context-aware answers with examples",
    ],
    color: "from-yellow-500/20 to-yellow-600/20",
    comingSoon: false,
  },
  {
    title: "Voice Command Support",
    icon: <Mic className="h-8 w-8 text-red-400" />,
    bullets: [
      "Navigate platform using voice",
      "Voice-based search for study materials",
      "AI Speech Tutor for pronunciation practice",
    ],
    color: "from-red-500/20 to-red-600/20",
    comingSoon: true,
  },
  {
    title: "Offline Study Mode",
    icon: <CloudDownload className="h-8 w-8 text-teal-400" />,
    bullets: [
      "Download study materials",
      "Access saved content without the internet",
      "Sync progress when back online",
    ],
    color: "from-teal-500/20 to-teal-600/20",
    comingSoon: true,
  },
  {
    title: "Personalized Learning Paths",
    icon: <Compass className="h-8 w-8 text-indigo-400" />,
    bullets: [
      "AI-generated study plans based on your goals",
      "Adaptive difficulty based on progress",
      "Track your learning journey",
    ],
    color: "from-indigo-500/20 to-indigo-600/20",
    comingSoon: false,
  },
  {
    title: "Scholarship Matching",
    icon: <Medal className="h-8 w-8 text-orange-400" />,
    bullets: [
      "Get personalized scholarship recommendations",
      "Track application deadlines",
      "Receive alerts for new opportunities",
    ],
    color: "from-orange-500/20 to-orange-600/20",
    comingSoon: true,
  },
  {
    title: "Document Review Service",
    icon: <FileText className="h-8 w-8 text-pink-400" />,
    bullets: [
      "AI-powered grammar and style improvements",
      "Peer reviews for constructive feedback",
      "Track revisions and improvements",
    ],
    color: "from-pink-500/20 to-pink-600/20",
    comingSoon: false,
  },
  {
    title: "Performance Analytics",
    icon: <BarChart4 className="h-8 w-8 text-cyan-400" />,
    bullets: [
      "Track study time and test scores",
      "Identify areas for improvement",
      "Visualize progress with charts",
    ],
    color: "from-cyan-500/20 to-cyan-600/20",
    comingSoon: true,
  },
  {
    title: "Mobile Learning App",
    icon: <Smartphone className="h-8 w-8 text-lime-400" />,
    bullets: [
      "Study on-the-go with offline access",
      "Flashcard system for quick revision",
      "Sync progress across devices",
    ],
    color: "from-lime-500/20 to-lime-600/20",
    comingSoon: true,
  },
  {
    title: "Collaborative Study Groups",
    icon: <Users className="h-8 w-8 text-violet-400" />,
    bullets: [
      "Join virtual study rooms",
      "Collaborate in real-time with shared documents",
      "Schedule group study sessions",
    ],
    color: "from-violet-500/20 to-violet-600/20",
    comingSoon: false,
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
      {/* Background Effects */}
      <div
        className="absolute inset-0 bg-gradient-shimmer"
        style={{ opacity: "0.2" } as any}
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

        {/* Feature Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                background: `linear-gradient(135deg, ${feature.color})`,
              }}
            >
              <div className="h-full p-8 bg-background/30 backdrop-blur-lg border border-white/20">
                {/* Centered Icon and Title */}
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="p-4 rounded-full bg-white/10 shadow-lg mb-4 backdrop-blur-xl border border-white/20 transform transition-all duration-300 hover:rotate-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white font-['Montserrat']">
                    {feature.title}
                  </h3>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-3 mt-1 text-primary">
                        <span className="text-sm">•</span>
                      </div>
                      <span className="text-white/80">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Coming Soon Badge */}
                {feature.comingSoon && (
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded inline-block mt-4">
                    Coming Soon
                  </span>
                )}

                {/* Learn More Button */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary hover:text-primary/80 font-['Montserrat']"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore All Features Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/80 text-white"
          >
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
