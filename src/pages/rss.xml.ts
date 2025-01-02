import rss from '@astrojs/rss';

import { SITE } from '~/constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(context: any) {
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: [],
  });
}
