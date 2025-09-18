"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, GraduationCap, Phone, Mail, MapPin, Search } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/faculty", label: "Faculty" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="bg-secondary text-secondary-foreground py-2 text-sm">
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
                <Link href="#" className="hover:text-accent">f</Link>
                <Link href="#" className="hover:text-accent">t</Link>
                <Link href="#" className="hover:text-accent">in</Link>
            </div>
        </div>
      </div>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-accent" />
          <span className="text-3xl font-bold font-headline text-primary">COLLEGE</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-lg font-medium transition-colors hover:text-accent",
                pathname === link.href ? "text-accent" : "text-primary"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
            <Search className="h-5 w-5 text-primary hover:text-accent cursor-pointer" />
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none">
              <Link href="#">Admission Open</Link>
            </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
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
