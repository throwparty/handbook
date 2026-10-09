import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Handbook",
  tagline: "How we construct exceptional software for software developers",
  favicon: "img/favicon.ico",

  future: {
    // Improve compatibility with the upcoming Docusaurus v4
    v4: true,
  },

  url: "https://handbook.throw.party",
  baseUrl: "/",

  organizationName: "throwparty",
  projectName: "handbook",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/throwparty/handbook/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ["@throwparty/docusaurus-theme"],

  themeConfig: {
    // XXX: replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Handbook",
      logo: {
        alt: "Logo; a yellow warning sign in the shape of a party hat with a fluffy pom pom",
        src: "img/logo.svg",
        width: 200,
        height: 200,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "cultureSidebar",
          position: "left",
          label: "Culture",
        },
        {
          type: "docSidebar",
          sidebarId: "toolingSidebar",
          position: "left",
          label: "Tooling",
        },
        {
          type: "docSidebar",
          sidebarId: "setupSidebar",
          position: "left",
          label: "Setup",
        },
        {
          type: "docSidebar",
          sidebarId: "runbooksSidebar",
          position: "left",
          label: "Runbooks",
        },
        { to: "/blog", label: "Blog", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Quick links",
          items: [
            {
              label: "AWS",
              href: "https://throwparty.awsapps.com/start",
            },
            {
              label: "GitHub",
              href: "https://github.com/throwparty",
            },
            {
              label: "Mail",
              href: "https://inbox.purelymail.com/",
            },
            {
              label: "Slack",
              href: "https://throwdotparty.slack.com/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} throw.party`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
