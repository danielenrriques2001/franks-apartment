import { defineConfig } from "astro/config";
import react from '@astrojs/react';
import prefetch from "@astrojs/prefetch";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), prefetch(), astroImageTools]
});