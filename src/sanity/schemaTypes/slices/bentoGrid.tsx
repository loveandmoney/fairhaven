import { getSectionSubtitle } from '@/sanity/lib/section-subtitle';
import { Star } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const bentoGridSchema = defineType({
  name: 'bentoGrid',
  title: 'Bento Grid',
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
      title: 'text',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'tiles',
      title: 'Tiles',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required()
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
        subtitle: getSectionSubtitle('Bento Grid', text),
        media: Star
      };
    }
  }
});

export interface IBentoGrid {
  eyebrow?: string;
  heading: string;
  text?: string;
  tiles: string;
}

export const BENTO_GRID_FRAGMENT = `
  _type,  
  eyebrow,
  heading,
  text,
  tiles
`;
