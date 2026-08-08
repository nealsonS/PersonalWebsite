import { SidebarTrigger } from "../ui/sidebar";

type Link = {
  name: string;
  href: string;
};

type AppHeaderProps = {
  links: Link[];
};
export default function AppHeader({ links }: AppHeaderProps) {
  return (
    <header className="flex justify-between gap-4 bg-amber-300 z-50 top-0 sticky w-full">
      <SidebarTrigger />
      {links.map((link) => (
        <a href={link.href} key={link.name}>
          {link.name}
        </a>
      ))}
    </header>
  );
}
