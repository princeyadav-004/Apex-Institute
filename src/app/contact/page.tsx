import { PageTitle } from "@/components/shared/page-title";
import { Container } from "@/components/shared/container";
import { ContactForm } from "@/components/features/contact-form";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <Container>
      <PageTitle
        description="We are here to assist you. Reach out to us for admissions, queries, or any other information. We look forward to hearing from you."
      >
        Get in Touch
      </PageTitle>

      <div className="grid md:grid-cols-2 gap-16 animate-fade-in">
        <div className="bg-card p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold font-headline mb-6 text-primary">Send us a Message</h2>
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold font-headline text-primary">Contact Information</h2>
            <div className="w-20 h-0.5 bg-accent mt-2 mb-6"></div>
            <p className="text-muted-foreground">
              Our support team is available 24/7 to answer your questions.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent p-3 rounded-full text-accent-foreground">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Our Address</h3>
                <p className="text-muted-foreground">123 Education Lane, Knowledge City, 45678</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent p-3 rounded-full text-accent-foreground">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Phone Number</h3>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-accent p-3 rounded-full text-accent-foreground">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email Address</h3>
                <p className="text-muted-foreground">contact@apexinstitute.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
