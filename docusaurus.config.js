const config = {
  title: 'Python Haladóknak',
  tagline: 'Haladó Python programozás',
  favicon: 'img/favicon.ico',

  // GitHub Pages URL beállítások
  url: 'https://eteszt.github.io',
  baseUrl: '/docusaurus-python/',
  organizationName: 'eteszt',
  projectName: 'docusaurus-python',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
    // disable dark mode
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'Python Haladóknak',
      items: [
        {
          href: 'https://github.com/eteszt/docusaurus-python',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} - Minden jog fenntartva`,
    },
  },
};

module.exports = config;