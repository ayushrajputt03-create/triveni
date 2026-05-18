import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default:
      "Best School in Loni | Triveni Triratan Public Jr. High School",
    template: "%s | Triveni Triratan Public Jr. High School"
  },
  description:
    "Admission open 2026-27 at Triveni Triratan Public Jr. High School, Prakash Vihar, Loni, Ghaziabad. Quality education, discipline, safety, values, and strong student development.",
  keywords: [
    "Best school in Loni",
    "Best school near me",
    "Best school nearby",
    "Best school in Ghaziabad",
    "Public junior high school in Loni",
    "Admission open school in Loni",
    "Affordable school in Loni",
    "Best school for children in Loni"
  ],
  authors: [{ name: "Triveni Triratan Public Jr. High School" }],
  creator: "Triveni Triratan Public Jr. High School",
  publisher: "Triveni Triratan Public Jr. High School",
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.png", type: "image/png", sizes: "64x64" }
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" }
    ],
    shortcut: ["/favicon.png"]
  },
  openGraph: {
    title: "Best School in Loni | Triveni Triratan Public Jr. High School",
    description:
      "Admission open for session 2026-27. Quality education, discipline, safety, and student development in Prakash Vihar, Loni, Ghaziabad.",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Triratan Public Jr. High School",
    images: [
      {
        url: "/images/triveni-school-logo.jpeg",
        width: 786,
        height: 849,
        alt: "Triveni Triratan Public Jr. High School logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best School in Loni | Triveni Triratan Public Jr. High School",
    description:
      "Admission open 2026-27 at Triveni Triratan Public Jr. High School, Loni.",
    images: ["/images/triveni-school-logo.jpeg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
