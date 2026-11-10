export function BlogEmptyState({ section }: { section: 'life' | 'work' }) {
  const isLife = section === 'life';

  return <section className="blog-empty" aria-label={isLife ? 'Personal essays' : 'Research and work notes'}>
    <h2>{isLife ? 'Still a blank page' : 'Research & work'}<span className="accent-period">.</span></h2>
    <p>{isLife ? 'Personal essays will appear here.' : 'No notes published yet.'}</p>
  </section>;
}
