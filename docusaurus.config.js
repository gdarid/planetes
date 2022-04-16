// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Planètes',
  tagline: `Quelques données de base ...`,
  url: 'https://planetes.netlify.app/',
  baseUrl: '/',
  titleDelimiter: '·',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gdarid', // Usually your GitHub org/user name.
  projectName: 'planetes', // Usually your repo name.

  i18n: {    
    defaultLocale: 'fr',    
    locales: ['fr'],    
    localeConfigs: {      
      fr: { label: 'Français', direction: 'ltr', }, },  
    },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          breadcrumbs: false,
          // Please change this to your repo.
          // editUrl: 'https://github.com/gdarid/planetes/blob/main/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // editUrl: 'https://github.com/gdarid/planetes/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // A commenter ci-dessous pour désactiver la page d'accueil
        title: 'Accueil',
        // Commentaire ci-dessous pour désactiver le logo
        /* logo: {
          alt: 'Accueil Logo',
          src: 'img/logo.svg',
        }, */
        items: [
          {
            type: 'doc',
            docId: 'intro_gen',
            position: 'left',
            label: `Planètes`,
          },

          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/gdarid/planetes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',        
        copyright: `Licence MIT`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
