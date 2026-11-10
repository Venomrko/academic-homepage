'use client';

import Image from 'next/image';
import { Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { ProjectIllustration } from '@/lib/site-data';

function LoopIllustration({ illustration, label }: { illustration: ProjectIllustration; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [userStarted, setUserStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inViewport = false;
    const updateVisibility = () => setVisible(inViewport && document.visibilityState === 'visible');
    const updatePreference = () => setReducedMotion(preference.matches);
    const observer = new IntersectionObserver(([entry]) => {
      inViewport = entry.isIntersecting;
      updateVisibility();
    }, { threshold: 0.1 });
    observer.observe(video);
    updatePreference();
    preference.addEventListener('change', updatePreference);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', updatePreference);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (visible && (!reducedMotion || userStarted)) setLoaded(true);
  }, [visible, reducedMotion, userStarted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!loaded || !visible || userPaused || (reducedMotion && !userStarted)) {
      video.pause();
      return;
    }
    let cancelled = false;
    void video.play().catch(() => {
      if (!cancelled) setPlaying(false);
    });
    return () => {
      cancelled = true;
      video.pause();
    };
  }, [loaded, visible, userPaused, reducedMotion, userStarted]);

  const togglePlayback = () => {
    if (playing) {
      setUserPaused(true);
    } else {
      setUserStarted(true);
      setUserPaused(false);
      setLoaded(true);
    }
  };
  const action = `${playing ? 'Pause' : 'Play'} ${label} animation`;

  return <>
    <video
      ref={videoRef}
      src={loaded ? illustration.video : undefined}
      poster={illustration.src}
      width={illustration.width}
      height={illustration.height}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
    />
    <button type="button" className="project-animation-toggle" onClick={togglePlayback} aria-label={action} title={action}>
      {playing ? <Pause size={13} aria-hidden="true" /> : <Play size={13} aria-hidden="true" />}
    </button>
  </>;
}

export function ProjectComponentArt({ illustration, label }: { illustration: ProjectIllustration; label: string }) {
  return <div className="project-component-art">
    {illustration.video ? <LoopIllustration illustration={illustration} label={label} /> : <Image
      src={illustration.src}
      width={illustration.width}
      height={illustration.height}
      sizes="(min-width: 1496px) 225px, (min-width: 1000px) calc((100vw - 374px) / 5), (min-width: 641px) calc((100vw - 172px) / 2), calc(100vw - 86px)"
      alt=""
    />}
  </div>;
}
