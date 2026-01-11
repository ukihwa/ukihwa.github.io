import { useEffect, useState } from 'react';

import LiquidEther from '~/components/liquid-ether';

const COLORS = {
  dark: ['#9BB5CE', '#A7C1D9', '#C5D8E8'], // Sierra Blue
  light: ['#7A9BB8', '#8FAFC8', '#A5C4D8'], // Sierra Blue (darker for light bg)
};

export default function ThemedLiquidEther() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <LiquidEther
      style={{ width: '100%', height: '100%' }}
      colors={isDark ? COLORS.dark : COLORS.light}
    />
  );
}
