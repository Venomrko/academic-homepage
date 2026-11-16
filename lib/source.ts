import { loader, type MetaData, type StaticSource } from 'fumadocs-core/source';
import { defineCollections } from 'fumadocs-mdx/macro';
import { pageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';
import { estimateReadingTime } from '@/lib/format';

const articles = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: pageSchema.extend({
    date: z.string(),
    // Set only after a substantive revision; the publication date stays intact.
    updated: z.iso.date().optional(),
    category: z.string(),
    cardLabel: z.string().optional(),
    section: z.enum(['life', 'work']).default('work'),
    // Research cards use their latest conference's opening date for sorting.
    latestConferenceDate: z.string().optional(),
    lang: z.string().default('en'),
    draft: z.boolean().default(false),
    // Travel time is separate from the date the article was written.
    journeyDate: z.string().optional(),
  }),
});

const source = articles.toFumadocsSource();

const sourceWithReadingTime: StaticSource<{
  pageData: (typeof articles.entries)[number] & { readingTime: string };
  metaData: MetaData;
}> = {
  ...source,
  files: source.files
    .filter((file) => file.type !== 'page' || !file.data.draft)
    .map((file) => {
      if (file.type !== 'page') return file;
      const { headings, contents } = file.data.structuredData;
      return {
        ...file,
        data: {
          ...file.data,
          readingTime: estimateReadingTime(
            [...headings, ...contents].map((item) => item.content).join(' '),
          ),
        },
      };
    }),
};

export const blog = loader({
  baseUrl: '/blog',
  source: sourceWithReadingTime,
});
