import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { HeaderTools } from '@/components/header-tools';
import { SiteBrand } from '@/components/site-brand';
import { profile } from './site-data';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: profile.name,
    },
    slots: { navTitle: SiteBrand },
    themeSwitch: { enabled: false },
    searchToggle: { enabled: false },
    links: [
      { text: 'About', url: '/', active: 'url' },
      { text: 'Publications', url: '/publications', active: 'nested-url' },
      { text: 'Projects', url: '/projects', active: 'nested-url' },
      { text: 'Blog', url: '/blog', active: 'nested-url' },
      { text: 'CV', url: '/cv', active: 'nested-url' },
      { type: 'custom', secondary: true, children: <HeaderTools /> },
    ],
  };
}
