// lib/lucide.ts
import * as lucide from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const invalidKeys = ['createLucideIcon'];

export const lucideIcons = Object.fromEntries(
  Object.entries(lucide).filter(
    ([key, val]) => typeof val === 'function' && !invalidKeys.includes(key)
  )
) as Record<string, (props: LucideProps) => React.ReactElement>;

export const lucideKeys = Object.keys(lucideIcons).sort();
export type TLucideIcon = keyof typeof lucideIcons;
