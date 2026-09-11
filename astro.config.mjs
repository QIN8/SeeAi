import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const githubPages = process.env.GITHUB_PAGES === "true";
const site =
  process.env.SITE_URL ||
  (githubPages ? "https://qin8.github.io" : "https://qin8.github.io");
const base = process.env.BASE_PATH || (githubPages ? "/SeeAi" : "/");

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "min-light",
    },
  },
});
