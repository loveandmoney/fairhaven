import { BENTO_GRID_FRAGMENT, IBentoGrid } from './bentoGrid';
import {
  FEATURED_TESTIMONIALS_FRAGMENT,
  IFeaturedTestimonials
} from './featuredTestimonials';
import {
  FEATURE_ICONS_4_UP_FRAGMENT,
  IFeatureIcons4Up
} from './featureIcons4Up';
import { FEATURE_SECTION_FRAGMENT, IFeatureSection } from './featureSection';

export const pagebuilderSchema = {
  name: 'pagebuilder',
  title: 'Pagebuilder',
  type: 'object',
  fields: [
    {
      name: 'slices',
      title: 'Slices',
      type: 'array',
      of: [
        { type: 'featureSection' },
        { type: 'featureIcon4Up' },
        { type: 'featuredTestimonials' },
        { type: 'bentoGrid' }
      ]
    }
  ]
};

export const PAGEBUILDER_FRAGMENT = `
  slices[] {
    _key,
    _type,
    ...,
     _type == "featureSection" => {
      ${FEATURE_SECTION_FRAGMENT}
    },
    _type == "featureIcons4Up" => {
      ${FEATURE_ICONS_4_UP_FRAGMENT}
    },
    _type == "featuredTestimonials" => {
      ${FEATURED_TESTIMONIALS_FRAGMENT}
    },
    _type == "bentoGrid" => {
      ${BENTO_GRID_FRAGMENT}
    },
  }
`;

export interface IPagebuilder {
  slices: (
    | IFeatureSection
    | IFeatureIcons4Up
    | IFeaturedTestimonials
    | IBentoGrid
  )[];
}
