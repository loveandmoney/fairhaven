import { IconInput } from '@/sanity/components/IconInput';
import { lucideKeys, TLucideIcon } from '@/sanity/lib/lucide';
import groq from 'groq';
import { CirclePlus } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const iconSchema = defineType({
  name: 'icon',
  title: 'Icon',
  type: 'object',
  icon: CirclePlus,
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: lucideKeys,
        layout: 'dropdown'
      },
      validation: Rule => Rule.required(),
      components: {
        input: IconInput
      }
    })
  ]
});

export interface IIcon {
  icon: TLucideIcon;
}

export const PDF_FILE_FRAGMENT = groq`
  _key,
  title,
  "url": file.asset->url
`;
