import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { AntigravityCanvas, AntigravityStyles } from "@/components/antigravity-background";
import { AuthProvider } from "@/hooks/use-auth";
import { portfolioProfile, skillCategories } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: `${portfolioProfile.name} | ${portfolioProfile.title}`,
  description: portfolioProfile.intro,
  keywords: [portfolioProfile.title, ...skillCategories.flatMap((category) => category.skills), "Portfolio"],
  authors: [{ name: portfolioProfile.name }],
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32" },
      { url: "/logo.svg", sizes: "any" },
    ],
    apple: {
      url: "/logo.png",
      sizes: "180x180",
    },
    other: {
      rel: "apple-touch-icon",
      url: "/logo.png",
    }
  },
  openGraph: {
    title: `${portfolioProfile.name} | ${portfolioProfile.title}`,
    description: portfolioProfile.intro,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioProfile.name} | ${portfolioProfile.title}`,
    description: portfolioProfile.intro,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="font-sans antialiased bg-background text-foreground min-h-screen">
        <ThemeProvider>
          <AuthProvider>
            <AntigravityStyles />
            <AntigravityCanvas particleCount={80} />
            <div className="content-wrapper">
              {children}
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
