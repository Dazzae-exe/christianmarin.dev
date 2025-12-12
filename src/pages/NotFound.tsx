import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6 py-24">
        <div className="space-y-4">
          <h1 className="font-mono text-4xl font-semibold">404</h1>
          <p className="text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="inline-block font-mono text-sm underline decoration-link-underline underline-offset-4 hover:decoration-foreground transition-colors">
            Return to Home
          </a>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
