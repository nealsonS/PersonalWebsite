"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Hash } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

type TocItem = { id: string; title: string };

export function LeftBar() {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    let headings: HTMLElement[] = [];
    let frame = 0;

    function updateProgress() {
      frame = 0;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const fraction = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setProgress(Math.min(1, Math.max(0, fraction)));

      // Match the sticky header plus the anchor's breathing room.
      const readingLine = 80;
      let current = headings[0]?.id ?? "";
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= readingLine)
          current = heading.id;
      }
      if (maxScroll > 0 && window.scrollY >= maxScroll - 1) {
        current = headings.at(-1)?.id ?? "";
      }
      setActiveId(current);
    }

    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    }

    function collectHeadings() {
      headings = Array.from(
        main!.querySelectorAll<HTMLElement>("h1[id], h2[id]"),
      );
      setItems(
        headings.map((heading) => ({
          id: heading.id,
          title: heading.textContent?.trim() || heading.id,
        })),
      );
      scheduleUpdate();
    }

    // Also handle headings arriving after navigation or streamed rendering.
    const mutationObserver = new MutationObserver(collectHeadings);
    mutationObserver.observe(main, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["id"],
    });
    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(main);
    collectHeadings();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      mutationObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathname]);

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup className="flex-1">
          <SidebarGroupLabel>Table of Contents</SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-1 flex-col">
            <nav
              aria-label="Table of contents"
              className="relative flex flex-1 flex-col"
            >
              {items.length > 0 && (
                <Progress
                  aria-label="Page reading progress"
                  value={progress * 100}
                  orientation="vertical"
                  className="absolute inset-y-0 left-0"
                />
              )}
              <SidebarMenu className="flex-1 justify-between pl-3 group-data-[collapsible=icon]:pl-1">
                {items.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={activeId === item.id}
                      render={
                        <a
                          href={`#${encodeURIComponent(item.id)}`}
                          aria-current={
                            activeId === item.id ? "location" : undefined
                          }
                        />
                      }
                      onClick={() => {
                        if (isMobile) setOpenMobile(false);
                      }}
                    >
                      <Hash />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
              {items.length === 0 && (
                <p className="text-muted-foreground px-2 text-xs group-data-[collapsible=icon]:hidden">
                  No sections on this page yet.
                </p>
              )}
            </nav>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
