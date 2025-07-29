'use client';

import clsx from 'clsx';
import { Footer } from '@/components';
import { usePathname } from 'next/navigation';
import { IHeader } from '@/sanity/schemaTypes/objects/header';
import { IFooter } from '@/sanity/schemaTypes/objects/footer';

interface ILayoutContent {
  children: React.ReactNode;
  header?: IHeader;
  footer?: IFooter;
  className?: string;
}

export const LayoutContent = ({
  children,
  header,
  footer,
  className
}: ILayoutContent) => {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <html lang="en">
      <body className={clsx(className)}>
        {children}
        {!isAdmin && footer && <Footer {...footer} />}
      </body>
    </html>
  );
};
