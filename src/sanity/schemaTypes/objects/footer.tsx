import { ILinkWithLabel, LINK_WITH_LABEL_FRAGMENT } from './linkWithLabel';

export const footerSchema = {
  title: 'Footer',
  name: 'footer',
  type: 'object',
  fields: [
    {
      title: 'Quick Links',
      name: 'quickLinks',
      type: 'array',
      of: [{ type: 'linkWithLabel' }]
    },
    {
      title: 'Social Links',
      name: 'socialLinks',
      type: 'array',
      of: [{ type: 'linkWithLabel' }],
      description: 'Links to social media profiles'
    }
  ]
};

export const footerFragment = `
  quickLinks[] {
    ${LINK_WITH_LABEL_FRAGMENT}
  },
  socialLinks[] {
    ${LINK_WITH_LABEL_FRAGMENT}
  }
`;

export interface IFooter {
  quickLinks: ILinkWithLabel[];
  socialLinks: ILinkWithLabel[];
}
