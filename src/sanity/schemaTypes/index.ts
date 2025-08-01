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
import { featureIconSchema } from './objects/featureIcon';
import { iconSchema } from './objects/icon';
import { testimonialCardSchema } from './objects/testimonialCard';

// Singletons
import { homePageSchema } from './singletons/homePage';
import { settingsSchema } from './singletons/settings';

// Slices
import { pagebuilderSchema } from './slices/_pagebuilder';
import { featureSectionSchema } from './slices/featureSection';
import { featuredTestimonialsSchema } from './slices/featuredTestimonials';
import { featureIcons4UpSchema } from './slices/featureIcons4Up';
import { bentoGridSchema } from './slices/bentoGrid';
import { contactFormSchema } from './slices/contactForm';

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
  featureIconSchema,
  iconSchema,
  testimonialCardSchema,

  // Singletons
  homePageSchema,
  settingsSchema,

  // Slices
  pagebuilderSchema,
  featureSectionSchema,
  featuredTestimonialsSchema,
  featureIcons4UpSchema,
  bentoGridSchema,
  contactFormSchema
];
