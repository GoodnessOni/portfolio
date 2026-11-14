import type { MetadataRoute } from "next";
import { asset } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Goodness Oni",
    short_name: "Goodness Oni",
    description: "AI/ML engineer and founder of OGverse Innovations.",
    start_url: asset("/"),
    display: "standalone",
    background_color: "#fff8ea",
    theme_color: "#101b3e",
    icons: [
      { src: asset("/icon-512.png"), sizes: "512x512", type: "image/png" },
      { src: asset("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" },
    ],
  };
}
