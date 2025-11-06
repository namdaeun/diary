// @ts-nocheck
import { bundleMDX } from 'mdx-bundler';
import type { GitHubFile } from '../types';

// Move regex to top level for performance
const INDEX_PATTERN = /index.mdx?$/;

// @ts-nocheck - Complex type issues with remark plugins
async function compileMdxImpl<FrontmatterType extends Record<string, unknown>>({
  slug,
  files,
}: {
  slug: string;
  files: GitHubFile[];
}) {
  try {
    // @ts-ignore
    const { default: remarkAutolinkHeader } = await import(
      'remark-autolink-headings'
    );
    // @ts-ignore
    const { default: remarkGfm } = await import('remark-gfm');
    // @ts-ignore
    const { default: remarkSlug } = await import('remark-slug');
    // @ts-ignore
    const { default: rehypeHighlight } = await import('rehype-highlight');

    const indexFile = files.find(({ path }) => path.match(INDEX_PATTERN));
    if (!indexFile) {
      return null;
    }

    const rootDir = indexFile.path.replace(INDEX_PATTERN, '');
    const relativeFiles = files.map(({ path, content }) => ({
      path: path.replace(rootDir, './'),
      content,
    }));

    const filesObject = arrayToObject(relativeFiles, {
      keyname: 'path',
      valuename: 'content',
    });

    const { code, frontmatter } = await bundleMDX({
      source: indexFile.content,
      files: filesObject,
      xdmOptions: (options: {
        remarkPlugins: RemarkPlugin[];
        rehypePlugins: RehypePlugin[];
      }) => ({
        remarkPlugins: [
          ...(options.remarkPlugins ?? []),
          remarkSlug,
          [remarkAutolinkHeader, { behavior: 'wrap' }],
          remarkGfm,
        ],
        rehypePlugins: [...(options.rehypePlugins ?? []), rehypeHighlight],
      }),
    });

    return { code, frontmatter: frontmatter as FrontmatterType };
  } catch (_e) {
    throw new Error(`MDX Compilation failed for ${slug}`);
  }
}

function arrayToObject<Item extends Record<string, unknown>>(
  array: Item[],
  { keyname, valuename }: { keyname: keyof Item; valuename: keyof Item }
) {
  const obj: Record<string, Item[keyof Item]> = {};

  for (const item of array) {
    const key = item[keyname];
    if (typeof key !== 'string') {
      throw new Error(`Type of ${key} should be a string`);
    }
    const value = item[valuename];
    obj[key] = value;
  }

  return obj;
}

export { compileMdxImpl as compileMdx };
