import Link from 'next/link';
import { CustomerReviews } from '../CustomerReviews';
import { SVG } from '../SVG';
import { Input } from '../ui/input';

export const Footer = () => {
  return (
    <footer className="bg-mahogany text-ecru grid grid-cols-2 gap-[90px] p-[48px] pb-6">
      <div className="flex gap-6">
        <div className="flex flex-col">
          <SVG svg="lockup" className="w-[90px]" />
          <CustomerReviews rating={3.5} />
        </div>
        <div className="space-y-2.5">
          <div className="space-y-4">
            <h5 className="t-h5">Newsletter</h5>
            <p>Home inspiration, helpful tips and the latest from Fairhaven.</p>
          </div>
          <Input
            lightMode
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-[400px]"
            iconRight="send"
          />
        </div>
      </div>
      <div className="border-white-25 border-l pl-6">
        <h5 className="t-h5">Quick links</h5>
        <ul className="mt-4 space-y-2">
          <li>
            <Link href={'House Designs'} className="t-button">
              House Designs
            </Link>
          </li>
          <li>
            <Link href={'Packages'} className="t-button">
              Packages
            </Link>
          </li>
          <li>
            <Link href={'Knockdown & Rebuild'} className="t-button">
              Knockdown & Rebuild
            </Link>
          </li>
          <li>
            <Link href={'Townhouses'} className="t-button">
              Townhouses
            </Link>
          </li>
          <li>
            <Link href={'Virtual Tours'} className="t-button">
              Virtual Tours
            </Link>
          </li>
          <li>
            <Link href={'Collections'} className="t-button">
              Collections
            </Link>
          </li>
          <li>
            <Link href={'Where We Build'} className="t-button">
              Where We Build
            </Link>
          </li>
          <li>
            <Link href={'Display Homes'} className="t-button">
              Display Homes
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
