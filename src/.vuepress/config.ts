import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'



import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "非官方病毒吧Windows FAQ",
  description: "这里是吧友们可能会问的问题，非病毒吧官方网站。",

  theme,

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-SCCND9C7KZ',
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
