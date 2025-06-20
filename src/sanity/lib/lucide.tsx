import * as icons from 'lucide';

export type TLucideIconName = keyof typeof icons;

export const lucideIconNames = Object.keys(icons) as TLucideIconName[];

export const curatedLucideIcons: TLucideIconName[] = ['Star', 'Rocket'];
