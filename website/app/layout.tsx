import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LeftBar } from "@/components/main/leftbar";
import AppHeader from "@/components/main/appheader";

const geistMono = Geist_Mono({
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
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full w-full antialiased`}
    >
      <body className="min-h-full">
        <SidebarProvider>
          <AppHeader links={links} />
          <div>
            <LeftBar />
            <main>{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
