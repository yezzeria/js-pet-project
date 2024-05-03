import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import VueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  base: "/js-pet-project/",

  plugins: [vue(), eslintPlugin(), VueDevTools({ componentInspector: false })],

  server: {
    port: 8081,
  },

  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
    extensions: [".js", ".json", ".vue"],
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/scss/variables.scss";
          @import "@/scss/mixins.scss";
        `,
      },
    },
  },
});
