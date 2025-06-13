import { homePageSchema } from './singletons/homePage';
import { pageSchema } from './documents/page';
import { blockContentSimpleSchema } from './objects/blockContentSimple';
import { linkSchema } from './objects/link';
import { linkWithLabelSchema } from './objects/linkWithLabel';
import { pdfFileSchema } from './objects/pdfFile';
import { seoSchema } from './objects/seo';
import { settingsSchema } from './singletons/settings';
import { pagebuilderSchema } from './slices/_pagebuilder';
import { headerSchema } from './objects/header';
import { footerSchema } from './objects/footer';

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
  // Singletons
  homePageSchema,
  settingsSchema,
  // Slices
  pagebuilderSchema
];
