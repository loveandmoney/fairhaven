import type { Rule } from 'sanity';
import { File } from 'lucide-react';
import { IPagebuilder, PAGEBUILDER_FRAGMENT } from '../slices/_pagebuilder';
import { ISeo, SEO_FRAGMENT } from '../objects/seo';

export const pageSchema = {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: File,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'pagebuilder',
      title: 'Pagebuilder',
      type: 'pagebuilder',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo'
    }
  ]
};

export const PAGE_FRAGMENT = `
  title,
  "slug": slug.current,  
  pagebuilder {
    ${PAGEBUILDER_FRAGMENT}
  },
  seo {
    ${SEO_FRAGMENT}
  }
`;

export interface IPage {
  title: string;
  slug: string;
  pagebuilder: IPagebuilder;
  seo?: ISeo;
}
