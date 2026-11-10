import localFont from 'next/font/local';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { profile } from '@/lib/site-data';
import { siteDescription, siteTitle, siteUrl } from '@/lib/site-metadata';

const anthropicSans = localFont({
  src: '../public/fonts/AnthropicSans-Variable.woff2',
  variable: '--font-sans',
  display: 'swap',
  weight: '300 800',
});

const anthropicSerif = localFont({
  src: '../public/fonts/AnthropicSerif-Variable.woff2',
  variable: '--font-serif',
  display: 'swap',
  weight: '300 800',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: `%s | ${profile.name}` },
  description: siteDescription,
  keywords: [
    'Ren Zhuang',
    '庄任',
    'Large Language Models',
    'LLM Reasoning',
    'Self-Correction',
    'Reinforcement Learning',
    'Efficient Inference',
    'Multi-Agent Systems',
    'Cognitive Modeling',
    'Hangzhou Normal University',
    'Academic Homepage',
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  alternateName: '庄任',
  url: siteUrl,
  jobTitle: profile.role,
  affiliation: {
    '@type': 'Organization',
    name: profile.institution,
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Hangzhou Normal University',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Shaoxing University',
    },
  ],
  sameAs: [
    profile.googleScholar,
    profile.orcid,
    profile.dblp,
    profile.github,
  ].filter(Boolean),
  knowsAbout: [
    'Large Language Model Reasoning',
    'Reinforcement Learning',
    'Self-Correction',
    'Efficient Inference',
    'Test-Time Compute',
    'Multi-Agent Systems',
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${anthropicSans.variable} ${anthropicSerif.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <RootProvider theme={{ defaultTheme: 'system', enableSystem: true, disableTransitionOnChange: true }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
