import eslintReact from "@eslint-react/eslint-plugin"; 
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}"],
    extends: [
      eslintReact.configs["recommended-typescript"],
    ],
  },
  globalIgnores(['dist/']),
]);
