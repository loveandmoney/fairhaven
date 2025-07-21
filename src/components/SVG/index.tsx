import clsx from 'clsx';

import logo from './svgs/logo.svg';
import lockup from './svgs/lockup.svg';
import star from './svgs/star.svg';
import halfStar from './svgs/half-star.svg';
import check from './svgs/check.svg';
import send from './svgs/send.svg';

const svgs = Object.freeze({
  logo,
  lockup,
  star,
  halfStar,
  check,
  send
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
