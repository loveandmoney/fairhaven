import { Star } from 'lucide-react';
import { defineField, defineType } from 'sanity';
import { IIcon } from './icon';
import { LucideIcon } from '@/sanity/components/LucideIcon';

export const featureIconSchema = defineType({
  name: 'featureIcon',
  title: 'Feature Icon',
  type: 'object',
  icon: Star,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'icon',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      icon: 'icon.icon'
    },
    prepare({ title, description, icon }) {
      return {
        title: title,
        subtitle: description,
        media: <LucideIcon icon={icon} />
      };
    }
  }
});

export interface IFeatureIcon {
  _key: string;
  title: string;
  description?: string;
  icon: IIcon;
}

export const FEATURE_ICON_FRAGMENT = `
  _key,
  title,
  description,
  icon
`;
