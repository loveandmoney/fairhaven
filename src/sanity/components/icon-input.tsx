import { Select, Stack } from '@sanity/ui';
import { type InputProps, set, unset } from 'sanity';

import { SVG, svgKeys, type TSVG } from '~/components/svg';

export function IconInput({ value, onChange }: InputProps) {
  return (
    <div className="grid grid-cols-[1fr_64px] gap-4">
      <Stack>
        <Select
          value={value as string}
          onChange={event => {
            const newValue = event.currentTarget.value;
            if (newValue) {
              onChange(set(newValue));
            } else {
              onChange(unset());
            }
          }}
        >
          {svgKeys.map(key => (
            <option key={key}>{key}</option>
          ))}
        </Select>
      </Stack>

      {value && (
        <SVG
          svg={value as TSVG}
          className="size-[64px] rounded bg-white text-black"
        />
      )}
    </div>
  );
}
