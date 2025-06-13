import { House } from 'lucide-react';
import { StructureBuilder } from 'sanity/structure';

export const home = (S: StructureBuilder) =>
  S.listItem()
    .id('home_page')
    .schemaType('homePage')
    .title('Home')
    .icon(House)
    .child(
      S.editor().id('home_page').schemaType('homePage').documentId('home_page')
    );
