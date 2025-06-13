import { getSectionSubtitle } from '@/sanity/lib/section-subtitle';
import { Star } from 'lucide-react';
import { defineField, defineType } from 'sanity';
import { ALT_IMAGE_FRAGMENT, IAltImage } from '../objects/altImage';
import {
  ILinkWithLabel,
  LINK_WITH_LABEL_FRAGMENT
} from '../objects/linkWithLabel';

export const featureSectionSchema = defineType({
  name: 'featureSection',
  title: 'Feature Section',
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
      name: 'Text',
      title: 'text',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'altImage'
    }),
    defineField({
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      of: [{ type: 'linkWithLabel' }],
      validation: Rule => Rule.max(2)
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
        subtitle: getSectionSubtitle('CTA', text),
        media: Star
      };
    }
  }
});

export interface IFeatureSection {
  eyebrow?: string;
  heading: string;
  text?: string;
  image?: IAltImage;
  ctas?: ILinkWithLabel[];
}

export const FEATURE_SECTION_FRAGMENT = `
  _type,  
  eyebrow,
  heading,
  text,
  image {
    ${ALT_IMAGE_FRAGMENT}
  },
  ctas[] {
    ${LINK_WITH_LABEL_FRAGMENT}
  } 
`;
