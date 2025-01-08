import type { Config } from "tailwindcss";
import {plugin, content} from "flowbite-react/tailwind";

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(),
  ],
} satisfies Config;
