import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
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
                <Link href="#" className="hover:text-accent">Login</Link>
                <span className="text-muted-foreground">/</span>
                 <Link href="#" className="hover:text-accent">Register</Link>
            </div>
        </div>
      </div>
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
        <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
                <GraduationCap className="h-8 w-8 text-accent" />
                <span className="text-3xl font-bold font-headline text-white">COLLEGE</span>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="space-y-4">
            <h3 className="text-xl font-bold font-headline text-white">Quick Links</h3>
            <ul className="space-y-2">
                <li><Link href="/courses" className="hover:text-accent">Courses</Link></li>
                <li><Link href="/faculty" className="hover:text-accent">Faculty</Link></li>
                <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
        </div>
        <div className="space-y-4">
            <h3 className="text-xl font-bold font-headline text-white">Contact Us</h3>
            <div className="space-y-2">
                 <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-accent" />
                    <span>+123 4567 890</span>
                </div>
                <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>info@college.com</span>
                </div>
                 <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>3rd Floor Best World.</span>
                </div>
            </div>
        </div>
         <div className="space-y-4">
            <h3 className="text-xl font-bold font-headline text-white">Newsletter</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            {/* Newsletter form can be added here */}
        </div>
      </div>
       <div className="bg-black text-center py-4 text-sm text-muted-foreground">
            © {new Date().getFullYear()} College. All Rights Reserved.
       </div>
    </footer>
  );
}
