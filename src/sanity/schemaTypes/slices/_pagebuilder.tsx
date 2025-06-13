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
      of: [{ type: 'featureSection' }]
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
  }
`;

export interface IPagebuilder {
  slices: IFeatureSection[];
}
