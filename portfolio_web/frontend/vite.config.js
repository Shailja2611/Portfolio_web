import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Forward /api calls to the local wrapper around api/submit.js (run `npm run dev:api`)
      "/api": "http://localhost:5055",
    },
  },
});