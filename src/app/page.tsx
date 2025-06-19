import { ContactForm } from '@/slices/ContactForm';

export default function Home() {
  return (
    <main className="p-4">
      <h1>Fairhaven</h1>
      <ContactForm heading="Get In Touch" text="This is the contact form." />
    </main>
  );
}
