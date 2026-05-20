import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Forward /submit API calls to the Node backend during dev
      "/submit": "http://localhost:5000",
    },
  },
});
