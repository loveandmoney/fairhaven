// Documents
import { pageSchema } from './documents/page';

// Objects
import { blockContentSimpleSchema } from './objects/blockContentSimple';
import { linkSchema } from './objects/link';
import { linkWithLabelSchema } from './objects/linkWithLabel';
import { pdfFileSchema } from './objects/pdfFile';
import { seoSchema } from './objects/seo';
import { headerSchema } from './objects/header';
import { footerSchema } from './objects/footer';
import { altImageSchema } from './objects/altImage';

// Singletons
import { homePageSchema } from './singletons/homePage';
import { settingsSchema } from './singletons/settings';

// Slices
import { pagebuilderSchema } from './slices/_pagebuilder';
import { featureSectionSchema } from './slices/featureSection';
import { featuredTestimonialsSchema } from './slices/featuredTestimonials';
import { featureIcons4UpSchema } from './slices/featureIcons4Up';
import { bentoGridSchema } from './slices/bentoGrid';

export const schemaTypes = [
  // Documents
  pageSchema,

  // Objects
  blockContentSimpleSchema,
  linkSchema,
  linkWithLabelSchema,
  pdfFileSchema,
  seoSchema,
  headerSchema,
  footerSchema,
  altImageSchema,

  // Singletons
  homePageSchema,
  settingsSchema,

  // Slices
  pagebuilderSchema,
  featureSectionSchema,
  featuredTestimonialsSchema,
  featureIcons4UpSchema,
  bentoGridSchema
];
