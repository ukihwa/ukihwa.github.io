import { Snowflake } from 'lucide-react';

import Customizer from '~/components/snowfall/customizer';
import { Button } from '~/components/ui/button';
import RepeatButton from '~/components/ui/repeat-button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet';
import { useI18n } from '~/lib/i18n';

interface Props {
  url: URL;
}

export default function SnowfallSheet({ url }: Props) {
  const { t } = useI18n(url);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hidden md:flex">
          <Snowflake className="h-5 w-5" />
          <span className="sr-only">configure snowfall</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="hidden">
          <div className="flex items-start pt-4 md:pt-0">
            <div className="space-y-1 pr-2">
              <SheetTitle className="text-base font-semibold leading-none tracking-tight">
                {t('snowfall.title')}
              </SheetTitle>
              <SheetDescription className="text-xs">
                {t('snowfall.description')}
              </SheetDescription>
            </div>
            <RepeatButton />
          </div>
        </SheetHeader>
        <Customizer url={url} />
      </SheetContent>
    </Sheet>
  );
}
