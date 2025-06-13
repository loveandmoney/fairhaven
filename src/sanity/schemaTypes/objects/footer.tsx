import { ILinkWithLabel, LINK_WITH_LABEL_FRAGMENT } from './linkWithLabel';

export const footerSchema = {
  title: 'Footer',
  name: 'footer',
  type: 'object',
  fields: [
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{ type: 'linkWithLabel' }]
    }
  ]
};

export const footerFragment = `
  links[] {
    ${LINK_WITH_LABEL_FRAGMENT}
  }
`;

export interface IFooter {
  links: ILinkWithLabel[];
}
