import clsx from 'clsx';
import { SVG } from '../SVG';

export const Loader = ({
  size = 4,
  className
}: {
  size?: number;
  className?: string;
}) => {
  const sizeClass = `size-${size}`;
  return (
    <SVG
      svg="loader"
      className={clsx('animate-spin text-white', sizeClass, className)}
    />
  );
};
