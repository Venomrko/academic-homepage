import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { TravelMap } from '@/components/travel-map';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    TravelMap,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
