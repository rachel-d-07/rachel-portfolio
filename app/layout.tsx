import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/Providers/ClientProviders";

export const metadata: Metadata = {
  title: "Rachel D'Souza | AI/ML Engineer",
  description: "Portfolio of Rachel D'Souza, AI/ML Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}