/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "intro_gen",
    {
      type: "category",
      label: "Système solaire",
      collapsed: true,
      items: [
        "solaire/intro",
        "solaire/mercure",
        "solaire/venus",
        "solaire/terre",
        "solaire/mars",
        "solaire/jupiter",
        "solaire/saturne",
        "solaire/uranus",
        "solaire/neptune",
      ],
    },
    {
      type: "category",
      label: "Glossaire",
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'glossaire/gazeuse',
          label: 'Planète géante gazeuse',
        },
        "glossaire/glaces",
        "glossaire/naine",
        "glossaire/tellurique",
      ],
    },
  ],
};

module.exports = sidebars;
