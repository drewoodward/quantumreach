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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import  ContactForm  from "@/components/ContactForm";

interface Accounts {
  name: string;
  image: string;
  views: number;
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

        {/* Mission statement */}
        <p className="mt-6 text-center font-serif text-2xl italic text-gray-800">
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
                {/* avatar could go here */}
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

        {/* Contact prompt and textarea */}
        <div className="mt-4 text-center">
          Want to expand your reach? Contact us.
        </div>
        <div className="mt-8 mb-8 px-4">
          <ContactForm />
        </div>
      </div>

      {/* Grey footer bar */}
      <footer className="bg-gray-200 h-20 w-full flex items-center justify-center">
        {/* You could add copyright or links here */}
      </footer>
    </main>
  );
}
