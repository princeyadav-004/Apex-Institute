import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Award, GraduationCap, UserCheck } from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import { GoldSeparator } from "@/components/shared/gold-separator";

const infoCards = [
  {
    title: "Education Services",
    description: "Seamlessly visualize quality effectual capital without superior collaboration and idea sharing listically.",
    icon: <BookOpen className="h-10 w-10 text-accent" />
  },
  {
    title: "International Hubs",
    description: "Seamlessly visualize quality effectual capital without superior collaboration and idea sharing listically.",
    icon: <GraduationCap className="h-10 w-10 text-accent" />
  },
  {
    title: "Bachelor's and Master's",
    description: "Seamlessly visualize quality effectual capital without superior collaboration and idea sharing listically.",
    icon: <UserCheck className="h-10 w-10 text-accent" />
  }
];

const stats = [
    { number: "120+", label: "Courses" },
    { number: "50+", label: "Expert Tutors" },
    { number: "5k+", label: "Students" },
    { number: "20+", label: "Awards" },
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
          <p className="font-semibold text-accent tracking-widest uppercase">Welcome to Apex Institute</p>
          <h1 className="text-5xl font-extrabold tracking-tight font-headline md:text-6xl lg:text-7xl mt-4">
            <span className="text-white">Unlock Your Potential with </span>
            <span className="text-accent">Quality Education</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200 md:text-xl max-w-2xl">
            Empowering students with knowledge and skills for a successful future. Join us to start your journey of excellence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start justify-start gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto rounded-full px-8 py-6 text-lg font-bold uppercase tracking-wider">
              <Link href="/courses">Our Courses <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto rounded-full px-8 py-6 text-lg font-bold uppercase tracking-wider">
              <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
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
                <p className="font-semibold text-accent uppercase tracking-wider">About Our Institute</p>
                <h2 className="text-4xl font-bold font-headline mt-4">A Few Words About the Institute</h2>
                <GoldSeparator className="justify-start my-6" />
                <p className="mt-6 text-muted-foreground">Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational.</p>
                <p className="mt-4 text-muted-foreground">We are proud to offer top range in employment services such and asser payroll and benefits administrato management and assistance with global business range ploment employee readings from religious texts or literature are also commonly inc compliance.</p>
                <Button asChild size="lg" className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 py-6 text-lg font-bold uppercase tracking-wider">
                    <Link href="/courses">Read More <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
        </div>
      </section>
      
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <p className="font-semibold text-accent uppercase tracking-wider">Our Features</p>
                <h2 className="text-4xl font-bold font-headline mt-4">Why Choose Us</h2>
                <GoldSeparator className="mt-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {whyChooseUs.map((feature, index) => {
                    const Icon = {
                        BookOpen,
                        Users,
                        Award
                    }[feature.icon];
                    return (
                        <Card key={index} className="bg-card text-center p-8 border-2 border-transparent hover:border-accent hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                           <div className="flex justify-center mb-6">
                             {Icon && <Icon className="h-16 w-16 text-accent" />}
                           </div>
                           <h3 className="text-2xl font-bold font-headline text-primary">{feature.title}</h3>
                           <p className="mt-4 text-muted-foreground">{feature.description}</p>
                        </Card>
                    )
                })}
            </div>
        </div>
      </section>
      
      <section className="py-32 bg-fixed bg-cover bg-center bg-no-repeat bg-black/60 bg-blend-darken" style={{backgroundImage: "url('https://picsum.photos/seed/statsbg/1920/1080')"}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="animate-fade-in">
                        <h3 className="text-5xl md:text-6xl font-bold font-headline text-accent">{stat.number}</h3>
                        <p className="mt-4 text-lg font-semibold uppercase tracking-widest">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
}
