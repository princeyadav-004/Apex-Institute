import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8', className)}>
      {children}
    </div>
  );
}
