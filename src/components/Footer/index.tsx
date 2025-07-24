'use client';

import Link from 'next/link';
import { CustomerReviews } from '../CustomerReviews';
import { SVG } from '../SVG';
import { Input } from '../ui/input';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormControl, FormField, FormItem } from '../ui/form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube
} from 'lucide-react';

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address')
});

export const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: ''
    },
    mode: 'onSubmit'
  });

  const onSubmit = async (data: z.infer<typeof newsletterSchema>) => {
    setLoading(true);
    setSuccess(false);
    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
    form.reset();
  };

  return (
    <footer className="bg-mahogany text-ecru grid grid-cols-2 gap-[90px] p-[48px] pb-6">
      <div className="flex gap-6">
        <div className="flex flex-col justify-between">
          <SVG svg="lockup" className="w-[90px]" />
          <CustomerReviews rating={3.5} />
        </div>
        <div className="space-y-2.5">
          <div className="space-y-4">
            <h5 className="t-h5">Newsletter</h5>
            <p>Home inspiration, helpful tips and the latest from Fairhaven.</p>
          </div>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        lightMode
                        type="email"
                        placeholder="Enter your email"
                        className="w-full max-w-[400px]"
                        error={form.formState.errors.email}
                        hasSubmitButton
                        success={success}
                        loading={loading}
                        required
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </FormProvider>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="border-white-25 border-l pl-6">
          <h5 className="t-h5">Quick links</h5>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href={'House Designs'}
                className="t-button cursor-pointer transition-opacity hover:opacity-80"
              >
                House Designs
              </Link>
            </li>
            <li>
              <Link
                href={'Packages'}
                className="t-button cursor-pointer transition-opacity hover:opacity-80"
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                href={'Knockdown & Rebuild'}
                className="t-button cursor-pointer transition-opacity hover:opacity-80"
              >
                Knockdown & Rebuild
              </Link>
            </li>
            <li>
              <Link
                href={'Townhouses'}
                className="t-button cursor-pointer transition-opacity hover:opacity-80"
              >
                Townhouses
              </Link>
            </li>
            <li>
              <Link
                href={'Virtual Tours'}
                className="t-button cursor-pointer transition-opacity hover:opacity-80"
              >
                Virtual Tours
              </Link>
            </li>
            <li>
              <Link
                href={'Collections'}
                className="t-button cursor-pointer transition-opacity hover:opacity-80"
              >
                Collections
              </Link>
            </li>
            <li>
              <Link
                href={'Where We Build'}
                className="t-button cursor-pointer transition-opacity hover:opacity-80"
              >
                Where We Build
              </Link>
            </li>
            <li>
              <Link
                href={'Display Homes'}
                className="t-button cursor-pointer transition-opacity hover:opacity-80"
              >
                Display Homes
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-white-25 border-l pl-6">
          <h5 className="t-h5 mb-[48px]">Call in whenever you like</h5>
          <div className="space-y-10">
            <ul className="mt-4 space-y-2">
              <li>
                <Button
                  className="t-b3 text-white hover:no-underline hover:opacity-80"
                  variant="link"
                  href="tel:1800 324 742"
                  iconLeft={Phone}
                >
                  1800 Fairhaven (1800 324 742)
                </Button>
              </li>
              <li>
                <Button
                  className="t-b3 text-white hover:no-underline hover:opacity-80"
                  variant="link"
                  href="tel:0400 660 960"
                  iconLeft={Phone}
                >
                  Sales (0400 660 960)
                </Button>
              </li>
              <li>
                <Button
                  className="t-b3 text-white hover:no-underline hover:opacity-80"
                  variant="link"
                  href="mailTo:info@fairhavenhomes.com.au"
                  iconLeft={Mail}
                >
                  info@fairhavenhomes.com.au
                </Button>
              </li>
              <li>
                <Button
                  className="t-b3 text-white hover:no-underline hover:opacity-80"
                  variant="link"
                  href="mailTo:info@fairhavenhomes.com.au"
                  iconLeft={MapPin}
                >
                  Level 6, 1 Peter’s Avenue Mulgrave 3170,
                  <br />
                  Australia
                </Button>
              </li>
              <li className="inline-flex gap-2 text-white">
                <Clock className="t-b3 inline-block size-4" />
                Monday-Thursday 8:30am - 4:45pm
                <br />
                Friday 8:30am - 4:00pm
              </li>
            </ul>
            <Button variant="outline-inverse" iconRight={ArrowRight}>
              Visit Support Hub
            </Button>
          </div>
          <ul className="mt-[96px] inline-flex gap-2">
            <li>
              <Button variant="outline-inverse" iconLeft={Facebook} />
            </li>
            <li>
              <Button variant="outline-inverse" iconLeft={Instagram} />
            </li>
            <li>
              <Button variant="outline-inverse" iconLeft={Youtube} />
            </li>
            {/* <li>
            <Button variant='outline-inverse'} iconLeft={Tiktok} />
          </li> */}
            <li>
              <Button variant="outline-inverse" iconLeft={Linkedin} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
