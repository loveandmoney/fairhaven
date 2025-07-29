import Image from 'next/image';
import { SVG } from '../SVG';
import clsx from 'clsx';

interface ICustomerReviews {
  rating: number;
  className?: string;
}

export const CustomerReviews = ({ rating, className }: ICustomerReviews) => {
  return (
    <div
      className={clsx(
        'border-white-25 flex items-center justify-between gap-2.5 rounded-sm border px-6 py-3 text-center md:flex-col',
        className
      )}
    >
      <div className="flex flex-col items-center gap-1">
        <p className="t-tag">Customer Reviews</p>
        <div className="grid grid-cols-5 gap-0.5">
          {[1, 2, 3, 4, 5].map(i => {
            if (rating >= i) {
              return <SVG key={i} svg="star" className="size-5" />;
            } else if (rating >= i - 0.5) {
              return (
                <div className="relative" key={i}>
                  <SVG svg="star" className="text-white-25 size-5" />
                  <SVG svg="halfStar" className="absolute top-0 size-5" />
                </div>
              );
            }
            return <SVG key={i} svg="star" className="text-white-25 size-5" />;
          })}
        </div>
        <p className="t-tag2">{rating} from 770 reviews</p>
      </div>
      <Image
        src="/images/product-reviews.svg"
        alt="Product reviews logo"
        width={200}
        height={30}
      />
    </div>
  );
};
