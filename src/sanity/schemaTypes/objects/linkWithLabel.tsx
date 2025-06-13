import groq from 'groq';
import type { Rule } from 'sanity';
import { ExternalLink, Link } from 'lucide-react';
import { ILink, LINK_FRAGMENT } from './link';

export const linkWithLabelSchema = {
  name: 'linkWithLabel',
  title: 'Link wth Label',
  type: 'object',
  icon: Link,
  fields: [
    {
      name: 'link',
      type: 'link'
    },
    {
      name: 'label',
      title: 'Label',
      description: 'Optional if link is a reference to another document.',
      type: 'string',
      validation: (Rule: Rule) => {
        // Validation can likely be better here
        return Rule.custom((field: unknown, context: any) => {
          return !context.parent?.link?.page && field === undefined
            ? 'Required'
            : true;
        });
      }
    }
  ],
  preview: {
    select: {
      refLabel: 'link.page.title',
      title: 'label',
      slug: 'link.page'
    },
    prepare({
      refLabel,
      title,
      slug
    }: {
      refLabel?: string;
      title?: string;
      slug?: any;
    }) {
      return {
        title: title || refLabel,
        media: slug ? Link : ExternalLink
      };
    }
  }
};

export interface ILinkWithLabel {
  _key: string;
  label: string;
  link: ILink;
}

export const LINK_WITH_LABEL_FRAGMENT = groq`
  _key,
  "label": coalesce(label, link.page->title, null),
  link {
    ${LINK_FRAGMENT}
  }
`;
