import NextLink from 'next/link';
import type { ComponentProps } from 'react';

/**
 * next/link with viewport prefetching off. With it on, one page view fetched
 * about 110 other pages as _rsc payloads: wasted data on phones, and more than
 * half of Googlebot's crawl requests. Pass prefetch to opt a link back in.
 */
export default function Link(props: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={false} {...props} />;
}
