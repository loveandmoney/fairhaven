import { IconInput } from '@/sanity/components/IconInput';
import { curatedLucideIcons } from '@/sanity/lib/lucide';
import groq from 'groq';
import { CirclePlus, LucideIcon } from 'lucide-react';
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
        list: curatedLucideIcons,
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
  icon: LucideIcon;
}

export const PDF_FILE_FRAGMENT = groq`
  _key,
  title,
  "url": file.asset->url
`;
