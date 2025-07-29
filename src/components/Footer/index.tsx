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
import { IFooter } from '@/sanity/schemaTypes/objects/footer';

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address')
});

export const Footer = ({ quickLinks }: IFooter) => {
  return (
    <footer className="bg-mahogany text-ecru space-y-[48px] px-4 py-6 md:p-[48px] md:pb-6">
      <div className="grid gap-10 md:grid-cols-2 md:gap-[90px]">
        <div className="flex flex-col gap-10 md:flex-row md:gap-6">
          <div className="flex flex-col justify-between">
            <SVG svg="lockupHorizontal" className="w-[152px] md:hidden" />
            <SVG svg="lockup" className="hidden w-[90px] md:block" />
            <CustomerReviews rating={3.5} className="hidden md:flex" />
          </div>
          <div className="space-y-2.5">
            <div className="space-y-4">
              <h5 className="t-h5">Newsletter</h5>
              <p>
                Home inspiration, helpful tips and the latest from Fairhaven.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2 md:gap-4">
          <div className="border-white-25 space-y-10 border-t pt-6 md:border-0 md:border-l md:p-0 md:pl-6">
            <h5 className="t-h5">Quick links</h5>
            <ul className="space-y-6 md:space-y-5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.link.to}
                    className="t-button cursor-pointer transition-opacity hover:opacity-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-white-25 border-t pt-6 md:border-0 md:border-l md:p-0 md:pl-6">
            <h5 className="t-h5 mb-[48px]">Call in whenever you like</h5>
            <div className="space-y-10">
              <ul className="space-y-6 md:space-y-5">
                <li>
                  <Link
                    className="t-b3 inline-flex items-center gap-2 transition-opacity hover:opacity-50"
                    href="tel:1800 324 742"
                  >
                    <Phone size="16" />
                    1800 Fairhaven (1800 324 742)
                  </Link>
                </li>
                <li>
                  <Link
                    className="t-b3 inline-flex items-center gap-2 transition-opacity hover:opacity-50"
                    href="tel:0400 660 960"
                  >
                    <Phone size="16" />
                    Sales (0400 660 960)
                  </Link>
                </li>
                <li>
                  <Link
                    className="t-b3 inline-flex items-center gap-2 transition-opacity hover:opacity-50"
                    href="mailTo:info@fairhavenhomes.com.au"
                  >
                    <Mail size="16" />
                    info@fairhavenhomes.com.au
                  </Link>
                </li>
                <li>
                  <Link
                    className="t-b3 inline-flex items-center gap-2 transition-opacity hover:opacity-50"
                    href="mailTo:info@fairhavenhomes.com.au"
                  >
                    <MapPin size="16" />
                    Level 6, 1 Peter’s Avenue Mulgrave 3170,
                    <br />
                    Australia
                  </Link>
                </li>
                <li className="t-b3 inline-flex items-center gap-2">
                  <Clock size="16" />
                  Monday-Thursday 8:30am - 4:45pm
                  <br />
                  Friday 8:30am - 4:00pm
                </li>
              </ul>
              <Button
                variant="outline-inverse"
                className="w-full text-white md:w-auto"
                iconRight={ArrowRight}
              >
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
          <CustomerReviews rating={3.5} className="w-full md:hidden" />
        </div>
      </div>
      <div className="space-y-10 md:space-y-6">
        <div className="flex flex-col-reverse justify-between gap-10 md:flex-row md:gap-6">
          <div className="flex flex-col gap-2 md:flex-row md:gap-8">
            <p className="t-tag2">Copyright 2025 © Fairhaven Homes</p>
            <p className="t-tag2">All rights reserved</p>
            <p className="t-tag2">CDBU 48497</p>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            <Link
              href="privacy-policy"
              className="t-button md:t-tag2 transition-opacity hover:opacity-50"
            >
              Privacy Policy
            </Link>
            <Link
              href="terms-and-conditions"
              className="t-button md:t-tag2 transition-opacity hover:opacity-50"
            >
              Promotion Terms and Conditions
            </Link>
          </div>
        </div>
        <p className="text-ecru/60 t-caption2">
          All images used are for illustrative purposes only. They may include
          upgraded facades, optional extras as well as decorative features,
          landscaping, driveways, LED and feature lighting not included in our
          base prices. Images may also include features not supplied by
          Fairhaven Homes including but not limited to internal and external
          furniture, pools, decking gazebos. Please ask consultants for more
          information regarding standard inclusions.
        </p>
      </div>
    </footer>
  );
};

const NewsletterForm = () => {
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
  );
};
