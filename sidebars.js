// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  docs: [
    "index",
    {
      type: "category",
      label: "Primeiros passos",
      collapsed: true,
      items: ["tutorials/index", "tutorials/running", "tutorials/git-flow"],
    },
    {
      type: "category",
      label: "Guias",
      collapsed: true,
      items: ["guides/index"],
    },
    {
      type: "category",
      label: "Referências",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Hooks",
          items: ["references/hooks/useHook", "references/hooks/useMaterial"],
        },
        {
          type: "category",
          label: "Helpers",
          items: ["references/helpers/string"],
        },
      ],
    },
    {
      type: "category",
      label: "Explicações",
      collapsed: true,
      items: ["explanations/index"],
    },
  ],
};
