export type Role = { when: string; title: string; org: string; body?: string; badge: string; highlight?: boolean };

export const experience: Record<"Leadership" | "Internships" | "Volunteering", { intro: string; roles: Role[] }> = {
  Leadership: {
    intro: "Lead, deputy and head roles across OGverse, UNILAG and Lagos.",
    roles: [
      { when: "CAC · July 2026", title: "Founder & CEO", org: "OGverse Innovations", body: "Leads product and engineering at OGverse, building PathSync, GraphSense, NaijaOpportunities and Lectio. Registered with the CAC (BN 9710703) and verified by SMEDAN.", badge: "Lagos", highlight: true },
      { when: "Apr 2025 to now", title: "AI/ML Lead", org: "Techstars UNILAG", body: "Runs the AI squad's technical sessions and workshops, and mentors students through model building, deployment and ML ethics. Previously AI/ML Co-Lead.", badge: "Technical Lead" },
      { when: "Jan 2026 to now", title: "AI/ML Track Lead & Deputy Sponsorship Lead", org: "ASES UNILAG", body: "Organises AI/ML workshops, writes sponsorship proposals for Systems Engineering Week and the H.O.D Games, and led the department's industrial-visit request to Interswitch.", badge: "Partnerships" },
      { when: "Sep 2026 to now", title: "Operations Lead 2", org: "Quality Education For All Initiative", badge: "QEFAI" },
      { when: "Ongoing", title: "Head of Finance", org: "FAMGO Enterprises", badge: "Finance" },
      { when: "Ongoing", title: "Head of Finance, Operations and Technical", org: "Radiant Church", badge: "Operations" },
    ],
  },
  Internships: {
    intro: "Hands-on placements in AI/ML and solar engineering.",
    roles: [
      { when: "Oct 2026 to now", title: "AI/ML Intern", org: "Teazy Tech, via AFRETEC UNILAG", body: "Selected and matched to the startup through the 2026 UNILAG Tech Skills Marketplace Internship on the AI/ML track. Based at the AI UniPod hub, University of Lagos.", badge: "AI UniPod", highlight: true },
      { when: "Three-month placement", title: "SIWES Trainee", org: "Herzer Solar Energy", body: "Works on solar-powered devices with the Herzer Solar Energy team, under Dr Gbeniyi.", badge: "Solar" },
    ],
  },
  Volunteering: {
    intro: "Sponsorship, media and planning work for student bodies.",
    roles: [
      { when: "2026 to now", title: "Sponsorship and Partnership Team", org: "ULES, SPE UNILAG and ECX UNILAG", body: "Selected for ULES after interview in October 2026, and joined SPE UNILAG in September 2026.", badge: "Partnerships" },
      { when: "Sep 2026 to now", title: "Media and Content; Logistics and Planning", org: "SPE UNILAG", body: "Edited event video content and helped plan the SPE movie night.", badge: "Media" },
    ],
  },
};

export const awards = [
  { b: "Winner", s: "MSSN Unboxed 2026 Innovation Pitch, PathSync" },
    { b: "1st place", s: "AFRETEC-UNILAG Inclusive Education Challenge 3.0, MathWorks category" },
  { b: "Top 20", s: "Dangote Cement University Engineering Challenge 2026, of 300+" },
  { b: "1st place", s: "Wekoya x ULES Smart Study Competition 2026" },
  { b: "$100 award", s: "IBM Bob 2.0 Hackathon participation award, lablab.ai, Hackathon Repo Doctor" },
  { b: "63rd / 1,600", s: "Squad Hackathon 3.0, Vouch" },
  { b: "Round 2", s: "Switch Global Competition 2026, Team Phos, one of 244 teams" },
  { b: "Cohort 2", s: "UNDP METI UniPods AI Innovation Programme" },
];

export const tools = [
  { n: "01", h: "Backend", items: ["Python, TypeScript", "FastAPI, Express, Flask", "Supabase, PostgreSQL", "pgvector, Firestore", "Jest, GitHub Actions"] },
  { n: "02", h: "AI / ML", items: ["scikit-learn, pandas", "Random Forest, Decision Trees", "LLMs: Groq, Claude", "Multi-agent systems", "Vector search"] },
  { n: "03", h: "Frontend", items: ["React, Next.js", "Vite", "Tailwind CSS", "Vercel, Render"] },
  { n: "04", h: "Payments & Web3", items: ["PayPal REST APIs", "Solana", "Rust, Anchor"] },
  { n: "05", h: "Engineering", items: ["MATLAB", "ESP32, embedded C++", "PCB design", "Solar-powered systems"] },
];
