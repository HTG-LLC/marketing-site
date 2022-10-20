import { defineConfig } from "astro/config";
import serviceWorker from "astrojs-service-worker";

export default defineConfig({
  site: "https://www.htgreenwich.com",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [serviceWorker()],
});
