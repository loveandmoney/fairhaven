import { getSectionSubtitle } from '@/sanity/lib/section-subtitle';
import { Star } from 'lucide-react';
import { defineField, defineType } from 'sanity';
import { FEATURE_ICON_FRAGMENT, IFeatureIcon } from '../objects/featureIcon';

export const featureIcons4UpSchema = defineType({
  name: 'featureIcons4Up',
  title: 'Feature Icons 4 Up',
  type: 'object',
  icon: Star,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 3
    }),

    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'featureIcon' }],
      validation: Rule => Rule.min(4).max(4).required()
    })
  ],
  preview: {
    select: {
      heading: 'heading',
      text: 'text'
    },
    prepare({ heading, text }) {
      return {
        title: heading,
        subtitle: getSectionSubtitle('Feature Icons 4 Up', text),
        media: Star
      };
    }
  }
});

export interface IFeatureIcons4Up {
  eyebrow?: string;
  heading: string;
  text?: string;
  features: IFeatureIcon[];
}

export const FEATURE_ICONS_4_UP_FRAGMENT = `
  _type,  
  eyebrow,
  heading,
  text,
  features[] {
    ${FEATURE_ICON_FRAGMENT}
  },
`;
