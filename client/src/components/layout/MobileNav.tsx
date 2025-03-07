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
                <div onClick={onClose}>
                  <Link href="/ielts">
                    <div className="flex items-center py-2 hover:text-primary cursor-pointer">
                      IELTS Preparation
                      <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded">Popular</span>
                    </div>
                  </Link>
                </div>
                <div onClick={onClose}>
                  <Link href="/toefl">
                    <div className="py-2 hover:text-primary cursor-pointer">TOEFL Training</div>
                  </Link>
                </div>
                <div onClick={onClose}>
                  <Link href="/gre">
                    <div className="py-2 hover:text-primary cursor-pointer">GRE Practice</div>
                  </Link>
                </div>
                <div onClick={onClose}>
                  <Link href="/sat">
                    <div className="py-2 hover:text-primary cursor-pointer">SAT Preparation</div>
                  </Link>
                </div>
                <div onClick={onClose}>
                  <Link href="/gmat">
                    <div className="py-2 hover:text-primary cursor-pointer">GMAT Training</div>
                  </Link>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="features">
            <AccordionTrigger>Features</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-2 pl-4">
                <div onClick={onClose}>
                  <Link href="/ai-assistant">
                    <div className="flex items-center py-2 hover:text-primary cursor-pointer">
                      AI Study Assistant
                      <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded">New</span>
                    </div>
                  </Link>
                </div>
                <div onClick={onClose}>
                  <Link href="/practice">
                    <div className="py-2 hover:text-primary cursor-pointer">Mock Tests</div>
                  </Link>
                </div>
                <div onClick={onClose}>
                  <Link href="/speaking">
                    <div className="py-2 hover:text-primary cursor-pointer">Speaking Practice</div>
                  </Link>
                </div>
                <div onClick={onClose}>
                  <Link href="/writing">
                    <div className="py-2 hover:text-primary cursor-pointer">Writing Evaluation</div>
                  </Link>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="resources">
            <AccordionTrigger>Resources</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-2 pl-4">
                <div onClick={onClose}>
                  <Link href="/study-materials">
                    <div className="py-2 hover:text-primary cursor-pointer">Study Materials</div>
                  </Link>
                </div>
                <div onClick={onClose}>
                  <Link href="/live-classes">
                    <div className="py-2 hover:text-primary cursor-pointer">Live Classes</div>
                  </Link>
                </div>
                <div onClick={onClose}>
                  <Link href="/community">
                    <div className="py-2 hover:text-primary cursor-pointer">Community Forum</div>
                  </Link>
                </div>
                <div onClick={onClose}>
                  <Link href="/blog">
                    <div className="py-2 hover:text-primary cursor-pointer">Blog & Tips</div>
                  </Link>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-6 space-y-2">
          <div onClick={onClose}>
            <Link href="/pricing">
              <div className="block px-2 py-2 hover:text-primary cursor-pointer">
                Pricing
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <div onClick={onClose}>
            <Link href="/login">
              <Button variant="outline" className="w-full font-medium">
                Log in
              </Button>
            </Link>
          </div>
          <div onClick={onClose}>
            <Link href="/signup">
              <Button className="w-full font-medium">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SheetContent>
  );
};

export default MobileNav;