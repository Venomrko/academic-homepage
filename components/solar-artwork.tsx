import { preload } from 'react-dom';
import { SolarGlow } from './solar-glow';

export function SolarArtwork() {
  // Match CSS masks' anonymous CORS mode so the preload is reused.
  preload('/images/solar/sphere-mask.png', { as: 'image', crossOrigin: 'anonymous', fetchPriority: 'high' });

  return <div className="solar-artwork" aria-hidden="true">
    <SolarGlow />
    <div className="solar-sphere" />
  </div>;
}
