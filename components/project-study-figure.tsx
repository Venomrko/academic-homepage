import Image from 'next/image';
import type { ProjectFigure } from '@/lib/site-data';

export function ProjectStudyFigure({ figure }: { figure: ProjectFigure }) {
  return <figure className="project-study-figure">
    <div className="project-study-image">
      <Image
        src={figure.src}
        width={figure.width}
        height={figure.height}
        sizes="(min-width: 1496px) 301px, (min-width: 1280px) calc((100vw - 302px) / 4), (min-width: 1000px) calc((100vw - 258px) / 3), (min-width: 768px) calc((100vw - 166px) / 2), (min-width: 641px) calc((100vw - 142px) / 2), calc(100vw - 82px)"
        alt={figure.alt}
      />
    </div>
    <figcaption>{figure.caption}</figcaption>
  </figure>;
}
