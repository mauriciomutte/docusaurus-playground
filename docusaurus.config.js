// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: "Ionic Documentation",
  tagline: "Dinosaurs are cool",
  url: "https://mauriciomutte.dev",
  baseUrl: `/`,
  onBrokenLinks: "warn",
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
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "JSM Logo",
          src: "img/logo.svg",
          href: "/docs",
          target: "_self",
        },
        items: [
          {
            label: "Outros links",
            position: "left",
            items: [
              {
                href: "https://github.com/",
                label: "Github",
                target: "_blank",
                rel: null,
              },
              {
                href: "https://github.com/",
                label: "Guideline",
                target: "_blank",
                rel: null,
              },
            ],
            className: "navbar__link--community",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Guias",
                to: "/docs/guides/",
              },
              {
                label: "Tutoriais",
                to: "/docs/tutoriais/",
              },
              {
                label: "Explicações",
                to: "/docs/explanations/",
              },
              {
                label: "Referências",
                to: "/docs/references/",
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
              {
                label: "Guideline",
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
