import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Practical AI Index',
  description: 'Translating AI benchmarks into plain English decisions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
