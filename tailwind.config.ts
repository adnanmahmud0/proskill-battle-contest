import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: { extend: {} },
  plugins: [flowbite],
};

export default config;
