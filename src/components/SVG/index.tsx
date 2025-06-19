import clsx from 'clsx';

import logo from './svgs/logo.svg';

const svgs = Object.freeze({
  logo
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
