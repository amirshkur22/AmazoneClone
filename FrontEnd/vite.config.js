import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/AmazoneClone",
  server: {
    port: 3000,
    hmr: {
      overlay: true,
    },
  },
});
