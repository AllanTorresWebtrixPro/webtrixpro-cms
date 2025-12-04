import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'green' | 'dark';
  container?: boolean;
}

export function Section({
  children,
  className,
  background = 'white',
  container = true,
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-secondary-50',
    green: 'bg-primary-600',
    dark: 'bg-secondary-900',
  };

  const content = container ? (
    <div className="container-custom">{children}</div>
  ) : (
    children
  );

  return (
    <section className={cn(backgrounds[background], 'py-12 md:py-16 lg:py-20', className)}>
      {content}
    </section>
  );
}

