export const pagebuilderSchema = {
  name: 'pagebuilder',
  title: 'Pagebuilder',
  type: 'object',
  fields: [
    {
      name: 'slices',
      title: 'Slices',
      type: 'array',
      of: []
    }
  ]
};

export const PAGEBUILDER_FRAGMENT = `
  slices[] {
    _key,
    _type,
    ...,
    
  }
`;

export interface IPagebuilder {
  slices: [];
}
