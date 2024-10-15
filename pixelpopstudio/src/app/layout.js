// app/layout.js
import ThemeToggle from '@/components/ThemeToggle';
import './globals.css';

// Import Inter font from Google Fonts
export const metadata = {
  title: 'Your Website Title',
  description: 'Your Website Description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the Google Fonts link here */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        {/* <ThemeToggle /> */}
        {children}
      </body>
    </html>
  );
}
