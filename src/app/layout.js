import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "./component/common/SmoothScroll";
import MouseFollower from "./component/common/MouseFollower";
import Header from "./component/common/Header";
import { getCanonicalUrl, serializeJsonLd, siteUrl } from "./seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  title: {
    default: "Omni Mall | Furniture, Lighting & Home Accessories",
    template: "%s | Omni Mall",
  },
  description:
    "Discover furniture, lighting, and home accessories selected to bring personality to your space at Omni Mall.",
  applicationName: "Omni Mall",
  keywords: [
    "Omni Mall",
    "online shopping",
    "furniture",
    "lighting",
    "home accessories",
  ],
  creator: "Omni Mall",
  publisher: "Omni Mall",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Omni Mall",
    locale: "en_US",
    title: "Omni Mall | Furniture, Lighting & Home Accessories",
    description:
      "Discover furniture, lighting, and home accessories selected to bring personality to your space.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omni Mall | Furniture, Lighting & Home Accessories",
    description:
      "Discover furniture, lighting, and home accessories selected to bring personality to your space.",
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Omni Mall",
    description:
      "An online store for furniture, lighting, and home accessories.",
    knowsAbout: ["Furniture", "Lighting", "Home accessories"],
    ...(siteUrl
      ? {
          url: siteUrl.toString(),
          logo: getCanonicalUrl("/images/brand-logo.png"),
        }
      : {}),
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Corrected Google Font connection tags */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Asimovian&family=Jim+Nightshade&family=Noto+Kufi+Arabic:wght@100..900&display=swap" 
          rel="stylesheet" 
        />
        {/* Font Awesome CDN dependency */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <SmoothScroll />
        <MouseFollower />
        {/* <Header/> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
