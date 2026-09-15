import type { SVGProps } from "react";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

function Github(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.73H9.53V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.8-1.53 3 0 3.55 1.98 3.55 4.55v5.23Z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nealson-setiawan-4a1700252/",
    icon: Linkedin,
  },
  { name: "GitHub", href: "https://github.com/nealsonS", icon: Github },
  {
    name: "JobStreet",
    href: "https://id.jobstreet.com/id/profiles/nealson-setiawan-4w6flyyns9",
    icon: BriefcaseBusiness,
  },
];

export function AboutMeBody() {
  return (
    <div className="mt-6 max-w-2xl space-y-6">
      <div className="space-y-3">
        <p className="text-2xl font-medium sm:text-3xl">AI Engineer</p>
        <p className="text-muted-foreground flex items-center gap-2 text-sm">
          <MapPin className="size-4" aria-hidden="true" />
          Based in Jakarta, Indonesia
        </p>
      </div>
      <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
        Hi, I’m Nealson — an AI Engineer based in Jakarta, Indonesia. Welcome to
        my corner of the web.
      </p>
      <div className="flex gap-3" role="group" aria-label="Social profiles">
        {socialLinks.map(({ name, href, icon: Icon }) => (
          <Button
            key={name}
            variant="outline"
            size="icon-lg"
            disabled={!href}
            aria-label={href ? name : `${name} profile coming soon`}
            title={name}
            render={
              href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" />
              ) : undefined
            }
          >
            <Icon className="size-5" aria-hidden="true" />
          </Button>
        ))}
      </div>
    </div>
  );
}

export function EducationBody() {
  return <>Education</>;
}

export function ExperienceBody() {
  return <>Experience</>;
}
