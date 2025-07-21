import * as React from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { ISVG, SVG } from '../SVG';

export const inputVariants = cva(
  'bg-white-25 t-label inline-flex w-full min-w-0 border-b p-2 transition-[color] outline-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      lightMode: {
        true: 'border-ecru selection:ring-none focus-visible:ring-none',
        false:
          'border-mahogany ring-mahogany selection:ring-2 focus-visible:ring-2'
      }
    }
  }
);

function Input({
  className,
  type,
  lightMode = false,
  success = false,
  iconLeft,
  iconRight,
  ...props
}: React.ComponentProps<'input'> &
  VariantProps<typeof inputVariants> & {
    success?: boolean;
    iconLeft?: ISVG['svg'];
    iconRight?: ISVG['svg'];
  }) {
  return (
    <div className="relative">
      {iconLeft && (
        <SVG
          svg={iconLeft}
          className="absolute top-1/2 left-3 size-3 -translate-y-1/2"
        />
      )}
      <input
        type={type}
        data-slot="input"
        value={success ? 'Success' : props.value}
        className={clsx(
          inputVariants({ lightMode }),
          { 'text-ui-green pointer-events-none': success },
          className
        )}
        {...props}
      />
      {(iconRight || success) && (
        <SVG
          svg={success ? 'check' : iconRight!}
          className={clsx('absolute top-1/2 right-3 size-3 -translate-y-1/2', {
            'text-ui-green': success
          })}
        />
      )}
    </div>
  );
}

export { Input };
