// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  docs: [
    "index",
    {
      type: "category",
      label: "Primeiros passos",
      items: [{ type: "autogenerated", dirName: "tutorials" }],
    },
    {
      type: "category",
      label: "Guias",
      items: [{ type: "autogenerated", dirName: "guides" }],
    },
    {
      type: "category",
      label: "Referências",
      items: [{ type: "autogenerated", dirName: "references" }],
    },
    {
      type: "category",
      label: "Explicações",
      items: [{ type: "autogenerated", dirName: "explanations" }],
    },
  ],
};

module.exports = sidebars;
