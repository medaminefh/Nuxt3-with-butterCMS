import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  env: {
    simplePageWithButterCMSURL: import.meta.env
      .NUXT_ENV_simplePageWithButterCMSURL,
  },
});
