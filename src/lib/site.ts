export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://goodnessoni.github.io/portfolio").replace(/\/$/, "");

/** Prefix a public asset path with the deploy base path (GitHub Pages serves from /portfolio). */
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
