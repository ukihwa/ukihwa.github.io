import { cn } from '~/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'bg-slate-900/10 dark:bg-slate-50/10 animate-pulse rounded-md',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
