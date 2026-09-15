import type { SVGProps } from "react";
import {
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  Cpu,
  Database,
  ScanEye,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

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

const education = [
  {
    school: "University of Southern California",
    degree: "M.S. in Applied Data Science",
    level: "Master’s degree",
    dates: "August 2023 – May 2025",
    location: "Los Angeles, California",
    coursework: [
      "Computer Vision",
      "Natural Language Processing",
      "Generative AI & Large Language Models",
      "Data Mining with Apache Spark",
      "Recommender Systems",
    ],
    tools: [
      "PyTorch",
      "Keras / TensorFlow",
      "LangChain",
      "SQL",
      "MongoDB",
      "Firebase",
      "DynamoDB",
    ],
  },
  {
    school: "University of California, Santa Barbara",
    degree: "B.S. in Statistics & Data Science",
    level: "Bachelor’s degree",
    dates: "September 2021 – June 2023",
    location: "Santa Barbara, California",
    coursework: [
      "Statistical Machine Learning",
      "Algorithms & Data Structures",
      "Time Series",
      "Data Visualization",
      "Stochastic Processes",
      "Probability Theory",
      "Regression Analysis",
      "Design of Statistical Experiments",
    ],
    tools: ["Python", "R", "SQL", "SAS"],
  },
];

export function EducationBody() {
  return (
    <ol className="mt-8 space-y-6">
      {education.map((school, index) => (
        <li key={school.school}>
          <article aria-labelledby={`degree-${index}`}>
            <Card className="[--card-spacing:--spacing(5)] sm:[--card-spacing:--spacing(6)]">
              <CardHeader className="gap-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="bg-muted text-muted-foreground flex size-10 items-center justify-center rounded-xl border">
                    <GraduationCap className="size-5" aria-hidden="true" />
                  </div>
                  <Badge variant="secondary" className="font-code text-[11px]">
                    {school.level}
                  </Badge>
                </div>
                <div className="space-y-1.5">
                  <CardTitle className="text-xl font-semibold tracking-tight sm:text-2xl">
                    <h3 id={`degree-${index}`}>{school.degree}</h3>
                  </CardTitle>
                  <CardDescription className="text-foreground/80 font-medium">
                    {school.school}
                  </CardDescription>
                </div>
                <div className="text-muted-foreground flex flex-wrap gap-x-5 gap-y-2 text-xs">
                  <p className="flex items-center gap-1.5">
                    <CalendarDays
                      className="size-3.5 shrink-0"
                      aria-hidden="true"
                    />
                    {school.dates}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                    {school.location}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <h4 className="text-muted-foreground font-code text-[11px] uppercase tracking-widest">
                  Relevant coursework
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {school.coursework.map((course) => (
                    <li key={course}>
                      <Badge
                        variant="secondary"
                        className="h-auto whitespace-normal rounded-md py-1 text-xs"
                      >
                        {course}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label="Languages and tools"
                >
                  {school.tools.map((tool) => (
                    <li key={tool}>
                      <Badge
                        variant="outline"
                        className="bg-background h-auto whitespace-normal rounded-md py-1 font-code text-[11px]"
                      >
                        {tool}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardFooter>
            </Card>
          </article>
        </li>
      ))}
    </ol>
  );
}

const workExperience = [
  {
    company: "USC Integrated Media Systems Center",
    icon: ScanEye,
    category: "Research",
    current: true,
    role: "Research Assistant",
    dates: "January 2024 – Present",
    location: "Los Angeles, California",
    highlights: [
      "Researching computer vision under Prof. Seon Kim, focusing on object detection for real-world transportation applications.",
    ],
    technologies: ["Computer Vision", "Object Detection"],
  },
  {
    company: "LG Ads Solutions",
    icon: Database,
    category: "Data & Analytics",
    current: false,
    role: "Jr. Business Analyst",
    dates: "June 2025 – May 2026",
    location: "Los Angeles, California",
    highlights: [
      "Built 15+ analytics pipelines in PySpark and Databricks, transforming raw data into Delta Lake tables for cross-functional dashboards and leadership reporting.",
      "Resolved data quality issues and documented development practices to standardize pipeline work across the organization.",
      "Promoted systematic QA and query optimization through execution plan analysis, caching, and vectorization.",
    ],
    technologies: ["PySpark", "Databricks", "Delta Lake", "Data Quality"],
  },
  {
    company: "Kristal.AI",
    icon: Cpu,
    category: "AI & Product",
    current: false,
    role: "Tech Product Intern",
    dates: "July 2024 – September 2024",
    location: "Singapore, Singapore",
    highlights: [
      "Built a RAG chatbot for confidential document search using quantized LLMs, PostgreSQL, Milvus, and custom LangChain retrievers, achieving 80% query-routing accuracy.",
      "Delivered the chatbot through a Dockerized Streamlit interface and analyzed investor segments using clustering, dimensionality reduction, and Random Forest feature importance.",
      "Fixed financial options simulation logic and validated simulated versus actual profit and loss with matplotlib visualizations.",
    ],
    technologies: ["LangChain", "PostgreSQL", "Milvus", "Docker", "Streamlit"],
  },
];

export function ExperienceBody() {
  return (
    <div className="mt-4 space-y-8">
      <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
        From computer vision research to analytics pipelines and applied AI.
      </p>
      <ol className="relative space-y-6 before:absolute before:inset-y-6 before:left-5 before:w-px before:bg-border sm:before:left-6">
        {workExperience.map((job, index) => (
          <li key={job.company} className="relative pl-14 sm:pl-18">
            <div className="bg-background text-muted-foreground absolute left-0 top-6 flex size-10 items-center justify-center rounded-xl border sm:size-12">
              <job.icon className="size-5" aria-hidden="true" />
            </div>
            <article aria-labelledby={`job-${index}`}>
              <Card className="[--card-spacing:--spacing(5)] sm:[--card-spacing:--spacing(6)]">
                <CardHeader className="gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-muted-foreground font-code text-[11px] uppercase tracking-widest">
                      {String(index + 1).padStart(2, "0")} / {job.category}
                    </span>
                    {job.current && (
                      <Badge
                        variant="outline"
                        className="gap-1.5 border-emerald-600/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                      >
                        <span
                          className="size-1.5 rounded-full bg-current"
                          aria-hidden="true"
                        />
                        Current
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <CardTitle className="text-xl font-semibold tracking-tight sm:text-2xl">
                      <h3 id={`job-${index}`}>{job.role}</h3>
                    </CardTitle>
                    <CardDescription className="text-foreground/80 font-medium">
                      {job.company}
                    </CardDescription>
                  </div>
                  <div className="text-muted-foreground flex flex-wrap gap-x-5 gap-y-2 text-xs">
                    <p className="flex items-center gap-1.5">
                      <CalendarDays
                        className="size-3.5 shrink-0"
                        aria-hidden="true"
                      />
                      {job.dates}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <MapPin
                        className="size-3.5 shrink-0"
                        aria-hidden="true"
                      />
                      {job.location}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-3 text-sm leading-relaxed">
                    {job.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span
                          className="text-foreground/40 mt-0.5 font-code"
                          aria-hidden="true"
                        >
                          ›
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <ul
                    className="flex flex-wrap gap-2"
                    aria-label="Technologies and focus areas"
                  >
                    {job.technologies.map((technology) => (
                      <li key={technology}>
                        <Badge
                          variant="outline"
                          className="bg-background h-auto whitespace-normal rounded-md py-1 font-code text-[11px]"
                        >
                          {technology}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
