import groq from 'groq';
import { LINK_WITH_LABEL_FRAGMENT } from './linkWithLabel';

export const blockContentSimpleSchema = {
  name: 'blockContentSimple',
  title: 'Block content',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        {
          title: 'Heading with Divider',
          value: 'headingWithDivider',
          component: ({ children }: { children: React.ReactNode }) => (
            <>
              <hr className="mb-4" />
              <span className="t-h3 text-xl">{children}</span>
            </>
          )
        },
        {
          title: 'Heading without Divider',
          value: 'headingWithoutDivider',
          component: ({ children }: { children: React.ReactNode }) => (
            <span className="t-h3 text-xl">{children}</span>
          )
        }
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Italic', value: 'em' }
        ],
        annotations: [
          {
            name: 'link',
            title: 'Link',
            type: 'object',
            fields: [{ name: 'link', title: 'Link', type: 'link' }]
          }
        ]
      }
    }
  ]
};

export interface IBlockContentSimple {
  block: any[];
}

export const BLOCK_CONTENT_SIMPLE_FRAGMENT = groq`
  ...,
  markDefs[] {
    ...,
    _type == "link" => {
      ${LINK_WITH_LABEL_FRAGMENT} 
    }
  },
`;
