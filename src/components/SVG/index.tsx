import clsx from 'clsx';

import logo from './svgs/logo.svg';
import lockup from './svgs/lockup.svg';
import star from './svgs/star.svg';
import halfStar from './svgs/half-star.svg';
import loader from './svgs/loader.svg';
import lockupHorizontal from './svgs/lockup-horizontal.svg';

const svgs = Object.freeze({
  logo,
  lockup,
  star,
  halfStar,
  loader,
  lockupHorizontal
});

export type TSVG = keyof typeof svgs;

export interface ISVG {
  svg: TSVG;
  className?: string;
  style?: React.CSSProperties;
}

export const SVG = ({ svg, className, ...props }: ISVG) => {
  if (!svgs[svg]) return null;

  const SVGElement = svgs[svg];

  return (
    <SVGElement
      className={clsx('text-[length:inherit] text-inherit', className)}
      {...props}
      aria-hidden
    />
  );
};
