import { PageTitle } from "@/components/shared/page-title";
import { Container } from "@/components/shared/container";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <Container>
      <PageTitle
        description="Hear what our students have to say about their transformative journey at Apex Institute. Their success is our greatest achievement."
      >
        Words of Acclaim
      </PageTitle>
      
      <div className="w-full max-w-4xl mx-auto animate-fade-in">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-0 shadow-none bg-transparent">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <Quote className="w-12 h-12 text-accent mb-6" />
                      <p className="text-xl md:text-2xl font-serif italic text-primary leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="mt-8">
                        <p className="font-bold text-lg text-primary">{testimonial.author}</p>
                        <p className="text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </Container>
  );
}
