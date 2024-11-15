const config = {
  title: 'Python Haladóknak',
  tagline: 'Haladó Python programozás',
  favicon: 'img/favicon.ico',

  url: process.env.NODE_ENV === 'production' 
    ? 'https://eteszt.github.io'
    : 'http://localhost',
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/docusaurus-python/'
    : '/',
    
  organizationName: 'eteszt', 
  projectName: 'docusaurus-python',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
  },
};

module.exports = config;