// tailwind.config.ts
import type { Config } from "tailwindcss";
import relumeTailwindPreset from "@relume_io/relume-tailwind";

const config: Config = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [relumeTailwindPreset],
  theme: {
    extend: {
      colors: {
        'light-pink': '#FFEAEA',
        'pink': '#FFE1E1',
        'light-purple': '#fffcfc',
        'light-blue': '#f2f2f2',
      },
    },
  },
};
export default config;
