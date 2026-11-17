export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://engrog.tech").replace(/\/$/, "");

/** Prefix a public asset path with the deploy base path. Empty on the custom domain (site is at the root). */
export const asset = (p: string) => `${basePath}${p}`;

/** Absolute public URL for a file in /public. siteUrl already includes the base path, so never combine it with asset(). */
export const absUrl = (p: string) => `${siteUrl}${p}`;

export const cvPath = "/Goodness_Oni_Master_CV.pdf";

export const contact = {
  email: "goodnessengine2008@gmail.com",
  phone: "+234 701 688 3477",
  phoneHref: "tel:+2347016883477",
  github: "https://github.com/GoodnessOni",
  linkedin: "https://www.linkedin.com/in/engrogonigoodness",
};

/*
  Canonical, Open Graph, Twitter, JSON-LD, robots and sitemap URLs all
  derive from siteUrl (and basePath) above, set in .github/workflows/deploy.yml
  and public/CNAME. The live site is https://engrog.tech (root path, no /portfolio prefix).
*/
export const seo = {
  title: "Goodness Oni · AI/ML Engineer · Systems Engineering, UNILAG",
  description:
    "Goodness Oni is an AI/ML engineer and Systems Engineering student at UNILAG, Lagos. Founder of OGverse Innovations, he builds AI products end to end, from models to backend and payments.",
  ogImageAlt: "Goodness Oni, Systems thinker. AI builder. AI/ML engineer and Systems Engineering student at UNILAG, Lagos.",
};
