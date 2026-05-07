import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { PluginOptions } from 'docusaurus-plugin-openapi-docs';

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
          docItemComponent: '@theme/ApiItem',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          users: {
            specPath: '../swagger.json',
            outputDir: 'docs/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      } satisfies PluginOptions,
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],
};

export default config;
