// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: "Docusaurus Playground",
  tagline: "Dinosaurs are cool",
  url: "https://mauriciomutte.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "mauriciomutte", // Usually your GitHub org/user name.
  projectName: "docusaurus-playground", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/mauriciomutte/docusaurus-playground/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Docusaurus Playground",
        logo: {
          alt: "Docusaurus Playground Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorials",
          },
          {
            type: "doc",
            docId: "guides/intro",
            position: "left",
            label: "Guides",
          },
          {
            href: "https://github.com/mauriciomutte/docusaurus-playground",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Blog",
                href: "https://mauriciomutte.dev/",
              },
              {
                label: "Github",
                href: "https://github.com/mauriciomutte",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/mauriciomutte",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/mauriciomutte/docusaurus-playground",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
