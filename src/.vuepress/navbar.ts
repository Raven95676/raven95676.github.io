import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "预先防毒",
    link: "/prevention/",
    icon: "shield",
    activeMatch: "^/prevention/",
  },
  {
    text: "后继措施",
    link: "/follow-up/",
    icon: "shield-virus",
    activeMatch: "^/follow-up/",
  },
  {
    text: "实用技巧",
    link: "/useful_tips/",
    icon: "star",
    activeMatch: "^/useful_tips/",
  },
  "links"
]);
