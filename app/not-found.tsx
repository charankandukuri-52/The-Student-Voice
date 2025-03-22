import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main 
      className="flex min-h-screen flex-col items-center justify-center p-4"
      role="main"
      aria-labelledby="error-title"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 
          id="error-title"
          className="text-4xl font-bold sm:text-6xl"
          tabIndex={0}
        >
          404
        </h1>
        <p 
          className="text-xl text-muted-foreground"
          tabIndex={0}
        >
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link 
            href="/"
            className="mt-4"
            aria-label="Return to homepage"
          >
            Return Home
          </Link>
        </Button>
      </div>
    </main>
  );
} 