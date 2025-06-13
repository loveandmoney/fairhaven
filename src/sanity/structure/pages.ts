import { FileText } from 'lucide-react';
import { StructureBuilder } from 'sanity/structure';

export const pages = (S: StructureBuilder) =>
  S.documentTypeListItem('page').title('Pages').icon(FileText);
