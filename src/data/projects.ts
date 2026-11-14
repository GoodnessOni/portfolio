export type Category = "AI/ML" | "Backend" | "Hackathon" | "Engineering" | "Web3" | "With David";

export type Link = { label: string; href: string };

export type Project = {
  slug: string;
  num: string;
  title: string;
  kind: string;
  did: string;
  tags: string[];
  role: string;
  team: string;
  result?: { text: string; tone: "gold" | "plain" };
  featured: boolean;
  categories: Category[];
  shot?: { src: string; bar: string };
  clabel?: string;
  problem: string;
  built: string[];
  outcome: string;
  stack: string[];
  links: Link[];
};

const gh = (repo: string) => `https://github.com/GoodnessOni/${repo}`;

export const projects: Project[] = [
  {
    slug: "pathsync-ai",
    num: "01",
    title: "PathSync AI",
    kind: "AI scholarship discovery and matching",
    did: "Founded and engineered it end to end: a guided interview that turns everyday experience into the language scholarship panels look for, with pgvector matching.",
    tags: ["FastAPI", "React", "pgvector", "Claude"],
    role: "Founder",
    team: "Founder and lead engineer",
    result: { text: "Won · MSSN Unboxed 2026", tone: "gold" },
    featured: true,
    categories: ["AI/ML", "Backend", "Hackathon"],
    clabel: "Interview to match",
    problem:
      "Strong candidates miss scholarships because they cannot see which ones fit them, and they undersell everyday experience that panels actually value.",
    built: [
      "A guided discovery interview, powered by Claude, that turns everyday experience into the language scholarship panels look for.",
      "Matching on Supabase with pgvector, so each person sees the opportunities closest to their profile.",
      "An application-readiness essay checker that flags weak spots before submission.",
      "The FastAPI backend and React frontend, end to end.",
    ],
    outcome: "Winner of the MSSN Unboxed 2026 Innovation Pitch.",
    stack: ["FastAPI", "React", "Supabase", "pgvector", "Claude"],
    links: [
      { label: "Live site", href: "https://pathsync-ai.vercel.app" },
      { label: "Code", href: gh("pathsync-ai") },
    ],
  },
  {
    slug: "paypal-hub",
    num: "02",
    title: "PayPal Hub",
    kind: "Subscription manager with an AI Guardian",
    did: "Built the entire Express backend, PayPal payments and subscriptions, and the Groq-powered Guardian review. Wrote the API contract the frontend was built on.",
    tags: ["Express", "Firebase", "PayPal", "Groq"],
    role: "Backend + AI",
    team: "Team of 2 · David Gilbert on frontend",
    result: { text: "PayPal AI Hackathon 2026", tone: "plain" },
    featured: true,
    categories: ["Backend", "AI/ML", "Hackathon", "With David"],
    shot: { src: "/img/shots/paypal-hub.webp", bar: "paypal-hub.vercel.app" },
    problem:
      "Subscriptions pile up quietly. People lose track of what they pay for and have no simple way to judge which ones are worth keeping against a budget.",
    built: [
      "The entire Express backend: Firebase and Google sign-in with 24-hour API tokens, and per-user Firestore records.",
      "PayPal Sandbox one-time payments and subscriptions.",
      "The Groq-powered Guardian review that recommends keeping, cancelling or reviewing each subscription against a budget, with live currency conversion.",
      "A Discover search that combines Groq with Channel3 product results.",
      "The API contract the frontend was built against, and the API deployment on Render.",
    ],
    outcome: "A working subscription hub with real PayPal flows, shipped for the PayPal AI Hackathon 2026.",
    stack: ["Express", "Firebase", "Firestore", "PayPal REST", "Groq", "Render"],
    links: [
      { label: "Live site", href: "https://paypal-hub.vercel.app" },
      { label: "Code", href: "https://github.com/MI-Systems-Tech/PayPal-hub" },
    ],
  },
  {
    slug: "graphsense",
    num: "03",
    title: "GraphSense",
    kind: "Charts turned into sound for visually impaired readers",
    did: "Shaped the product and delivered the winning presentation for Team Sync, a team of four. Concept by Mumeen, MATLAB build by David Gilbert.",
    tags: ["MATLAB", "Accessibility"],
    role: "Product + Pitch",
    team: "Team Sync, 4 people · concept by Mumeen, MATLAB build by David Gilbert",
    result: { text: "1st · AFRETEC x MathWorks", tone: "gold" },
    featured: true,
    categories: ["Engineering", "Hackathon", "With David"],
    clabel: "Chart to audio · MATLAB",
    problem: "Visually impaired students are locked out of charts and graphs, which carry much of what is taught in engineering and science.",
    built: [
      "Shaped the product: a tool that maps chart data to changing audio pitch so a reader can hear the shape of a graph.",
      "Delivered the winning presentation for the team.",
    ],
    outcome: "1st place, AFRETEC-UNILAG Inclusive Education Challenge 3.0, MathWorks MATLAB category.",
    stack: ["MATLAB", "Audio sonification", "Accessibility"],
    links: [],
  },
  {
    slug: "lectio",
    num: "04",
    title: "Lectio",
    kind: "Shared class study workspace",
    did: "Built the FastAPI backend that ranks classmates' lecture recordings, transcribes the best one once, and generates cited notes and practice questions.",
    tags: ["FastAPI", "Transcription", "LLM"],
    role: "Backend Lead",
    team: "Team of 2 · David Gilbert on frontend",
    result: { text: "OGverse product", tone: "plain" },
    featured: true,
    categories: ["Backend", "AI/ML", "With David"],
    shot: { src: "/img/shots/lectio.webp", bar: "lectio-web-ten.vercel.app" },
    problem:
      "Classmates each record the same lecture, then study alone from patchy audio. Nobody gets one clean, shared set of notes.",
    built: [
      "A FastAPI backend that groups classmates' recordings of one lecture and ranks them by quality.",
      "A pipeline that transcribes the best recording once, then generates shared notes and practice questions that cite transcript moments.",
      "Offline study packs for low-data study.",
    ],
    outcome: "One recording, transcribed once, becomes notes and practice questions for the whole class.",
    stack: ["FastAPI", "Python", "ffmpeg", "Speech transcription", "LLM"],
    links: [
      { label: "Live site", href: "https://lectio-web-ten.vercel.app" },
      { label: "Code", href: gh("Lectio") },
    ],
  },
  {
    slug: "vouch",
    num: "05",
    title: "Vouch",
    kind: "Portable trust profiles for traders",
    did: "Led the team and built the scoring and fraud-detection model logic behind every trust score.",
    tags: ["ML", "Fraud detection"],
    role: "Project Lead",
    team: "Team project with David Gilbert",
    result: { text: "63rd of 1,600 · Squad 3.0", tone: "gold" },
    featured: true,
    categories: ["AI/ML", "Hackathon", "With David"],
    clabel: "Trust score",
    problem: "Small traders have no portable record of trust, so every new buyer, supplier or lender starts from zero.",
    built: [
      "Led the team building a portable business trust profile for traders.",
      "Built the scoring and fraud-detection model logic behind each trust score.",
    ],
    outcome: "Ranked 63rd of 1,600 entries at Squad Hackathon 3.0.",
    stack: ["Machine learning", "Fraud detection", "Scoring models"],
    links: [],
  },
  {
    slug: "resonance",
    num: "06",
    title: "Resonance",
    kind: "Two-agent audience research for developers",
    did: "Led a team of four building agents that predict how a target user would review a product, in their voice, and profile its likely audience.",
    tags: ["Multi-agent", "LLM"],
    role: "Project Lead",
    team: "Team of 4 · I led the project",
    result: { text: "DSN x BCT LLM Agent Challenge", tone: "plain" },
    featured: true,
    categories: ["AI/ML", "Hackathon"],
    shot: { src: "/img/shots/resonance.webp", bar: "project-resonance.vercel.app" },
    problem: "Developers ship without knowing how their target users will react, or who their audience really is.",
    built: [
      "Led a two-agent system: one agent predicts how a target user would rate and review a project, in that user's voice.",
      "The second agent profiles the likely audience for the product.",
    ],
    outcome: "Built and shipped for the DSN x BCT LLM Agent Challenge.",
    stack: ["Multi-agent systems", "LLMs", "Vercel"],
    links: [
      { label: "Live site", href: "https://project-resonance.vercel.app" },
      { label: "Code", href: gh("ProjectResonance") },
    ],
  },
  {
    slug: "naijaopportunities",
    num: "07",
    title: "NaijaOpportunities",
    kind: "Jobs and scholarships platform",
    did: "Built it with Next.js 15 and Supabase, fed by a Python scraper GitHub Actions runs every six hours.",
    tags: ["Next.js", "Supabase"],
    role: "Founder",
    team: "Solo · founder and developer",
    featured: false,
    categories: ["Backend"],
    shot: { src: "/img/shots/naija-opportunities.webp", bar: "naijaopportunities.live" },
    problem: "Jobs and scholarships for Nigerians are scattered across dozens of sites and go stale fast.",
    built: [
      "A Next.js 15, TypeScript, Tailwind and Supabase platform.",
      "A Python scraper that GitHub Actions runs every six hours to keep listings fresh.",
      "A shareable page for every listing.",
    ],
    outcome: "A live platform with listings refreshed four times a day.",
    stack: ["Next.js 15", "TypeScript", "Tailwind", "Supabase", "Python", "GitHub Actions"],
    links: [
      { label: "Live site", href: "https://www.naijaopportunities.live" },
      { label: "Code", href: gh("naija-opportunities") },
    ],
  },
  {
    slug: "health-risk-predictor",
    num: "08",
    title: "Health Risk Predictor",
    kind: "OGAI · Digital SkillUp Africa capstone",
    did: "Trained Random Forest and Decision Tree models for heart-disease and muscle-weakness risk, deployed in Flask.",
    tags: ["scikit-learn", "Flask"],
    role: "Solo",
    team: "Solo",
    featured: false,
    categories: ["AI/ML"],
    shot: { src: "/img/shots/health-risk-predictor.webp", bar: "health-risk-predictor-dmlt.onrender.com" },
    problem: "Early signs of heart disease and muscle weakness are easy to miss without a quick, accessible screening step.",
    built: [
      "Trained Random Forest and Decision Tree models to predict heart-disease and muscle-weakness risk.",
      "Deployed them in a Flask app on Render with prediction history by category.",
    ],
    outcome: "Capstone project for the Digital SkillUp Africa AI/ML training (The Incubator Hub).",
    stack: ["Python", "scikit-learn", "pandas", "Flask", "Render"],
    links: [
      { label: "Live site", href: "https://health-risk-predictor-dmlt.onrender.com" },
      { label: "Code", href: gh("health-risk-predictor-") },
    ],
  },
  {
    slug: "hackathon-repo-doctor",
    num: "09",
    title: "Hackathon Repo Doctor",
    kind: "IBM Bob workflow, lablab.ai",
    did: "Diagnoses a messy repo, writes a Jest and Supertest suite, then fixes the top issues and proves each with a test.",
    tags: ["Jest", "Supertest"],
    role: "Developer",
    team: "Developer",
    result: { text: "$100 award · IBM Bob 2.0", tone: "gold" },
    featured: false,
    categories: ["Backend", "Hackathon"],
    clabel: "11/11 passing",
    problem: "Hackathon code is rushed and untested, so it breaks the moment anyone else tries to build on it.",
    built: [
      "An IBM Bob workflow that diagnoses a messy hackathon repository.",
      "Writes a Jest and Supertest suite (10/10 passing).",
      "Fixes the top-ranked issues and proves each fix with an added test (11/11).",
    ],
    outcome: "Winner of a $100 participation award, IBM Bob 2.0 Hackathon on lablab.ai, September 2026.",
    stack: ["Node.js", "Jest", "Supertest", "IBM Bob"],
    links: [{ label: "Code", href: gh("Hackathon-Repo-Doctor") }],
  },
  {
    slug: "scholary",
    num: "10",
    title: "Scholary",
    kind: "Solana scholarship escrow",
    did: "Sponsors lock funds in a program vault released only when a registrar oracle verifies the milestone.",
    tags: ["Rust", "Anchor"],
    role: "Developer",
    team: "Developer",
    result: { text: "OnchainED 1.0", tone: "plain" },
    featured: false,
    categories: ["Web3", "Hackathon"],
    clabel: "Milestone escrow",
    problem: "Scholarship sponsors want proof that funds reach students who keep making academic progress.",
    built: [
      "A Solana program vault where sponsors lock funds.",
      "Release only when a registrar oracle verifies the student's academic milestone.",
      "Rust and Anchor on-chain, with a React and TypeScript frontend.",
    ],
    outcome: "Built for the OnchainED 1.0 Hackathon.",
    stack: ["Solana", "Rust", "Anchor", "React", "TypeScript"],
    links: [{ label: "Code", href: gh("scholary") }],
  },
  {
    slug: "crxray",
    num: "11",
    title: "CrxRay",
    kind: "Browser-extension risk scanner",
    did: "Managed the product and delivered the demo, pitch and presentation. Built with David Gilbert.",
    tags: ["React", "Security"],
    role: "Product Manager",
    team: "Team with David Gilbert",
    result: { text: "TLN Cybersecurity 2026", tone: "plain" },
    featured: false,
    categories: ["Hackathon", "With David"],
    clabel: "A to F risk grade",
    problem: "People install browser extensions without understanding the permissions and privacy risks they accept.",
    built: [
      "Managed the product for a React browser-extension risk scanner.",
      "It grades permission and privacy signals from A to F with plain-language explanations.",
      "Delivered the demo, pitch and presentation.",
    ],
    outcome: "Entered in the Tech Literacy Network (TLN) Cybersecurity Challenge 2026.",
    stack: ["React", "Browser extensions", "Security"],
    links: [],
  },
  {
    slug: "cement-mill-analysis",
    num: "12",
    title: "Cement Mill Analysis",
    kind: "Team Kilvora, with David Gilbert",
    did: "Managed the product, built the MATLAB modelling, delivered the pitch and ran the demo. Figures are model estimates.",
    tags: ["MATLAB", "ANSYS"],
    role: "Product Manager",
    team: "Team Kilvora, 2 people · David Gilbert led the ANSYS analysis",
    result: { text: "Top 20 of 300+ · Dangote", tone: "gold" },
    featured: false,
    categories: ["Engineering", "Hackathon", "With David"],
    clabel: "Mill shell and liner",
    problem: "A cement mill shell and liner lose efficiency over time, and the plant needs a clear picture of where conversion is lost.",
    built: [
      "Managed the product and built the MATLAB modelling.",
      "Delivered the pitch and ran the demo. David Gilbert led the ANSYS structural and thermal analysis.",
    ],
    outcome:
      "Top 20 of 300+ submissions, Dangote Cement Plc University Engineering Challenge 2026. The team estimated a 27.6% conversion gap and modelled a pathway to 85.0% conversion (model estimates, not plant results).",
    stack: ["MATLAB", "ANSYS"],
    links: [],
  },
  {
    slug: "starbie",
    num: "13",
    title: "Starbie",
    kind: "Motion-controlled digital pet PCB",
    did: "Designed the board around an ESP32-C3 with OLED, MPU6050 and DHT11 sensors, programmed in C++.",
    tags: ["ESP32", "KiCad"],
    role: "Hardware",
    team: "Solo",
    featured: false,
    categories: ["Engineering"],
    shot: { src: "/img/shots/starbie-pcb.webp", bar: "starbie.kicad_pcb · README" },
    problem: "A personal hardware project: a small companion device that reacts to how it is moved and to the room around it.",
    built: [
      "Designed a PCB around an ESP32-C3 with an OLED display.",
      "Added an MPU6050 motion sensor and a DHT11 temperature and humidity sensor.",
      "Programmed it in C++.",
    ],
    outcome: "A complete board design with firmware, published with its README.",
    stack: ["ESP32-C3", "C++", "KiCad", "MPU6050", "DHT11"],
    links: [{ label: "Code", href: gh("starbie") }],
  },
];

export const featured = projects.filter((p) => p.featured);
export const archive = projects.filter((p) => !p.featured);
export const homeFilters = ["AI/ML", "Backend", "Hackathon", "Engineering", "With David"] as const;
export const allFilters: Category[] = ["AI/ML", "Backend", "Hackathon", "Engineering", "Web3", "With David"];
