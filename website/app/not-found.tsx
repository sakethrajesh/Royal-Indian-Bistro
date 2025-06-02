'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function SearchParamsWrapper() {
  const searchParams = useSearchParams();
  return null; // Since we're not actually using the searchParams yet
}

function NotFoundContent() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-8"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    }>
      <SearchParamsWrapper />
      <NotFoundContent />
    </Suspense>
  );
} 