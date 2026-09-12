import { Link } from "@tanstack/react-router";

const NotFound = () => {
  return (
    <div className="max-w-[36rem]">
      <h1 className="text-[2.5rem] leading-[1.05] tracking-[-0.03em] text-balance animate-blur-in md:text-[3.25rem]">
        Page not found
      </h1>
      <p className="mt-6 text-[1.0625rem] leading-[1.7] text-pretty text-muted-foreground animate-blur-in stagger-1">
        Error 404. The link may be broken, or the page may have moved.
      </p>
      <Link to="/" className="text-link mt-8 inline-block text-[0.9375rem] animate-blur-in stagger-2">
        Return home
      </Link>
    </div>
  );
};

export default NotFound;
