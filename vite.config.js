import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/test-portfolio/",
  plugins: [tailwindcss()],
  content: ["./index.html", "./impressum.html", "./src/**/*.{js,ts,jsx,tsx}"],
});
