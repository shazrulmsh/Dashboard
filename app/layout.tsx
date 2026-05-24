import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Landlord Dashboard',
  description: 'Track rumah sewa anda',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
