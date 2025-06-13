import type { Rule } from 'sanity';
import { SEO_FRAGMENT, ISeo } from '../objects/seo';
import { headerFragment, IHeader } from '../objects/header';
import { footerFragment, IFooter } from '../objects/footer';

export const settingsSchema = {
  name: 'settings',
  title: 'Global Settings',
  type: 'document',
  groups: [
    {
      name: 'settings',
      title: 'Settings'
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
      group: 'settings'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      title: 'Header',
      name: 'header',
      type: 'header',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      title: 'Footer',
      name: 'footer',
      type: 'footer',
      validation: (Rule: Rule) => Rule.required()
    }
  ],
  preview: {
    prepare: () => ({ title: 'Site settings' })
  }
};

export interface ISettings {
  header: IHeader;
  footer: IFooter;
  title: string;
  seo: ISeo;
}

export const SETTINGS_FRAGMENT = `
  title,
  seo {
    ${SEO_FRAGMENT}
  },
  header {
    ${headerFragment}
  },
  footer {
    ${footerFragment}
  }
`;
