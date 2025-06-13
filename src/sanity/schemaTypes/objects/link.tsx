import groq from 'groq';
import type { Rule } from 'sanity';

export const linkSchema = {
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: () => '🔗',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{ type: 'page' }],
      hidden: ({
        parent,
        value
      }: {
        parent: {
          url?: string;
        };
        value: any;
      }) => !!(!value && parent?.url)
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule: Rule) => [
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel', '#'],
          allowRelative: true
        })
      ],
      hidden: ({
        parent,
        value
      }: {
        parent: {
          page?: any;
        };
        value: any;
      }) => !!(!value && parent?.page)
    }
  ],
  options: { collapsed: false },
  preview: {
    select: {
      title: 'page.title',
      url: 'url'
    },
    prepare({ title, url }: { title?: string; url?: string }) {
      return {
        title: title || url
      };
    }
  }
};

export interface ILink {
  to: string;
}

export const LINK_FRAGMENT = groq`
  page->_type == "page" => {
    "to": "/" + page->slug.current
  },
  defined(url) => {
    "to": url
  }
`;
