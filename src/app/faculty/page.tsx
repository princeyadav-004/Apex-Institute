import { PageTitle } from "@/components/shared/page-title";
import { Container } from "@/components/shared/container";
import { Card } from "@/components/ui/card";
import { faculty } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function FacultyPage() {
  return (
    <Container>
      <PageTitle
        description="Meet the brilliant minds shaping the future. Our faculty comprises industry experts and renowned academics dedicated to excellence in teaching and research."
      >
        Our Esteemed Faculty
      </PageTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
        {faculty.map((member) => {
          const facultyImage = PlaceHolderImages.find(p => p.id === member.image);
          return (
            <Card key={member.name} className="text-center overflow-hidden border-0 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
              {facultyImage && (
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={facultyImage.imageUrl}
                    alt={facultyImage.description}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={facultyImage.imageHint}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              )}
              <div className="p-6 bg-card">
                <h3 className="font-headline text-xl font-bold text-primary">{member.name}</h3>
                <p className="mt-2 text-sm font-bold text-accent">{member.title}</p>
                <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}
