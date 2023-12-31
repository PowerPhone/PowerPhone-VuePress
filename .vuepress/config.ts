import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  lang: "en-US",
  title: "PowerPhone",
  description: "Unleashing the Acoustic Sensing Capability of Smartphones",
  head: [['link', { rel: 'icon', type:'image/png' , href: '/logo.png' }]],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: null,
    home: "/",
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
          children: ["quickStart", "supportedSmartphones", "motorolaEdge2020", "samsungS9Plus", "xiaomiRedmiNotePro9", "samsungS10"],
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
          { text: "Slides", link: "https://powerphone.github.io/PowerPhoneMobiCom2023.pdf" },
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
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-5M6LVV58ET',
    }),
  ],
  // debug: true,
});
