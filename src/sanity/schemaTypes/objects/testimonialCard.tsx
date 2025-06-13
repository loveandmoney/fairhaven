import { Star } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const testimonialCardSchema = defineType({
  name: 'testimonialCard',
  title: 'Testimonial Card',
  type: 'object',
  icon: Star,
  fields: [
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'attribution',
      title: 'Attribution',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => Rule.required()
    })
  ]
});

export interface ITestimonialCard {
  _key: string;
  testimonial: string;
  attribution: string;
  role: string;
}

export const TESTIMONIAL_CARD_FRAGMENT = `
  _key,
  testimonial,
  attribution,
  role
`;
