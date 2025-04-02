import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Who Pays for Claude Code',
  description: 'Track who last paid for Claude Code',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="desktop">
          {children}
        </div>
      </body>
    </html>
  );
}