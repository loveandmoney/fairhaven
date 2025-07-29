import { Rule } from 'sanity';
import { ILinkWithLabel, LINK_WITH_LABEL_FRAGMENT } from './linkWithLabel';

export const footerSchema = {
  title: 'Footer',
  name: 'footer',
  type: 'object',
  fields: [
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule: Rule) => Rule.required()
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'Optional if value is same as label'
            },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              description: 'Type of contact information',
              options: {
                list: [
                  { title: 'Phone', value: 'phone' },
                  { title: 'Email', value: 'email' },
                  { title: 'Address', value: 'map' },
                  { title: 'Location', value: 'clock' }
                ]
              },
              validation: (Rule: Rule) => Rule.required()
            }
          ]
        }
      ]
    },
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
  },
  contactInfo[] {
    label,
    value,
    type
  }
`;

export interface IContactInfo {
  label: string;
  value?: string;
  type: 'phone' | 'email' | 'map' | 'clock';
}

export interface IFooter {
  quickLinks: ILinkWithLabel[];
  socialLinks: ILinkWithLabel[];
  contactInfo: IContactInfo[];
}
