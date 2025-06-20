import { Select, Stack } from '@sanity/ui';
import { InputProps, set, unset } from 'sanity';
import { curatedLucideIcons } from '../lib/lucide';
import * as lucideIcons from 'lucide-react';

export function IconInput({ value, onChange }: InputProps) {
  const Icon =
    value &&
    (lucideIcons[value as keyof typeof lucideIcons] as lucideIcons.LucideIcon);

  return (
    <div className="grid grid-cols-[1fr_64px] items-center gap-4">
      <Stack>
        <Select
          value={typeof value === 'string' ? value : ''}
          onChange={e => {
            const newVal = e.currentTarget.value;
            onChange(newVal ? set(newVal) : unset());
          }}
        >
          {curatedLucideIcons.map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </Select>
      </Stack>

      <div className="flex size-[64px] items-center justify-center rounded bg-white text-black">
        {Icon && <Icon size={32} />}
      </div>
    </div>
  );
}
