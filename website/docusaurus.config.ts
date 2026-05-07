import type { Config, Plugin } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { PluginOptions } from 'docusaurus-plugin-openapi-docs';

// postman-code-generators (pulled in by docusaurus-theme-openapi-docs) uses
// Node.js `path` internally. Webpack 5 no longer polyfills it, so we tell
// webpack to ignore it for the browser bundle.
function webpackFallbackPlugin(): Plugin {
  return {
    name: 'webpack-fallback',
    configureWebpack() {
      return {
        resolve: {
          fallback: { path: false },
        },
      };
    },
  };
}

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
    webpackFallbackPlugin,
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
