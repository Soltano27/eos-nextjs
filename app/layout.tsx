import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./image-overrides.css";

export const metadata: Metadata = {
  title: "EOS — Own Your Brain",
  description:
    "The EOS Foundation is dedicated to brain health, neuroscience education, and empowering communities to own their brain.",
  openGraph: {
    title: "EOS — Own Your Brain",
    description:
      "The EOS Foundation is dedicated to brain health, neuroscience education, and empowering communities to own their brain.",
    url: "https://theeosfoundation.org",
    siteName: "The EOS Foundation",
    images: [
      {
        url: "https://theeosfoundation.org/images/preview-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
