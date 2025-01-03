import { Badge } from '~/components/ui/badge';
import { Label } from '~/components/ui/label';
import { Slider } from '~/components/ui/slider';
import { useI18n } from '~/lib/i18n';
import { cn } from '~/lib/utils';

interface Props {
  url: URL;
  label: string;
  min: number;
  max: number;
  step: number;
  values: [number] | [number, number];
  onValueChange: (value: number[]) => void;
  className?: string;
}

export default function SnowfallSlider({
  url,
  label,
  min,
  max,
  step,
  values,
  onValueChange,
  className,
}: Props) {
  const { t } = useI18n(url);

  return (
    <div className={cn('space-y-3 pt-2', className)}>
      <Label className="text-xs">
        {label}
        {values.length > 1 ? (
          <>
            <Badge className="ml-2 rounded-full">
              {t('snowfall.min')} {values[0]}
            </Badge>
            <Badge className="ml-1 rounded-full">
              {t('snowfall.max')} {values[1]}
            </Badge>
          </>
        ) : (
          <Badge className="ml-2 rounded-full">{values[0]}</Badge>
        )}
      </Label>
      <Slider
        value={values}
        min={min}
        max={max}
        step={step}
        onValueChange={onValueChange}
      />
    </div>
  );
}
