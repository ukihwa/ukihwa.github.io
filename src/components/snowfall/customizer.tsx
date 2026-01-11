import { useStore } from '@nanostores/react';
import { Check, Cloud, CloudSnow } from 'lucide-react';
import * as React from 'react';

import SnowfallSlider from '~/components/snowfall/snowfall-slider';
import { Button } from '~/components/ui/button';
import { Label } from '~/components/ui/label';
import RepeatButton from '~/components/ui/repeat-button';
import { ScrollArea } from '~/components/ui/scroll-area';
import { Skeleton } from '~/components/ui/skeleton';
import { useI18n } from '~/lib/i18n';
import { cn } from '~/lib/utils';
import { snowfallStore, toggleVisible, updateConfig } from '~/stores/snowfall';

const colors = [
  '#dee4fd',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
  '#607d8b',
];

interface Props {
  url: URL;
}

export default function Customizer({ url }: Props) {
  const { t } = useI18n(url);

  const [mounted, setMounted] = React.useState(false);

  const { config, visible } = useStore(snowfallStore);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex h-1 flex-1 flex-col space-y-4 md:space-y-6">
      <div className="flex items-start pt-4 md:pt-0">
        <div className="space-y-1 pr-2">
          <div className="font-semibold leading-none tracking-tight">
            {t('snowfall.title')}
          </div>
          <div className="text-xs text-second">{t('snowfall.description')}</div>
        </div>
        <RepeatButton />
      </div>
      <ScrollArea className="flex h-1 flex-1">
        <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
          <div className="space-y-1.5">
            <Label className="text-xs">{t('snowfall.color')}</Label>
            <div className="grid grid-cols-3 gap-2 md:grid-cols-2">
              {colors.map((color) => {
                const isActive = config.color === color;
                return mounted ? (
                  <Button
                    variant={'outline'}
                    size="sm"
                    key={color}
                    onClick={() => {
                      updateConfig({
                        color,
                      });
                    }}
                    className={cn(
                      'justify-start text-[.625rem]',
                      isActive && 'border-2 border-gray-900',
                    )}
                  >
                    <span
                      className={cn(
                        'mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full',
                      )}
                      style={{ backgroundColor: color }}
                    >
                      {isActive && <Check className="h-4 w-4 text-white" />}
                    </span>
                    {color}
                  </Button>
                ) : (
                  <Skeleton className="h-8 w-full" key={color} />
                );
              })}
            </div>
          </div>
          <SnowfallSlider
            url={url}
            label={t('snowfall.snowflakeCount')}
            min={0}
            max={750}
            step={1}
            values={config.snowflakeCount ? [config.snowflakeCount] : [200]}
            onValueChange={(value) => {
              updateConfig({ snowflakeCount: value[0] });
            }}
            className="pt-0"
          />
          <SnowfallSlider
            url={url}
            label={t('snowfall.speed')}
            min={0}
            max={10}
            step={0.5}
            values={config.speed ? config.speed : [1.5, 3.0]}
            onValueChange={(value) => {
              updateConfig({ speed: [value[0], value[1]] });
            }}
          />
          <SnowfallSlider
            url={url}
            label={t('snowfall.wind')}
            min={-1}
            max={10}
            step={0.5}
            values={config.wind ? config.wind : [-0.5, 2.0]}
            onValueChange={(value) => {
              updateConfig({ speed: [value[0], value[1]] });
            }}
          />
          <SnowfallSlider
            url={url}
            label={t('snowfall.radius')}
            min={-1}
            max={10}
            step={0.5}
            values={config.radius ? config.radius : [0.5, 3.0]}
            onValueChange={(value) => {
              updateConfig({ speed: [value[0], value[1]] });
            }}
          />

          <div className="space-y-1.5">
            <Label className="text-xs">{t('snowfall.mode')}</Label>
            <div className="grid grid-cols-3 gap-2 md:grid-cols-2">
              {mounted ? (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleVisible();
                    }}
                    className={cn(visible && 'border-2 border-gray-900')}
                  >
                    <CloudSnow className="mr-1 size-5 -translate-x-1" />
                    {t('snowfall.on')}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleVisible();
                    }}
                    className={cn(!visible && 'border-2 border-gray-900')}
                  >
                    <Cloud className="mr-1 size-5 -translate-x-1" />
                    {t('snowfall.off')}
                  </Button>
                </>
              ) : (
                <>
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                </>
              )}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
