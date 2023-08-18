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
          children: ["quickStart", "supportedSmartphones"],
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
      { text: "Home", link: "/", icon: "Home" },
      { text: "Cite", link: "/blogs/citations", icon: "Quotes" },
      {
        text: "Download",
        icon: "Download",
        children: [
          { text: "Paper", link: "https://powerphone.github.io/2023ACM_Mobicom_PowerPhone.pdf" },
          { text: "System Images", link: "https://github.com/PowerPhone/PowerPhone/releases" },
        ],
      },
      {
        text: "Docs",
        icon: "Document",
        children: [
          { text: "Quick Start", link: "/docs/quickStart" },
          { text: "Supported Phones", link: "/docs/supportedSmartphones" },
          { text: "Reconfigure From Scratch", link: "/docs/hack" },
        ],
      },
      { text: "Source", link: "https://github.com/PowerPhone", icon: "LogoGithub" },
    ],
  }),
  // debug: true,
});
