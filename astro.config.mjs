import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://islamischeliteratur.de",
  output: "static",
  vite: {
    cacheDir: ".cache/vite",
    server: {
      host: true
    }
  }
});
