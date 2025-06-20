import { TLucideIconName } from '../lib/lucide';
import * as lucideIcons from 'lucide-react';

export const LucideIcon = ({ icon }: { icon: TLucideIconName }) => {
  const Icon =
    icon &&
    (lucideIcons[icon as keyof typeof lucideIcons] as lucideIcons.LucideIcon);

  return <Icon />;
};
