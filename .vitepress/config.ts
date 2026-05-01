import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import defineVersionedConfig from 'vitepress-versioning-plugin'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineVersionedConfig({
  title: 'SKlauncher Docs',
  description: 'Community-driven documentation for SKlauncher',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['README.md'],
  locales: {
    root: { label: 'English', lang: 'en' },
  },
  versioning: {
    latestVersion: '3.2',
  },
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
  ],
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
  themeConfig: {
    logo: '/img/logo.svg',
    versionSwitcher: false,
    nav: [
      { text: 'Home', link: 'https://skmedix.pl', target: '_self', noIcon: true },
      { component: 'VersionSwitcher' },
      { text: 'GitHub', link: 'https://github.com/sklauncher/docs' },
    ],
    sidebar: {
      '/': [
      {
        text: 'Getting started',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Downloading', link: '/getting-started/downloads' },
          { text: 'Installation', link: '/getting-started/install' },
          { text: 'Register', link: '/getting-started/register' },
          {
            text: 'Log in',
            link: '/getting-started/login',
            items: [
              { text: 'Microsoft login', link: '/getting-started/login/microsoft' },
              { text: 'Offline login', link: '/getting-started/login/offline' },
            ],
          },
        ],
      },
      {
        text: 'Servers',
        link: '/category/servers',
        collapsed: true,
        items: [
          { text: 'Open to LAN worlds', link: '/servers/lan-world' },
          { text: 'Dedicated servers', link: '/servers/dedicated-server' },
        ],
      },
      {
        text: 'Frequently Asked Questions',
        collapsed: true,
        items: [
          { text: 'Web related', link: '/faq/web-related' },
          { text: 'Launcher related', link: '/faq/launcher-related' },
          { text: 'Game related', link: '/faq/game-related' },
        ],
      },
      {
        text: 'Troubleshooting',
        collapsed: true,
        items: [
          { text: 'Web related', link: '/troubleshooting/web-related' },
          { text: 'Launcher related', link: '/troubleshooting/launcher-related' },
          { text: 'Game related', link: '/troubleshooting/game-related' },
        ],
      },
      {
        text: 'Modding',
        link: '/category/modding',
        collapsed: true,
        items: [
          {
            text: 'Mod Loaders',
            collapsed: true,
            items: [
              { text: 'Fabric', link: '/modding/mod-loaders/fabric' },
              { text: 'Forge', link: '/modding/mod-loaders/forge' },
              { text: 'NeoForge', link: '/modding/mod-loaders/neoforge' },
              { text: 'Quilt', link: '/modding/mod-loaders/quilt' },
            ],
          },
          {
            text: 'Mods',
            collapsed: true,
            items: [
              { text: 'Installing Resource Packs', link: '/modding/mods/resourcepacks' },
              { text: 'OptiFine', link: '/modding/mods/optifine' },
              { text: 'Shaders', link: '/modding/mods/shaders' },
            ],
          },
        ],
      },
      {
        text: 'Contributions',
        collapsed: true,
        items: [
          { text: 'Docs', link: '/contributing/docs' },
          { text: 'Translations', link: '/contributing/translations' },
        ],
      },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sklauncher/docs' },
    ],
    editLink: {
      pattern: 'https://github.com/sklauncher/docs/edit/main/:path',
      text: 'Edit this page on GitHub',
    },
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Built with VitePress.',
      copyright: `Copyright © ${new Date().getFullYear()} Wiki Contributors.`,
    },
  },
}, __dirname)
