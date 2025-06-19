'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { IContactForm } from '@/sanity/schemaTypes/slices/contactForm';
import { Send } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(1, 'Message is required'),
  terms: z
    .boolean()
    .refine(val => val === true, { message: 'You must accept the terms' })
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = ({ heading, text }: IContactForm) => {
  const { register, handleSubmit, setValue } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <section>
      <h2>{heading}</h2>
      {text && <p>{text}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input
            placeholder="Your name"
            id="contact-name"
            {...register('name')}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            placeholder="Your email"
            id="contact-email"
            type="email"
            {...register('email')}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            className="resize-none"
            placeholder="Type your message"
            id="contact-message"
            {...register('message')}
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            id="terms"
            {...register('terms')}
            required
            onCheckedChange={checked => {
              setValue('terms', checked === true);
            }}
          />
          <Label htmlFor="terms">
            By selecting this you agree to our
            <a className="underline" target="_blank" href="TKTK">
              Privacy Policy
            </a>
          </Label>
        </div>

        <Button type="submit" iconRight={Send}>
          Send Message
        </Button>
      </form>
    </section>
  );
};
