import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from '~/lib/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none items-center select-none',
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="bg-selection relative h-1.5 w-full grow overflow-hidden rounded-full">
      <SliderPrimitive.Range className="absolute h-full bg-gray-900" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="bg-page block h-4 w-4 rounded-full border border-gray-400 shadow transition-colors focus-visible:ring-1 focus-visible:ring-gray-900 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
    <SliderPrimitive.Thumb className="bg-page block h-4 w-4 rounded-full border border-gray-400 shadow transition-colors focus-visible:ring-1 focus-visible:ring-gray-900 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
