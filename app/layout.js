import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bluebonnet Assesments & Services",
  description: "Bluebonnet Assessment & Services, LLC, founded by Dr. Kidd, an experienced Bilingual Educational Diagnostician, provides top-quality educational contracted services to school districts in need of special education support. We are dedicated to ensuring students with special needs receive exceptional developmental and learning opportunities while adhering to state and federal guidelines.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
