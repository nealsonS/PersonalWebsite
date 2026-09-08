import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

type NavLink = {
  name: string;
  href: string;
};

type AppHeaderProps = {
  links: NavLink[];
};
export default function AppHeader({ links }: AppHeaderProps) {
  return (
    <header className="bg-background sticky top-0 z-50 flex h-14 w-full shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-full" />
      <nav aria-label="Primary navigation" className="flex items-center gap-1">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
