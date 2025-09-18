import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');

  return (
    <div className="animate-fade-in">
      <section className="relative h-[calc(100vh-5rem)] w-full flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover grayscale brightness-50"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="relative z-10 max-w-4xl px-4 text-white">
          <h1 className="text-5xl font-extrabold tracking-tight font-headline md:text-6xl lg:text-7xl">
            <span className="text-white">Excellence in </span>
            <span className="text-accent">Education</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200 md:text-xl">
            Discover a world-class learning experience designed to shape the leaders of tomorrow.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black w-full sm:w-auto">
              <Link href="/contact">Make an Enquiry</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
