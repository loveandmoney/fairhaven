import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LucideIcon, Star } from 'lucide-react';

export const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap t-button transition-all disabled:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-focus-visible",
  {
    variants: {
      variant: {
        default:
          'bg-mahogany text-ecru hover:opacity-80 data-[loading]:opacity-80',
        secondary:
          'bg-mono-0 text-mahogany hover:opacity-80 data-[loading]:opacity-80',
        destructive:
          'bg-ui-red text-ecru hover:opacity-80 data-[loading]:opacity-80',
        outline:
          'border border-mahogany-25 text-mahogany hover:bg-mahogany-10 data-[loading]:bg-mahogany-10',
        'outline-inverse':
          'border border-white-25 text-mono-0 hover:bg-ecru-10 data-[loading]:bg-ecru-10',
        ghost:
          'text-mahogany hover:bg-mahogany-10 data-[loading]:bg-mahogany-10',
        link: 'text-mahogany underline-offset-4 hover:underline'
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
    iconLeft?: LucideIcon;
    iconRight?: LucideIcon;
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
        className
      )}
      disabled={disabled || loading}
      data-loading={loading ? '' : undefined}
      data-disabled={disabled ? '' : undefined}
      {...props}
    >
      {iconLeft && React.createElement(iconLeft, { className: 'shrink-0' })}
      {children}
      {iconRight && React.createElement(iconRight, { className: 'shrink-0' })}
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
            iconLeft={Star}
            variant={variant as VariantProps<typeof buttonVariants>['variant']}
            size={size as VariantProps<typeof buttonVariants>['size']}
          >
            {size === 'icon' ? '' : `${variant} / ${size}`}
          </Button>
          <Button
            iconLeft={Star}
            variant={variant as VariantProps<typeof buttonVariants>['variant']}
            size={size as VariantProps<typeof buttonVariants>['size']}
            loading
          >
            {size === 'icon' ? '' : `${variant} / ${size} / loading`}
          </Button>
          <Button
            iconLeft={Star}
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
