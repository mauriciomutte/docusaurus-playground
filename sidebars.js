// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  docs: [
    {
      type: "link",
      label: "Home",
      href: "/",
    },
    "intro",
    {
      type: "category",
      label: "Technologies",
      items: [
        {
          type: "category",
          label: "Back-end",
          items: ["back-end/intro", "back-end/prisma"],
        },
        {
          type: "category",
          label: "Front-end",
          items: ["front-end/intro", "front-end/next"],
        },
      ],
    },
    {
      type: "category",
      label: "Business",
      items: ["business/project-1", "business/project-2"],
    },
  ],
  guides: [
    "intro",
    {
      type: "category",
      label: "Guides",
      items: ["guides/intro", "guides/how-to/create-new-doc"],
    },
  ],
};
