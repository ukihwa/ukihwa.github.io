import { useStore } from '@nanostores/react';
import Snowfall from 'react-snowfall';

import SnowfallPopover from '~/components/snowfall/snowfall-popover';
import SnowfallSheet from '~/components/snowfall/snowfall-sheet';
import { snowfallStore } from '~/stores/snowfall';

interface Props {
  url: URL;
}

export default function SnowfallCustomizer({ url }: Props) {
  const { config, visible } = useStore(snowfallStore);

  return (
    <>
      <div className="flex items-center gap-2">
        <SnowfallSheet url={url} />
        <SnowfallPopover url={url} align="end" />
      </div>
      {visible && (
        <Snowfall
          color={config.color}
          snowflakeCount={config.snowflakeCount}
          radius={config.radius}
          speed={config.speed}
          wind={config.wind}
          opacity={config.opacity}
        />
      )}
    </>
  );
}
