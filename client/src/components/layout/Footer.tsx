import { Link } from "wouter";
import {
  Building2,
  Users,
  Phone,
  Boxes,
  Scroll,
  GraduationCap,
  BookOpen,
  HelpCircle,
  BookMarked,
  Shield,
  FileText,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 mt-auto relative overflow-hidden">
      {/* Background Effects - Match Hero Background with lower opacity */}
      <div
        className="absolute inset-0 bg-gradient-shimmer"
        style={
          {
            opacity: "0.2",
          } as any
        }
      >
        <div className="absolute inset-0 dot-pattern [mask-image:radial-gradient(ellipse_at_center,black_85%,transparent_100%)]" />
        <div className="absolute -right-[200px] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl bg-gradient-pulse" />
        <div className="absolute -left-[150px] bottom-[50px] w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl bg-gradient-pulse" />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto text-left">
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-heading">
              <Building2 className="h-5 w-5 text-primary" />
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="inline-flex items-center justify-start gap-2 text-sm text-body hover:text-primary transition-colors">
                    <Users className="h-4 w-4" />
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a className="inline-flex items-center gap-2 text-sm text-body hover:text-primary transition-colors">
                    <GraduationCap className="h-4 w-4" />
                    Careers
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="inline-flex items-center gap-2 text-sm text-body hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-heading">
              <Boxes className="h-5 w-5 text-primary" />
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features">
                  <a className="inline-flex items-center gap-2 text-sm text-body hover:text-primary transition-colors">
                    <Scroll className="h-4 w-4" />
                    Features
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <a className="inline-flex items-center gap-2 text-sm text-body hover:text-primary transition-colors">
                    <FileText className="h-4 w-4" />
                    Pricing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/docs">
                  <a className="inline-flex items-center gap-2 text-sm text-body hover:text-primary transition-colors">
                    <BookOpen className="h-4 w-4" />
                    Documentation
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-heading">
              <BookMarked className="h-5 w-5 text-primary" />
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog">
                  <a className="inline-flex items-center gap-2 text-sm text-body hover:text-primary transition-colors">
                    <Scroll className="h-4 w-4" />
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/help">
                  <a className="inline-flex items-center gap-2 text-sm text-body hover:text-primary transition-colors">
                    <HelpCircle className="h-4 w-4" />
                    Help Center
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/guides">
                  <a className="inline-flex items-center gap-2 text-sm text-body hover:text-primary transition-colors">
                    <BookOpen className="h-4 w-4" />
                    Guides
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-heading">
              <Shield className="h-5 w-5 text-primary" />
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy">
                  <a className="inline-flex items-center gap-2 text-sm text-body hover:text-primary transition-colors">
                    <Shield className="h-4 w-4" />
                    Privacy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="inline-flex items-center gap-2 text-sm text-body hover:text-primary transition-colors">
                    <FileText className="h-4 w-4" />
                    Terms
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-body">
              © {new Date().getFullYear()} PrepFly. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://twitter.com/prepfly"
                className="text-body hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/prepfly"
                className="text-body hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/prepfly"
                className="text-body hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;