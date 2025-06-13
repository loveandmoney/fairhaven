import { defineField, defineType } from 'sanity';
import { IPagebuilder, PAGEBUILDER_FRAGMENT } from '../slices/_pagebuilder';
import { Home } from 'lucide-react';
import groq from 'groq';

export const homePageSchema = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: Home,
  fields: [
    defineField({
      name: 'pagebuilder',
      title: 'Pagebuilder',
      type: 'pagebuilder',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page'
      };
    }
  }
});

export const HOME_PAGE_FRAGMENT = groq`
  pagebuilder {
    ${PAGEBUILDER_FRAGMENT}
  },
`;

export interface IHomePage {
  pagebuilder: IPagebuilder;
}
