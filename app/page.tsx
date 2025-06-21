import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
    <div className="relative h-screen flex flex-col">
      <Image
        src="/placeholder.svg"
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="relative z-10">
        <Navbar />
        {/* …rest of page */}
      </div>
    </div>
        <div className="relative h-screen flex flex-col bg-green-400">
      <div className="relative z-10">
        <Navbar />
        {/* …rest of page */}
      </div>
    </div>
    </>
  );
}
