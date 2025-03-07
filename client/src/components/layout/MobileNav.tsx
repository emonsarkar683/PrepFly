import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MobileNavProps {
  onClose: () => void;
}

const MobileNav = ({ onClose }: MobileNavProps) => {
  return (
    <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <div className="py-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="exam-prep">
            <AccordionTrigger>Exam Prep</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-2 pl-4">
                <Link href="/ielts">
                  <a className="flex items-center py-2 hover:text-primary" onClick={onClose}>
                    IELTS Preparation
                    <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded">Popular</span>
                  </a>
                </Link>
                <Link href="/toefl">
                  <a className="py-2 hover:text-primary" onClick={onClose}>TOEFL Training</a>
                </Link>
                <Link href="/gre">
                  <a className="py-2 hover:text-primary" onClick={onClose}>GRE Practice</a>
                </Link>
                <Link href="/sat">
                  <a className="py-2 hover:text-primary" onClick={onClose}>SAT Preparation</a>
                </Link>
                <Link href="/gmat">
                  <a className="py-2 hover:text-primary" onClick={onClose}>GMAT Training</a>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="features">
            <AccordionTrigger>Features</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-2 pl-4">
                <Link href="/ai-assistant">
                  <a className="flex items-center py-2 hover:text-primary" onClick={onClose}>
                    AI Study Assistant
                    <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded">New</span>
                  </a>
                </Link>
                <Link href="/practice">
                  <a className="py-2 hover:text-primary" onClick={onClose}>Mock Tests</a>
                </Link>
                <Link href="/speaking">
                  <a className="py-2 hover:text-primary" onClick={onClose}>Speaking Practice</a>
                </Link>
                <Link href="/writing">
                  <a className="py-2 hover:text-primary" onClick={onClose}>Writing Evaluation</a>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="resources">
            <AccordionTrigger>Resources</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-2 pl-4">
                <Link href="/study-materials">
                  <a className="py-2 hover:text-primary" onClick={onClose}>Study Materials</a>
                </Link>
                <Link href="/live-classes">
                  <a className="py-2 hover:text-primary" onClick={onClose}>Live Classes</a>
                </Link>
                <Link href="/community">
                  <a className="py-2 hover:text-primary" onClick={onClose}>Community Forum</a>
                </Link>
                <Link href="/blog">
                  <a className="py-2 hover:text-primary" onClick={onClose}>Blog & Tips</a>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-6 space-y-2">
          <Link href="/pricing">
            <a className="block px-2 py-2 hover:text-primary" onClick={onClose}>
              Pricing
            </a>
          </Link>
        </div>

        <div className="mt-6 space-y-2">
          <Link href="/login">
            <Button variant="outline" className="w-full" onClick={onClose}>
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="w-full" onClick={onClose}>
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </SheetContent>
  );
};

export default MobileNav;