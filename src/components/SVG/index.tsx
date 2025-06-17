import arrowRight from './svgs/arrow-right.svg';
import download from './svgs/download.svg';
import logo from './svgs/logo.svg';
import globe from './svgs/globe.svg';
import menu from './svgs/menu.svg';
import x from './svgs/x.svg';
import check from './svgs/check.svg';
import star from './svgs/star.svg';
import loader from './svgs/loader.svg';
import clsx from 'clsx';

const svgs = Object.freeze({
  arrowRight,
  download,
  logo,
  globe,
  menu,
  x,
  check,
  star,
  loader
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
