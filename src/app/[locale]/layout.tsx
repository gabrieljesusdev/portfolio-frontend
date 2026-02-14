import React from "react";
import type { Metadata } from "next";

import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import { Urbanist } from "next/font/google";

import "@/app/globals.css";
import ClientSession from "@/components/system/ClientSession";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gabrieljesus.dev"),
  title: {
    default: "Gabriel Jesus | Desenvolvedor de Software",
    template: "%s | Gabriel Jesus",
  },
  description:
    "Gabriel Jesus é desenvolvedor fullstack especializado em TypeScript, Node.js, Next.js e UI/UX. Criação de sistemas modernos, rápidos e bem arquitetados.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://gabrieljesus.dev",
  },
  openGraph: {
    type: "website",
    url: "https://gabrieljesus.dev",
    title: "Gabriel Jesus | Desenvolvedor Fullstack",
    description:
      "Desenvolvedor fullstack focado em TypeScript, Node.js, Next.js e UI/UX. Especialista em performance e arquitetura moderna.",
    siteName: "Gabriel Jesus",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Jesus | Desenvolvedor Fullstack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Jesus | Desenvolvedor Fullstack",
    description:
      "Fullstack Developer especializado em TypeScript, Node.js, Next.js e UI/UX.",
    images: ["/og-image.png"],
  },
  authors: [{ name: "Gabriel Jesus" }],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      <NextIntlClientProvider>
        <ClientSession>
          <body className={urbanist.variable}>{children}</body>
        </ClientSession>
      </NextIntlClientProvider>
    </html>
  );
}
