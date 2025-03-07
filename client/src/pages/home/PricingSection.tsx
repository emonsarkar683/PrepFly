
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for exploring and trying out our platform.",
    features: [
      "Access to basic study materials",
      "Join public study groups",
      "1 personalized learning path",
      "Limited document reviews"
    ],
    buttonText: "Get Started",
    highlighted: false,
    path: "/signup"
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "Everything you need for serious academic advancement.",
    features: [
      "All Free features",
      "Create private study groups",
      "Unlimited learning paths",
      "10 document reviews per month",
      "Priority support"
    ],
    buttonText: "Try Pro",
    highlighted: true,
    path: "/pricing"
  },
  {
    name: "Team",
    price: "$29",
    period: "/month",
    description: "For study groups and academic teams working together.",
    features: [
      "All Pro features",
      "Team management dashboard",
      "Shared resources library",
      "Unlimited document reviews",
      "Advanced analytics",
      "Dedicated support"
    ],
    buttonText: "Contact Sales",
    highlighted: false,
    path: "/contact"
  }
];

const PricingSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Simple, Transparent Pricing</h2>
          <p className="text-lg text-white/80">
            Choose the plan that works best for your academic journey. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl p-6 backdrop-blur-lg border transition-all duration-300 h-full flex flex-col
                ${plan.highlighted 
                  ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20' 
                  : 'border-white/20 bg-white/5 hover:bg-white/10'}`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-end">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-white/70 ml-1">{plan.period}</span>}
                </div>
                <p className="mt-3 text-white/80">{plan.description}</p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link href={plan.path}>
                <Button 
                  variant={plan.highlighted ? "default" : "outline"} 
                  className={`w-full ${plan.highlighted ? '' : 'text-white border-white/30 hover:bg-white/10'}`}
                >
                  {plan.buttonText}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/70 mb-4">Need a custom solution for your institution?</p>
          <Link href="/enterprise">
            <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
              Contact for Enterprise Pricing
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
