import groq from 'groq';
import { FileText } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const pdfFileSchema = defineType({
  name: 'pdfFile',
  title: 'PDF File',
  type: 'object',
  icon: FileText,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: { accept: '.pdf' },
      validation: Rule => Rule.required()
    })
  ]
});

export interface IPdfFile {
  _key: string;
  title: string;
  url: string;
}

export const PDF_FILE_FRAGMENT = groq`
  _key,
  title,
  "url": file.asset->url
`;
