import './globals.css';

export const metadata = {
  title: 'HelpHub247',
  description: 'AI-powered help platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
