import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://islamischeliteratur.de",
  output: "static",

  vite: {
    cacheDir: ".cache/vite",
    server: {
      host: true
    }
  },

  adapter: cloudflare()
});