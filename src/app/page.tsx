import { Button } from '@/components/ui/button';
import { Fragment } from 'react';

export default function Home() {
  return (
    <main className="m-auto grid max-w-[1200px] space-y-4 pt-20">
      <>
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
              <Button iconLeft="download" variant={variant} size={size}>
                {size === 'icon' ? '' : `${variant} / ${size}`}
              </Button>
              <Button iconLeft="download" variant={variant} size={size} loading>
                {size === 'icon' ? '' : `${variant} / ${size} / loading`}
              </Button>
              <Button
                iconLeft="download"
                variant={variant}
                size={size}
                disabled
              >
                {size === 'icon' ? '' : `${variant} / ${size} / disabled`}
              </Button>
            </div>
          ))
        )}
      </>
    </main>
  );
}
