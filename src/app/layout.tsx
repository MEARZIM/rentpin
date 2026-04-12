import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rent Pin | Find and Secure Your Perfect Rental",
  description: "Discover your next home with Rent Pin. Browse verified rental listings, compare properties, and pin your favorites to find the perfect place to live.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // suppressHydrationWarning
    >
      <body className="">
        {children}
      </body>
    </html>
  );
}