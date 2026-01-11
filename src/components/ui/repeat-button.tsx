import { Repeat } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { reset } from '~/stores/snowfall';

export default function RepeatButton() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-second ml-auto shrink-0"
      onClick={() => {
        reset();
      }}
    >
      <Repeat className="size-5" />
      <span className="sr-only">Reset</span>
    </Button>
  );
}
