const config = {
  title: 'Oktatási Anyag',
  tagline: 'Interaktív tananyag',
  favicon: 'img/favicon.ico',

  // Itt az URL-t és baseUrl-t kell majd módosítani az új projekteknél
  url: 'https://eteszt.github.io',
  baseUrl: '/docusaurus-edu-template/',
  organizationName: 'eteszt', 
  projectName: 'docusaurus-edu-template',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Megtartjuk az interaktív kód blokkokat
  themes: ['@docusaurus/theme-live-codeblock'],

  i18n: {
    defaultLocale: 'hu',
    locales: ['hu'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    // Alapértelmezett navbar beállítások
    navbar: {
      title: 'Oktatási Anyag',
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/eteszt/docusaurus-edu-template',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} - Minden jog fenntartva`,
    },
    // Megtartjuk a kód példák beállításait
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
  },
};

module.exports = config;