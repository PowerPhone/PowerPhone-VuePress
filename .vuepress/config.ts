import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  lang: "en-US",
  title: "PowerPhone",
  description: "Unleashing the Acoustic Sensing Capability of Smartphones",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "SHIRUI CAO",
    docsRepo: "https://github.com/PowerPhone/PowerPhone-VuePress",
    docsBranch: "main",
    docsDir: ".",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/": [
        {
          text: "Quick Start",
          children: ["quickStart"],
        },
        {
          text: "Development",
          children: ["hack"],
        },
        {
          text: "FAQ",
          children: ["faq"],
        },
      ],
    },
    navbar: [
      { text: "Home", link: "/" },
      { text: "Cite", link: "/blogs/citations" },
      { text: "Download Paper", link: "/2023ACM_Mobicom_PowerPhone.pdf" },
      {
        text: "Docs",
        children: [
          { text: "Quick Start", link: "/docs/quickStart" },
        ],
      },
    ],
  }),
  // debug: true,
});
