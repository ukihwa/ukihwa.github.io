import { useTocScroll } from '~/hooks/use-toc-scroll';
import type { TOCSection } from '~/lib/schema/toc';
import { cn } from '~/lib/utils';

interface Props {
  toc: TOCSection[];
  className?: string;
}

export default function TableOfContent({ toc, className, ...props }: Props) {
  const { currentSectionSlug } = useTocScroll(toc);

  return (
    <ul {...props} className={cn('space-y-2.5 font-sans text-sm', className)}>
      {toc.map((section, i) => (
        <li key={i} className="flex">
          <a
            className={cn(
              'link text-second',
              currentSectionSlug === section.slug && 'text-body font-medium',
            )}
            href={`#${section.slug}`}
          >
            {section.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
