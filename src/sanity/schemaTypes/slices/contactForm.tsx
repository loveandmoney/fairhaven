import { getSectionSubtitle } from '@/sanity/lib/section-subtitle';
import { Mail } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const contactFormSchema = defineType({
  name: 'contactForm',
  title: 'Contact Form',
  type: 'object',
  icon: Mail,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Get in touch',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 3,
      initialValue:
        'Can’t find your dream home? Reach out to our sales team and we’ll be able to get you started.'
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
        subtitle: getSectionSubtitle('Contact Form', text),
        media: Mail
      };
    }
  }
});

export interface IContactForm {
  heading: string;
  text?: string;
}

export const CONTACT_FORM_FRAGMENT = `
  _type,  
  heading,
  text,
`;
