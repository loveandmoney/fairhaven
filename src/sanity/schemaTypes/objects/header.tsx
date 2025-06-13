import { ILinkWithLabel, LINK_WITH_LABEL_FRAGMENT } from './linkWithLabel';

export const headerSchema = {
  title: 'Header',
  name: 'header',
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

export const headerFragment = `
  links[] {
    ${LINK_WITH_LABEL_FRAGMENT}
  }  
`;

export interface IHeader {
  links: ILinkWithLabel[];
}
