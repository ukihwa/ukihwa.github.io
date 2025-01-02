import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { getDefaultPathname, languages, useI18n } from '~/lib/i18n';

import { DotIcon, HeroiconsLanguage } from '../ui/icons';

interface Props {
  url: URL;
  align?: 'start' | 'end';
}

export default function LanguageDropdown({ url, align = 'start' }: Props) {
  const { lang, p } = useI18n(url);

  const pathname = getDefaultPathname(url);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <HeroiconsLanguage className="h-5 w-5" />
          <span className="sr-only">select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        {Object.entries(languages).map(([language, label]) => (
          <DropdownMenuItem key={language} className="justify-between" asChild>
            <a href={p(pathname, language)}>
              {label}
              {language === lang && <DotIcon />}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
