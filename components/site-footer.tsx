import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/lib/site-data';

export function SiteFooter() {
  return <footer className="site-footer site-container" id="contact">
    <div className="footer-content"><span>© {new Date().getFullYear()} {profile.name}</span><div className="footer-tools"><a href="https://www.fumadocs.dev/" target="_blank" rel="noreferrer">Built with Fumadocs <ArrowUpRight size={11} /></a></div></div>
  </footer>;
}
