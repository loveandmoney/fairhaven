'use client';

import * as React from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { FieldError } from 'react-hook-form';
import { Loader } from '@/components';
import { Check, LucideIcon, Send } from 'lucide-react';

export const inputVariants = cva(
  'bg-white-25 t-label inline-flex w-full min-w-0 border-b px-2 py-3 transition-colors outline-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      lightMode: {
        true: 'border-ecru focus-visible:ring-none',
        false:
          'border-mahogany ring-mahogany focus-visible:ring-2 focus-visible:border-transparent focus:bg-mahogany/5'
      }
    }
  }
);

function Input({
  className,
  type,
  value,
  error,
  required,
  placeholder,
  description = '',
  lightMode = false,
  success = false,
  loading = false,
  disabled = false,
  hasSubmitButton = false,
  submitIcon = Send,
  ...props
}: React.ComponentProps<'input'> &
  VariantProps<typeof inputVariants> & {
    description?: string;
    success?: boolean;
    loading?: boolean;
    error?: FieldError;
    hasSubmitButton?: boolean;
    submitIcon?: LucideIcon;
  }) {
  return (
    <div
      className={clsx(
        'space-y-2',
        {
          'pointer-events-none opacity-50': disabled
        },
        className
      )}
    >
      <div className="group relative">
        {success ? (
          <>
            <p
              className={clsx(
                'text-ui-green pointer-events-none',
                inputVariants({ lightMode })
              )}
            >
              Success
            </p>
            <Check className="text-ui-green absolute top-1/2 right-3 size-4 -translate-y-1/2" />
          </>
        ) : (
          <>
            {error && (
              <div className="absolute top-0 left-0 h-full w-1 bg-white">
                <div className="bg-ui-red h-full w-full" />
              </div>
            )}
            <input
              type={type}
              disabled={disabled}
              placeholder={required ? `${placeholder} *` : placeholder}
              data-slot="input"
              className={clsx(inputVariants({ lightMode }))}
              {...props}
            />
            {hasSubmitButton && (
              <button
                type="submit"
                className={clsx(
                  'absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer p-1 transition-opacity group-focus-within:opacity-100',
                  {
                    'pointer-events-none opacity-50': !value,
                    'opacity-100 hover:opacity-80 focus-visible:opacity-80':
                      !!value
                  }
                )}
              >
                {loading ? (
                  <Loader />
                ) : (
                  React.createElement(submitIcon, {
                    className: 'shrink-0 size-4'
                  })
                )}
              </button>
            )}
          </>
        )}
      </div>
      {description && !error && (
        <label className="t-caption1">{description}</label>
      )}
      {error && <p className="text-ui-red">{error.message}</p>}
    </div>
  );
}

export { Input };
