import { StructureBuilder } from 'sanity/structure';
import { settings } from './settings';
import { pages } from './pages';
import { home } from './home';

export const structure = (S: StructureBuilder) => {
  return S.list()
    .title('Content')
    .id('root')
    .items([home(S), pages(S), settings(S)]);
};
