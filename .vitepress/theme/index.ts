import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import { Icon } from '@iconify/vue'
import { h } from 'vue'
import AuthorsComponent from './components/AuthorsComponent.vue'
import DiscordLink from './components/DiscordLink.vue'
import VersionSwitcher from './components/VersionSwitcher.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
    app.component('Icon', Icon)
    app.component('VersionSwitcher', VersionSwitcher)
  },
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(DiscordLink),
      'doc-before': () => h(AuthorsComponent),
      'aside-outline-after': () => h(AuthorsComponent),
    }),
}
