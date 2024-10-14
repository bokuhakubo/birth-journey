import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Birth Journey",
  description: "妊娠記録",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="public/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
