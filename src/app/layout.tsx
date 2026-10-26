import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivanand Maurya — B.Tech AIML Student",
  description:
    "Portfolio of Shivanand Maurya, a B.Tech student specializing in Artificial Intelligence and Machine Learning at GL Bajaj Institute of Technology and Management.",
  applicationName: "Shivanand Maurya Portfolio",
  openGraph: {
    title: "Shivanand Maurya — B.Tech AIML Student",
    description:
      "Exploring programming, web development, and artificial intelligence through continuous learning.",
    type: "website",
    images: ["/images/shivanand-maurya.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivanand Maurya — B.Tech AIML Student",
    description:
      "Exploring programming, web development, and artificial intelligence through continuous learning.",
    images: ["/images/shivanand-maurya.jpeg"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: "#080b12",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
