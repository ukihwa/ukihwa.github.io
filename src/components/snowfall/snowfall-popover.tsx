import { Snowflake } from 'lucide-react';

import Customizer from '~/components/snowfall/customizer';
import { Button } from '~/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover';

interface Props {
  url: URL;
  align?: 'start' | 'end';
}

export default function SnowfallPopover({ url, align = 'start' }: Props) {
  return (
    <div className="flex items-center md:hidden">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <Snowflake className="h-5 w-5" />
            <span className="sr-only">configure snowfall</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align={align}
          className="z-40 flex w-[340px] flex-col p-6"
        >
          <Customizer url={url} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
