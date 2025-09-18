import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold font-headline text-primary">Apex</span>
            <span className="text-xl font-bold font-headline text-accent">Institute</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Apex Institute. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
