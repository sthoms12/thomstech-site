export interface ToolItem {
  id: string;
  name: string;
  category: string;
  domain: string;
  url: string;
  description: string;
  specs: string[];
  hostingNote: string;
  ctaLabel: string;
}

export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

export interface SocialLink {
  id: string;
  label: string;
  handle: string;
  url: string;
}

export const SITE = {
  name: "Thoms Tech",
  domain: "thomstech.com",
  url: "https://thomstech.com/",
  author: "Steve Thoms",
  role: "Microsoft Technology Lead",
  title: "Steve Thoms | Microsoft Technology Lead & IT Operations Tools",
  description:
    "Steve Thoms — Microsoft Technology Lead building practical, local-first browser tools for IT operations, SaaS renewal management, troubleshooting, and Microsoft 365 teams.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "in/steve-thoms",
    url: "https://www.linkedin.com/in/steve-thoms-81381990",
  },
  {
    id: "github",
    label: "GitHub",
    handle: "@sthoms12",
    url: "https://github.com/sthoms12",
  },
  {
    id: "x",
    label: "X (Twitter)",
    handle: "@thomstech12",
    url: "https://x.com/thomstech12",
  },
];

export const TOOLS: ToolItem[] = [
  {
    id: "renewaldesk",
    name: "My Renewal Desk",
    category: "IT Renewals · Local-First",
    domain: "myrenewaldesk.app",
    url: "https://myrenewaldesk.app/",
    description:
      "A private, browser-based renewal decision register for IT teams. Track notice deadlines, auto-renew exposure, service continuity risk, and 12-month committed spend across SaaS, cloud, domains, certificates, and infrastructure contracts.",
    specs: ["IndexedDB storage", "JSON / CSV / ICS export", "Offline PWA"],
    hostingNote: "No account",
    ctaLabel: "Open My Renewal Desk",
  },
  {
    id: "solvestack",
    name: "SolveStack",
    category: "Troubleshooting · Local-First",
    domain: "solvestack-ai.app",
    url: "https://solvestack-ai.app/",
    description:
      "A structured troubleshooting workspace for IT professionals. Capture symptoms, evidence, hypotheses, and resolutions locally in the browser, then export durable runbooks, Markdown, HTML, ZIP archives, or vendor-neutral AI handoffs.",
    specs: ["Browser-only notebook", "Runbook & ZIP exports", "AI handoff prompts"],
    hostingNote: "No account",
    ctaLabel: "Open SolveStack",
  },
  {
    id: "seatleak",
    name: "SeatLeak",
    category: "License Optimization · Calculator",
    domain: "seatleak.app",
    url: "https://seatleak.app/",
    description:
      "An offline-capable SaaS and Microsoft 365 Copilot seat-waste calculator. Estimate unused licenses, compare recovery scenarios, model term-aware cost projections, and generate a clean action plan and executive summary before renewal.",
    specs: ["M365 Copilot modeling", "Term-aware projections", "Executive summary"],
    hostingNote: "Offline-ready",
    ctaLabel: "Open SeatLeak",
  },
  {
    id: "m365-barometer",
    name: "M365 Barometer",
    category: "Microsoft 365 · Public Signal",
    domain: "m365-barometer.com",
    url: "https://www.m365-barometer.com/",
    description:
      "A Cloudflare-native public dashboard that automatically tracks recent community discussion across Microsoft 365 products — including Copilot, Teams Phone, Exchange, and Intune — with a transparent, published methodology.",
    specs: ["Cloudflare Workers", "Automated ingestion", "Open methodology"],
    hostingNote: "Live dashboard",
    ctaLabel: "Open M365 Barometer",
  },
];

export const PRINCIPLES: PrincipleItem[] = [
  {
    number: "01",
    title: "Local-first & private",
    description:
      "Operational IT data does not belong in another SaaS silo. Workspace tools store records in your own browser via IndexedDB and export cleanly to JSON, CSV, ICS, or Markdown.",
  },
  {
    number: "02",
    title: "Static & edge-native",
    description:
      "Built with lightweight static architectures and Cloudflare Pages & Workers so pages load immediately, stay reliable, and keep working offline when you need them.",
  },
  {
    number: "03",
    title: "Grounded in IT operations",
    description:
      "Every tool targets a real recurring operational bottleneck: missed auto-renew notice windows, undocumented root-cause investigations, idle SaaS seats, and Microsoft 365 change noise.",
  },
];
