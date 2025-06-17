import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { SVG, TSVG } from '../SVG';

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap t-button transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-foreground-primary text-foreground-primary-inverse rounded-full hover:opacity-90 data-[disabled]:opacity-50 data-[loading]:opacity-70',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        'outline-inverse':
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-[40px] px-4',
        sm: 'h-[32px] px-3',
        lg: 'h-[44px] px-8',
        icon: 'size-10',
        link: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

function Button({
  className,
  variant,
  size,
  loading = false,
  asChild = false,
  disabled = false,
  children,
  iconLeft,
  iconRight,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    iconLeft?: TSVG;
    iconRight?: TSVG;
  }) {
  const Comp = asChild ? Slot : 'button';

  // Automatically apply link size / variant if either is set to 'link'
  const isLinkStyle = variant === 'link' || size === 'link';
  const resolvedVariant = isLinkStyle ? 'link' : variant;
  const resolvedSize = isLinkStyle ? 'link' : size;

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant: resolvedVariant, size: resolvedSize }),
        loading && 'opacity-50',
        className
      )}
      disabled={disabled || loading}
      data-disabled={disabled || undefined}
      data-loading={loading || undefined}
      {...props}
    >
      {iconLeft && <SVG svg={iconLeft} />}
      {children}
      {iconRight && <SVG svg={iconRight} />}
    </Comp>
  );
}

export { Button, buttonVariants };
