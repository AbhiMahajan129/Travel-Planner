import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // --- ADD THIS SERVER BLOCK ---
  server: {
    proxy: {
      // Proxies any request starting with /api
      // to your backend server running on port 5000
      "/api": {
        target: "http://localhost:5000", // Make sure this port matches your backend
        changeOrigin: true,
      },
    },
  },
  // ----------------------------
});
