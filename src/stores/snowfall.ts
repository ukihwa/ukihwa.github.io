import { persistentAtom } from '@nanostores/persistent';
import type { SnowfallProps } from 'react-snowfall';

type State = {
  config: SnowfallProps;
  visible: boolean;
};

export const STORAGE_SNOWFALL_KEY = 'snowfall' as const;

const initialState: State = {
  config: {
    color: '#dee4fd',
    snowflakeCount: 200,
    radius: [0.5, 3.0],
    speed: [0.5, 3.0],
    wind: [-0.5, 2.0],
    rotationSpeed: [-1.0, 1.0],
    opacity: [0.1, 0.2],
  },
  visible: true,
};

export const snowfallStore = persistentAtom<State>(
  STORAGE_SNOWFALL_KEY,
  initialState,
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);

export function updateConfig(update: Partial<SnowfallProps>) {
  snowfallStore.set({
    config: { ...snowfallStore.get().config, ...update },
    visible: snowfallStore.get().visible,
  });
}

export function toggleVisible() {
  snowfallStore.set({
    config: snowfallStore.get().config,
    visible: !snowfallStore.get().visible,
  });
}

export function reset() {
  snowfallStore.set(initialState);
}
