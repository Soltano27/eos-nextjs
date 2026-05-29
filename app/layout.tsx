import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./image-overrides.css"; // applies real images to the placeholder slots

export const metadata: Metadata = {
  title: "EOS — Own Your Brain",
};

// Mirrors the original <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Identical Google Fonts <link> from the original HTML */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
