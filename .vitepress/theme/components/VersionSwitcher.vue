<script setup lang="ts">
import { useData } from 'vitepress'
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import { computed } from 'vue'

const props = defineProps<{
  versioningPlugin: { versions: string[]; latestVersion: string | null }
}>()

const data = useData()
const collator = new Intl.Collator(undefined, { numeric: true })

const UPCOMING = new Set(['4.0'])
const formatVersion = (v: string) => (UPCOMING.has(v) ? `${v} (Next)` : v)

const latest = computed(() => props.versioningPlugin.latestVersion ?? 'latest')

const currentVersion = computed(() => {
  const parts = (data.page.value.filePath || '').split('/')
  if (parts[0] === 'versions') return parts[1]
  return latest.value
})

const versions = computed(() =>
  [latest.value, ...props.versioningPlugin.versions.slice().sort(collator.compare).reverse()]
    .filter((v) => v !== currentVersion.value),
)

const getRoute = (v: string) => (v === latest.value ? '/' : `/${v}/`)
</script>

<template>
  <VPFlyout :button="formatVersion(currentVersion)" label="Version">
    <VPLink v-for="v in versions" :key="v" :href="getRoute(v)" class="version-link">
      {{ formatVersion(v) }}
    </VPLink>
  </VPFlyout>
</template>

<style scoped>
.version-link {
  display: block;
  border-radius: 6px;
  padding: 0 12px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  transition: background-color 0.25s, color 0.25s;
}

.version-link:hover {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-default-soft);
}
</style>
