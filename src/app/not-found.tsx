import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream-50 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-teal-500 text-sm font-semibold uppercase tracking-[0.15em] mb-4">
          404
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-charcoal-700 leading-tight mb-4">
          Page not found
        </h1>
        <p className="text-charcoal-400 text-lg mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white border border-cream-200 text-charcoal-600 font-semibold px-8 py-3.5 rounded-full transition-all hover:border-teal-300 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
