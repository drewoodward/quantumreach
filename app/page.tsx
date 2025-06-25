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

interface Accounts {
  name: string;
  image: string;
  views: string;
  followers: number;
  id: string;
}

async function getAccounts(): Promise<Accounts[]> {
  const result = await fetch('http://localhost:4000/accounts');
  return result.json();
}

export default async function Home() {
  const accounts = await getAccounts();
  return (
    <main className="flex flex-col min-h-screen">
      <div className="px-4 flex-grow">
        <Navbar />

        {/* Logo container: centered only */}
        <div className="flex justify-center mt-4">
          <Image
            src="/qrmlogo.svg"
            alt="Quantum Reach Marketing Logo"
            width={450}
            height={350}
            className="object-cover"
            priority
          />
        </div>

        {/* Mission statement (tighter to logo, spaced from cards) */}
        <p className="mt-2 mb-10 text-center font-serif text-2xl italic text-gray-800">
          *mission statement*
        </p>

        {/* Account cards section */}
        <div className="grid grid-cols-2 gap-8 py-8">
          {accounts.map((account) => (
            <Card
              key={account.id}
              className="flex flex-col justify-between border border-gray-200 rounded-lg p-4"
            >
              <CardHeader className="flex-row gap-4 items-center">
                <Avatar>
                  <AvatarImage src={`/img/${account.image}`} alt="TikTok" />
                  <AvatarFallback>
                    {account.name.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{account.name}</CardTitle>
                  <CardDescription>{account.followers} followers.</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>{account.views} monthly views.</p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary">View Account</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>

      {/* Grey footer bar with contact prompt and form */}
      <footer className="bg-gray-200 w-full flex flex-col items-center py-8">
        <div className="text-center font-serif mb-4">
          Want to expand your reach? Contact us.
        </div>
        <div className="w-full max-w-md px-4">
          <ContactForm />
        </div>
      </footer>
    </main>
  );
}
