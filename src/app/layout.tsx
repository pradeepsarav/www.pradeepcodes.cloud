import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Pradeep Saravanan | Personal",
  metadataBase: new URL("https://www.pradeepcodes.clloud"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Pradeep Saravanan", url: "https://github.com/pradeepmsmallowtech" }
  ],
  description: "Pradeep Saravanan's personal portfolio website.",
  openGraph: {
    title: "Pradeep Saravanan | Personal",
    description: "Pradeep Saravanan's personal portfolio website.",
    images: [
      {
        url: "/photo-pradeep.jpeg",
        alt: "Pradeep Saravanan's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
