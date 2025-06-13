import groq from 'groq';
import type { Rule } from 'sanity';
import { IImage } from '@/sanity/lib/types';
import { IMAGE_FRAGMENT } from '@/sanity/lib/fragments';

export const seoSchema = {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false
  },
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.max(50).warning('Longer titles may be truncated by search engines')
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule: Rule) =>
        Rule.max(150).warning(
          'Longer descriptions may be truncated by search engines'
        )
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image'
    },
    {
      title: 'Favicon',
      name: 'favicon',
      type: 'image'
    },
    {
      name: 'noIndex',
      title: 'Prevent indexing',
      description:
        "Enabling this will request that search engines don't index this page.",
      type: 'boolean',
      initialValue: false
    }
  ]
};

export interface ISeo {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: IImage;
  favicon?: IImage;
  noIndex?: boolean;
}

export const SEO_FRAGMENT = groq`
  metaTitle,
  metaDescription,
  ogImage {
    ${IMAGE_FRAGMENT}
  },
  favicon {
    ${IMAGE_FRAGMENT}
  }
`;
