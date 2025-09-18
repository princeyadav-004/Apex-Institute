"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, GraduationCap, Phone, Mail, MapPin } from "lucide-react";
import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/faculty", label: "Faculty" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 transition-all duration-300", isScrolled ? 'bg-background shadow-md' : 'bg-transparent')}>
       <div className={cn("bg-secondary text-secondary-foreground py-2 text-sm", isScrolled ? 'hidden' : 'block transition-all duration-300')}>
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-accent" />
                    <span>+123 4567 890</span>
                </div>
                <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>info@college.com</span>
                </div>
                 <div className="hidden md:flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>3rd Floor Best World.</span>
                </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
                <Link href="#" className="hover:text-accent">Login</Link>
                <span className="text-muted-foreground">/</span>
                 <Link href="#" className="hover:text-accent">Register</Link>
            </div>
        </div>
      </div>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className={cn("h-8 w-8", isScrolled ? 'text-primary' : 'text-accent')} />
          <span className={cn("text-3xl font-bold font-headline", isScrolled ? 'text-primary' : 'text-white')}>APEX</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-lg font-medium transition-colors hover:text-accent",
                pathname === link.href ? "text-accent" : (isScrolled ? "text-primary" : "text-white")
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent" />
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 font-bold uppercase">
              <Link href="#">Admission Open</Link>
            </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isScrolled ? 'text-primary' : 'text-white', 'hover:bg-accent/20')}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="flex flex-col space-y-4 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium",
                      pathname === link.href ? "text-accent" : "text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                 <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none mt-4">
                    <Link href="#">Admission Open</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
