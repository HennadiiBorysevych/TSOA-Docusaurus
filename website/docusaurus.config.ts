import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TSOA API Docs',
  tagline: 'Auto-generated from TypeScript controllers',
  url: 'https://hennadiiborysevych.github.io',
  baseUrl: '/TSOA-Docusaurus/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'HennadiiBorysevych',
  projectName: 'TSOA-Docusaurus',
  trailingSlash: false,

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'TSOA API Docs',
      items: [
        {
          label: 'API Reference',
          to: '/api-reference/',
          position: 'left',
        },
        {
          href: 'https://github.com/HennadiiBorysevych/TSOA-Docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
