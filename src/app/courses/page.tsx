import { PageTitle } from "@/components/shared/page-title";
import { Container } from "@/components/shared/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { courses } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function CoursesPage() {
  return (
    <Container>
      <PageTitle
        description="Our curriculum is meticulously designed to meet the demands of the modern world. Explore our range of courses and find your path to success."
      >
        Our Courses
      </PageTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 animate-fade-in">
        {courses.map((course) => {
          const courseImage = PlaceHolderImages.find(p => p.id === course.image);
          return (
            <Card key={course.name} className="group overflow-hidden border-2 hover:border-accent transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
              <CardHeader className="p-0">
                {courseImage && (
                  <div className="relative h-64 w-full">
                    <Image
                      src={courseImage.imageUrl}
                      alt={courseImage.description}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      data-ai-hint={courseImage.imageHint}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="p-6 bg-black text-white">
                <h3 className="relative font-headline text-2xl font-bold">
                  <span className="relative z-10">{course.name}</span>
                  <span className="absolute -bottom-2 left-0 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-1/3 z-0"></span>
                </h3>
                <p className="mt-4 text-gray-300">{course.tagline}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}
