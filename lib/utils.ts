export function getSlug({ slug }: { slug: Array<string> }) {
  if (slug[0] === 'tag') {
    return {
      tag: slug[1],
      slug: `/docs/${slug.slice(2).join('/')}`,
    };
  }

  return { slug: `/docs/${slug.join('/')}` };
}

export function removeFromLast(path: string, key: string) {
  if (!path) {
    return path;
  }
  const i = path.lastIndexOf(key);
  return i === -1 ? path : path.substring(0, i);
}

export function addTagToSlug(slug: string, tag: string | null) {
  return tag ? slug.replace('/docs', `/docs/tag/${tag}`) : slug;
}
