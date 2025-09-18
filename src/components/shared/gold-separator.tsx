import { cn } from '@/lib/utils';

export function GoldSeparator({ className }: { className?: string }) {
  return (
    <div className={cn('flex justify-center', className)}>
      <div className="h-0.5 w-20 bg-accent" />
    </div>
  );
}
