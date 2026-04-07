import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind";
import path from "node:path";


// https://astro.build/config
export default defineConfig({
  site: "https://grow-kit.com",
  integrations: [tailwind()],
  // 必须是 static（默认就是这个，删掉多余配置）
  output: "static",
  vite: {
    resolve: {
      alias: {
        "@layouts": path.resolve("src/layouts"),
        "@components": path.resolve("src/components"),
        "@data": path.resolve("src/data"),
        "@styles": path.resolve("src/styles"),
        "@utils": path.resolve("src/utils"),
        "@assets": path.resolve("src/assets"),
      },
    },
  },
});
