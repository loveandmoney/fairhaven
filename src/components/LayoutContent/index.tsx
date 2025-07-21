import clsx from 'clsx';
import { Footer } from '@/components';

interface ILayoutContent {
  children: React.ReactNode;
  className?: string;
}

export const LayoutContent = ({ children, className }: ILayoutContent) => {
  return (
    <html lang="en">
      <body className={clsx(className)}>
        {children}
        <Footer />
      </body>
    </html>
  );
};
