import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { SVG, TSVG } from '../SVG';

export const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap t-button transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-focus-visible aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-foreground-primary text-foreground-primary-inverse hover:opacity-90',
        secondary:
          'bg-background-secondary text-foreground-primary hover:opacity-80',
        destructive:
          'bg-destructive-primary text-foreground-primary-inverse hover:bg-destructive-secondary',
        outline:
          'border border-mahogany-25 text-foreground-primary hover:bg-background-primary-inverse-opacity data-[loading]:bg-background-primary-inverse-opacity',
        'outline-inverse':
          'border border-white-25 text-foreground-secondary-inverse hover:bg-background-primary-opacity data-[loading]:bg-background-primary-opacity',
        ghost:
          'text-foreground-primary hover:bg-background-primary-inverse-opacity data-[loading]:bg-background-primary-inverse-opacity',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-[40px] px-4 rounded-full',
        sm: 'h-[32px] px-3 rounded-full',
        lg: 'h-[44px] px-8 rounded-full',
        icon: 'size-10 rounded-full',
        link: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export function Button({
  className,
  variant,
  size,
  loading = false,
  disabled = false,
  asChild = false,
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

  const getResolvedSize = () => {
    if (isLinkStyle) {
      return 'link';
    }
    // Apply icon size if no children are present
    if (!children && (iconLeft || iconRight)) {
      return 'icon';
    }

    return size;
  };
  const resolvedSize = getResolvedSize();

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant: resolvedVariant, size: resolvedSize }),
        loading && 'opacity-50',
        className
      )}
      disabled={disabled || loading}
      data-loading={loading ? '' : undefined}
      {...props}
    >
      {iconLeft && <SVG svg={iconLeft} />}
      {children}
      {iconRight && <SVG svg={iconRight} />}
    </Comp>
  );
}

export const ButtonPreview = () => (
  <div className="bg-mono-30 m-auto max-w-[1200px] space-y-4 py-10">
    {[
      'default',
      'secondary',
      'destructive',
      'outline',
      'outline-inverse',
      'ghost',
      'link'
    ].map(variant =>
      ['default', 'icon', 'lg', 'sm'].map(size => (
        <div key={`${variant}-${size}`} className="flex justify-between">
          <Button
            iconLeft="download"
            variant={variant as VariantProps<typeof buttonVariants>['variant']}
            size={size as VariantProps<typeof buttonVariants>['size']}
          >
            {size === 'icon' ? '' : `${variant} / ${size}`}
          </Button>
          <Button
            iconLeft="download"
            variant={variant as VariantProps<typeof buttonVariants>['variant']}
            size={size as VariantProps<typeof buttonVariants>['size']}
            loading
          >
            {size === 'icon' ? '' : `${variant} / ${size} / loading`}
          </Button>
          <Button
            iconLeft="download"
            variant={variant as VariantProps<typeof buttonVariants>['variant']}
            size={size as VariantProps<typeof buttonVariants>['size']}
            disabled
          >
            {size === 'icon' ? '' : `${variant} / ${size} / disabled`}
          </Button>
        </div>
      ))
    )}
  </div>
);
