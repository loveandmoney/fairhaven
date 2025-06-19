import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { IContactForm } from '@/sanity/schemaTypes/slices/contactForm';

export const ContactForm = ({ heading, text }: IContactForm) => {
  return (
    <section>
      <h2>{heading}</h2>
      {text && <p>{text}</p>}

      <form action="" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input placeholder="Your name" id="contact-name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input placeholder="Your email" id="contact-email" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            className="resize-none"
            placeholder="Type your message"
            id="contact-message"
          />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">
            By selecting this you agree to our
            <a className="underline" target="_blank" href="TKTK">
              Privacy Policy
            </a>
          </Label>
        </div>

        <Button type="submit" iconRight="download">
          Send Message
        </Button>
      </form>
    </section>
  );
};
