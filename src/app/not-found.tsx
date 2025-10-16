import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center gap-6 text-center px-4">
      <FileQuestion className="h-24 w-24 text-primary" strokeWidth={1} />
      <div className="space-y-2">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Page Not Found
        </h1>
        <p className="max-w-md text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
      </div>
      <Button asChild>
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  );
}
