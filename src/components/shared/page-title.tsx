import type { ReactNode } from 'react';
import { GoldSeparator } from './gold-separator';

interface PageTitleProps {
  children: ReactNode;
  description?: string;
}

export function PageTitle({ children, description }: PageTitleProps) {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <h1 className="text-4xl font-bold tracking-tight font-headline text-primary sm:text-5xl md:text-6xl">
        {children}
      </h1>
      {description && (
         <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">{description}</p>
      )}
     <GoldSeparator className="mt-6" />
    </div>
  );
}
