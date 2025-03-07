import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import MobileNav from "./MobileNav";

// TODO: Replace with actual auth state
const isLoggedIn = false;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 shadow-sm" : "bg-transparent"
      } backdrop-blur supports-[backdrop-filter]:bg-background/60`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="font-bold text-xl text-primary">PrepFly</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              {isLoggedIn && (
                <NavigationMenuItem>
                  <Link href="/dashboard">
                    <div className={navigationMenuTriggerStyle()}>
                      Dashboard
                    </div>
                  </Link>
                </NavigationMenuItem>
              )}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-green-400 hover:text-primary transition-colors px-4 py-2">
                  AI Evaluation
                </NavigationMenuTrigger>
                <NavigationMenuContent className="supports-[backdrop-filter]:backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 rounded-lg shadow-lg border border-green-400/20">
                  <div className="w-[300px] p-4">
                    <Link href="/evaluation/writing">
                      <div className="flex items-center space-x-2 p-3 rounded-md hover:bg-primary/10 cursor-pointer transition-colors">
                        <span className="font-medium text-green-400">
                          Writing Evaluation
                        </span>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          AI Powered
                        </span>
                      </div>
                    </Link>
                    <Link href="/evaluation/speaking">
                      <div className="p-3 rounded-md hover:bg-primary/10 cursor-pointer transition-colors">
                        <span className="text-green-400">
                          Speaking Evaluation
                        </span>
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-green-400 hover:text-primary transition-colors px-4 py-2">
                  Test Prep
                </NavigationMenuTrigger>
                <NavigationMenuContent className="supports-[backdrop-filter]:backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 rounded-lg shadow-lg border border-green-400/20">
                  <div className="w-[300px] p-4">
                    <div
                      className="flex items-center space-x-2 p-3 rounded-md hover:bg-primary/10 cursor-pointer transition-colors"
                      onClick={() => window.location.href = "/prep/ielts"}
                    >
                      <span className="font-medium text-green-400">IELTS</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Popular
                      </span>
                    </div>
                    <div
                      className="flex items-center p-3 rounded-md hover:bg-primary/10 cursor-pointer transition-colors"
                      onClick={() => (window.location.href = "/prep/gre")}
                    >
                      <span className="text-green-400">GRE</span>
                      <span className="ml-2 text-xs text-muted-foreground">
                        Coming Soon
                      </span>
                    </div>
                    <div
                      className="flex items-center p-3 rounded-md hover:bg-primary/10 cursor-pointer transition-colors"
                      onClick={() => (window.location.href = "/prep/sat")}
                    >
                      <span className="text-green-400">SAT</span>
                      <span className="ml-2 text-xs text-muted-foreground">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/universities">
                  <div className="text-green-400 hover:text-primary transition-colors px-4 py-2 cursor-pointer">
                    University Finder
                  </div>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/scholarships">
                  <div className="text-green-400 hover:text-primary transition-colors px-4 py-2 cursor-pointer">
                    Scholarships
                  </div>
                </Link>
              </NavigationMenuItem>

              {!isLoggedIn && (
                <NavigationMenuItem>
                  <Link href="/pricing">
                    <div className="text-green-400 hover:text-primary transition-colors px-4 py-2 cursor-pointer">
                      Pricing
                    </div>
                  </Link>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {isLoggedIn ? (
            <Link href="/logout">
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-primary/10 font-medium"
              >
                Log out
              </Button>
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary/10 font-medium"
                >
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="sm"
                  className="hover:shadow-lg transition-shadow font-medium"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden hover:bg-primary/10"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Mobile Navigation */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <MobileNav onClose={() => setMobileMenuOpen(false)} />
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
