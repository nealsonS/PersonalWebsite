import type { Metadata } from "next";
import { Open_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LeftBar } from "@/components/main/leftbar";
import { AppHeader, NavLink } from "@/components/main/app-header";
import { ThemeProvider } from "@/components/providers/theme-provider";

const mainFont = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const codeFont = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nealson's Website",
  description: "Personal Website of Nealson",
};

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
] satisfies NavLink[];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${mainFont.variable} ${codeFont.variable} h-full w-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <LeftBar />

            <div className="flex min-w-0 flex-1 flex-col">
              <AppHeader links={links} />
              <main className="flex-1">{children}</main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
