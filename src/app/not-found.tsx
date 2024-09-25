import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center">
      <h2 className="text-white">Not Found</h2>
      <p className="text-white">Could not find requested resource</p>
      <Link href="/" className="text-white">
        Return Home
      </Link>
    </div>
  );
}
