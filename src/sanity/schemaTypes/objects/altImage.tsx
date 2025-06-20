import { Thumbnail } from '@/sanity/components/Thumbnail';
import { Image } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const altImageSchema = defineType({
  name: 'altImage',
  title: 'Image',
  type: 'image',
  icon: Image,
  fields: [
    defineField({
      name: 'altText',
      title: 'Alternative Text',
      description: 'Used for screen readers and SEO',
      type: 'string',
      // Alt text is option, but image is required
      validation: Rule =>
        Rule.custom((_field, context) => {
          const parent = context.parent as { asset?: object };

          if (!parent?.asset) {
            return 'An image is required.';
          }
          return true;
        })
    })
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      altText: 'altText'
    },
    prepare({ imageUrl, altText }) {
      return {
        title: altText || 'Image',
        media: () => <Thumbnail url={imageUrl} />
      };
    }
  }
});

export interface IAltImage {
  id: string;
  alt: string;
}

export const ALT_IMAGE_FRAGMENT = `
  "id": asset._ref,
  "alt": altText,
  hotspot { x, y },
  crop {
    bottom,
    left,
    right,
    top,
  }
`;
