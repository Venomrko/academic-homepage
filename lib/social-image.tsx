import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { profile } from '@/lib/data/profile';
import { siteUrl } from '@/lib/site-metadata';

type SocialImageOptions = {
  title: string;
  category?: string;
};

// ImageResponse uses the existing OTF display fonts, with no remote font fetch.
const fonts = Promise.all([
  readFile(join(process.cwd(), 'public/fonts/anthropic-display-regular.otf')),
  readFile(join(process.cwd(), 'public/fonts/anthropic-sans-display-medium.otf')),
]);

export async function socialImage({
  title,
  category = 'Research & Writing',
}: SocialImageOptions) {
  const [serif, sans] = await fonts;
  const fontSize = title.length > 95 ? 51 : title.length > 65 ? 60 : 76;

  return new ImageResponse(
    <div style={{
      display: 'flex', flexDirection: 'column', width: '100%', height: '100%',
      padding: '54px 66px', background: '#f8f8f3', color: '#141413',
      fontFamily: 'Anthropic Sans', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', width: 640, height: 640, right: -225, top: -210,
        borderRadius: '50%', background: 'radial-gradient(circle at 35% 65%, #f7dba7, #f0b68b)',
        opacity: 0.5,
      }} />
      <div style={{
        display: 'flex', alignItems: 'center', gap: 13, fontSize: 25, position: 'relative',
      }}>
        <svg width="31" height="31" viewBox="0 0 24 24" fill="#FF5522">
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
        </svg>
        <span>{profile.name}</span>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        flex: 1, position: 'relative', padding: '20px 0 28px',
      }}>
        <div style={{ fontSize: 17, letterSpacing: 3, color: '#79502e', marginBottom: 22 }}>
          {category.toUpperCase()}
        </div>
        <div style={{
          display: 'flex', fontFamily: 'Anthropic Serif', fontSize,
          lineHeight: 1.12, letterSpacing: -1.6, maxWidth: 1050,
        }}>
          {title}
        </div>
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderTop: '1px solid #cfcec3', paddingTop: 20, fontSize: 18, color: '#565a4f',
        position: 'relative',
      }}>
        <span>{new URL(siteUrl).hostname}</span>
        <span>Research · Projects · Notes</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Anthropic Serif', data: serif, weight: 400, style: 'normal' },
        { name: 'Anthropic Sans', data: sans, weight: 500, style: 'normal' },
      ],
    },
  );
}
