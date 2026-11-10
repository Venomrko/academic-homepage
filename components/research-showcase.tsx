import { researchAreas } from '@/lib/site-data';

export function ResearchShowcase() {
  return (
    <section className="research-showcase landing-width" aria-labelledby="research-title">
      <div className="research-heading">
        <h2 id="research-title">Research<span className="accent-period">.</span></h2>
      </div>

      <div className="research-directions">
        {researchAreas.map((area) => (
          <article className="research-direction" key={area.title}>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
