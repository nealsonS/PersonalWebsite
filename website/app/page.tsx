import {
  AboutMeBody,
  EducationBody,
  ExperienceBody,
} from "@/components/main/home_components";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-6 py-10">
      <section aria-labelledby="about-me" className="min-h-[70vh]">
        <p className="text-muted-foreground mb-4 font-code text-sm">
          {"// hello, world"}
        </p>
        <h1
          id="about-me"
          className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Nealson Setiawan
          <span className="text-primary" aria-hidden="true">
            _
          </span>
        </h1>
        <AboutMeBody />
      </section>
      <section aria-labelledby="projects" className="min-h-[70vh]">
        <h2 id="experience" className="text-3xl font-semibold">
          Experience
        </h2>
        <ExperienceBody />
      </section>
      <section aria-labelledby="experience" className="min-h-[70vh]">
        <h2 id="education" className="text-3xl font-semibold">
          Education
        </h2>
        <EducationBody />
      </section>
    </div>
  );
}
