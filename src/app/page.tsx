import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Globe, UserCheck } from "lucide-react";

const infoCards = [
  {
    title: "Education Services",
    description: "Seamlessly visualize quality effectual capital without superior collaboration and idea sharing listically.",
    icon: <BookOpen className="h-10 w-10 text-accent" />
  },
  {
    title: "International Hubs",
    description: "Seamlessly visualize quality effectual capital without superior collaboration and idea sharing listically.",
    icon: <Globe className="h-10 w-10 text-accent" />
  },
  {
    title: "Bachelor's and Master's",
    description: "Seamlessly visualize quality effectual capital without superior collaboration and idea sharing listically.",
    icon: <UserCheck className="h-10 w-10 text-accent" />
  }
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');
  const aboutImage1 = PlaceHolderImages.find(p => p.id === 'about-1');
  const aboutImage2 = PlaceHolderImages.find(p => p.id === 'about-2');


  return (
    <div className="animate-fade-in">
      <section className="relative h-[calc(100vh-8.8rem)] w-full flex items-center justify-start text-left bg-black">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-50"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 text-white container">
          <p className="font-semibold text-accent tracking-widest">WELCOME TO COLLEGE</p>
          <h1 className="text-5xl font-extrabold tracking-tight font-headline md:text-6xl lg:text-7xl mt-4">
            <span className="text-white">EDUCATION IS THE BEST </span>
            <span className="text-white">KEY SUCCESS IN LIFE</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200 md:text-xl max-w-2xl">
            Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, consectetur et nulla et, commodo gravida lectus non.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start justify-start gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto rounded-none">
              <Link href="/courses">Discover More <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto rounded-none">
              <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="-mt-24 relative z-20 container">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {infoCards.map((card, index) => (
              <Card key={card.title} className={`rounded-none p-8 text-white ${index === 1 ? 'bg-accent' : 'bg-secondary'}`}>
                <CardContent className="flex flex-col items-start p-0">
                  <div className={`mb-6 ${index === 1 ? '' : 'text-accent'}`}>
                    {React.cloneElement(card.icon, {className: "h-10 w-10 text-white"})}
                  </div>
                  <h3 className="text-2xl font-bold font-headline">{card.title}</h3>
                  <p className="mt-4 text-gray-200">{card.description}</p>
                  <Link href="#" className="mt-6 flex items-center font-semibold hover:underline">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
                {aboutImage1 && (
                    <div className="relative h-96">
                         <Image
                            src={aboutImage1.imageUrl}
                            alt={aboutImage1.description}
                            fill
                            className="object-cover rounded-lg border-4 border-white shadow-lg"
                            data-ai-hint={aboutImage1.imageHint}
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    </div>
                )}
                 {aboutImage2 && (
                    <div className="relative h-96 mt-12">
                         <Image
                            src={aboutImage2.imageUrl}
                            alt={aboutImage2.description}
                            fill
                            className="object-cover rounded-lg border-4 border-white shadow-lg"
                            data-ai-hint={aboutImage2.imageHint}
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    </div>
                )}
            </div>
            <div>
                <p className="font-semibold text-accent"># About Our University</p>
                <h2 className="text-4xl font-bold font-headline mt-4">A Few Words About the University</h2>
                <p className="mt-6 text-muted-foreground">Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational.</p>
                <p className="mt-4 text-muted-foreground">We are proud to offer top range in employment services such and asser payroll and benefits administrato management and assistance with global business range ploment employee readings from religious texts or literature are also commonly inc compliance.</p>
                <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold">01</div>
                        <div>
                            <h4 className="font-bold text-lg">Doctoral Degrees</h4>
                            <p className="text-muted-foreground">consectetur adipiscing elit sed do eiusmod tem incid idunt.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold">02</div>
                        <div>
                            <h4 className="font-bold text-lg">Global Students</h4>
                            <p className="text-muted-foreground">consectetur adipiscing elit sed do eiusmod tem incid idunt.</p>
                        </div>
                    </div>
                </div>
                <Button asChild size="lg" className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-none">
                    <Link href="/courses">Read More <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
