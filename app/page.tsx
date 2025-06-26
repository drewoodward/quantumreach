import Image from 'next/image';
import Navbar from '@/components/Navbar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import accountsData from '@/_data/db.json';

interface Accounts {
  name: string;
  image: string;
  views: string;
  followers: number;
  id: string;
}

function getAccounts(): Accounts[] {
  return accountsData;
}

export default function Home() {
  const accounts = getAccounts();

  return (
    <main id="home" className="flex flex-col min-h-screen bg-[#D2B48C]">
      {/* Full-width navbar */}
      <Navbar />

      {/* Content wrapper with responsive padding */}
      <div className="px-4 sm:px-6 flex-grow">

        {/* Logo container: centered, responsive sizing, lowered below navbar */}
        <div className="flex justify-center mt-28">
          <Image
            src="/qrmlogo.svg"
            alt="Quantum Reach Marketing Logo"
            width={150}
            height={150}
            className="object-cover rounded-full w-36 h-36 sm:w-64 sm:h-64"
            priority
          />
        </div>

        {/* Mission statement: constrained width, responsive text, wraps on mobile */}
        <p className="mt-8 mb-10 text-center font-serif text-xl sm:text-2xl italic text-gray-800 max-w-2xl mx-auto px-4 break-words">
          "At Quantum Reach Marketing, we specialize in cutting-edge digital strategies with a focus on mastering the TikTok algorithm. Our mission is to help brands grow faster, reach wider, and connect deeper in the age of viral content and short-form video."
        </p>

        {/* Account cards section: single column on mobile, two on larger screens, extra padding before footer */}
        <div id="accounts" className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 pb-16">
          {accounts.map((account) => (
            <Card
              key={account.id}
              className="flex flex-col justify-between border border-gray-200 rounded-lg p-4"
            >
              <CardHeader className="flex-row gap-4 items-center">
                <Avatar>
                  <AvatarImage src={`/img/${account.image}`} alt={account.name} />
                  <AvatarFallback>{account.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base sm:text-lg">{account.name}</CardTitle>
                  <CardDescription className="break-words">{account.followers} followers.</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="break-words">{account.views} monthly views.</p>
              </CardContent>
              <CardFooter>
                <a
                  href={`https://www.tiktok.com/@${account.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="secondary" className="w-full">
                    View Account
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer with contact prompt and form, responsive padding */}
      <footer id="contact" className="bg-gray-200 w-full flex flex-col items-center py-8 px-4 sm:px-6">
        <div className="text-center font-serif mb-4">Want to expand your reach? Contact us.</div>
        <div className="w-full max-w-md px-4">
          <ContactForm />
        </div>
      </footer>
    </main>
  );
}
