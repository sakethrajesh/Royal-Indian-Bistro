import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Royal India Bistro | Authentic India Restaurant in Alexandria, LA",
  description: "Experience authentic Indian cuisine at Royal India Bistro in Alexandria, LA. Enjoy traditional dishes, catering services, and online ordering. Best Indian restaurant in Alexandria.",
  keywords: "Indian restaurant Alexandria, Royal India Bistro, Indian food Alexandria VA, best Indian restaurant, Indian cuisine, Indian takeout, Indian delivery, Alexandria restaurants",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://royalindianbistro.com'),
  openGraph: {
    title: "Royal India Bistro | Authentic Indian Restaurant in Alexandria, LA",
    description: "Experience authentic Indian cuisine at Royal India Bistro in Alexandria, LA. Enjoy traditional dishes, catering services, and online ordering.",
    url: "https://royalindianbistro.com",
    siteName: "Royal India Bistro",
    images: [
      {
        url: "/images/restaurant-exterior.jpg",
        width: 1200,
        height: 630,
        alt: "Royal India Bistro - Authentic Indian Restaurant in Alexandria",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal India Bistro | Authentic Indian Restaurant in Alexandria, LA",
    description: "Experience authentic Indian cuisine at Royal India Bistro in Alexandria, LA. Enjoy traditional dishes, catering services, and online ordering.",
    images: ["/images/restaurant-exterior.jpg"],
  },
  alternates: {
    canonical: "https://royalindianbistro.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Royal India Bistro",
              "image": "https://royalindianbistro.com/images/restaurant-exterior.jpg",
              "url": "https://royalindianbistro.com",
              "telephone": "+1-703-555-0123",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Alexandria",
                "addressRegion": "VA",
                "postalCode": "22314",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "38.8048",
                "longitude": "-77.0469"
              },
              "priceRange": "$$",
              "servesCuisine": "Indian",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "11:00",
                  "closes": "22:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "12:00",
                  "closes": "23:00"
                }
              ],
              "menu": "https://royalindianbistro.com/menu",
              "orderUrl": "https://www.clover.com/online-ordering/royal-india-bistro-alexandria-alexandria",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "150"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
