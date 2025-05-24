import { Inter, Raleway } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Leanna Jeon Portfolio",
  description: "Leanna Jeon - Product-minded Data Scientist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
