import type { Config } from "tailwindcss";
import {plugin, content} from "flowbite-react/tailwind";

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(),
  ],
} satisfies Config;
