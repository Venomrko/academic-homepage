import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function NotFound() { return <main id="main-content" className="site-container not-found"><div className="eyebrow">404 / AN UNEXPLORED PAGE</div><h1>This path ends here.</h1><p>There’s plenty more to explore back at the homepage.</p><Link className="button button-primary" href="/"><ArrowLeft size={16} /> Back to About</Link></main>; }
