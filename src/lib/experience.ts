export interface Experience {
  id: string;
  start: string;
  end: string;
  title: string;
  company: string;
  summary: string;
}

// Newest first. Dates are display strings, so edit them freely.
export const experience: Experience[] = [
  {
    id: "ksense",
    start: "May 2026",
    end: "Sep 2026",
    title: "Full Stack Software Engineer",
    company: "Ksense Technology Group",
    summary:
      "Delivered client projects at a software agency, using AI-powered development to ship production web apps faster without cutting corners.",
  },
  {
    id: "codedbytravis",
    start: "Jun 2025",
    end: "Present",
    title: "Software Engineer",
    company: "CodedByTravis",
    summary:
      "Designing and shipping my own products: AI-powered tools, multi-tenant APIs, and real-time systems, from architecture through deployment.",
  },
  {
    id: "cxtec",
    start: "Mar 2024",
    end: "Apr 2025",
    title: "Software Engineer II",
    company: "CXtec",
    summary:
      "Owned the modernization of legacy systems on a fully remote, multinational team.",
  },
  {
    id: "meyer",
    start: "2019",
    end: "2024",
    title: "Front End Developer",
    company: "Meyer Distributing",
    summary:
      "Architected 25+ internal apps and rebuilt the B2B platform behind 10,000+ retail businesses. Mentored three engineers along the way.",
  },
  {
    id: "independent",
    start: "2016",
    end: "2019",
    title: "Full Stack Developer",
    company: "Independent",
    summary:
      "Client websites from requirements to launch, focused on speed, search visibility, and clarity.",
  },
];
