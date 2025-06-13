import { getSectionSubtitle } from '@/sanity/lib/section-subtitle';
import { Star } from 'lucide-react';
import { defineField, defineType } from 'sanity';
import {
  ITestimonialCard,
  TESTIMONIAL_CARD_FRAGMENT
} from '../objects/testimonialCard';

export const featuredTestimonialsSchema = defineType({
  name: 'featuredTestimonials',
  title: 'Featured Testimonials',
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
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'testimonialsCard' }],
      validation: Rule => Rule.min(3).max(3).required()
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
        subtitle: getSectionSubtitle('Featured Testimonials', text),
        media: Star
      };
    }
  }
});

export interface IFeaturedTestimonials {
  eyebrow?: string;
  heading: string;
  text?: string;
  testimonials: ITestimonialCard[];
}

export const FEATURED_TESTIMONIALS_FRAGMENT = `
  _type,  
  eyebrow,
  heading,
  text,
  testimonials[] {
    ${TESTIMONIAL_CARD_FRAGMENT}
  },
`;
