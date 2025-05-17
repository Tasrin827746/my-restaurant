import Footer from "@/components/CommonLayout/Footer";
import Navbar from "@/components/CommonLayout/Navbar";
import "@/styles/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spicy",
  description: "A food web",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
