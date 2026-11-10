'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

const GrainGradient = dynamic(
  () => import('@paper-design/shaders-react').then((module) => module.GrainGradient),
  { ssr: false },
);

// Glow settings adapted from the Fumadocs homepage (MIT).
export function SolarGlow() {
  const { resolvedTheme } = useTheme();
  const glow = useRef<HTMLDivElement>(null);
  const [supportsWebGL, setSupportsWebGL] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let checkedWebGL = false;
    const updateMotion = () => {
      setReducedMotion(preference.matches);
      if (preference.matches || checkedWebGL) return;
      checkedWebGL = true;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('webgl2');
      setSupportsWebGL(Boolean(context));
      context?.getExtension('WEBGL_lose_context')?.loseContext();
    };
    updateMotion();
    preference.addEventListener('change', updateMotion);

    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (glow.current) observer.observe(glow.current);
    return () => {
      preference.removeEventListener('change', updateMotion);
      observer.disconnect();
    };
  }, []);

  const dark = resolvedTheme === 'dark';
  return <div className="solar-glow" ref={glow}>
    {supportsWebGL && !reducedMotion && resolvedTheme && <GrainGradient
      className="solar-grain"
      colors={dark ? ['#39BE1C', '#9c2f05', '#7A2A0000'] : ['#fcfc51', '#ffa057', '#7A2A0020']}
      colorBack="#00000000"
      softness={1}
      intensity={0.9}
      noise={0.5}
      speed={visible ? 0.5 : 0}
      shape="corners"
      minPixelRatio={1}
      maxPixelCount={1440 * 900}
    />}
  </div>;
}
