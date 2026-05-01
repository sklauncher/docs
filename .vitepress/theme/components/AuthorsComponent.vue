<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { frontmatter } = useData()

const authors = computed<string[]>(() =>
  ((frontmatter.value.authors || []) as string[]).slice().sort((a, b) => a.localeCompare(b))
)

const avatarUrl = (name: string) =>
  'https://wsrv.nl/?'
  + new URLSearchParams({
    af: '',
    maxage: '7d',
    url: `https://github.com/${name}.png?size=32`,
  })
</script>

<template>
  <template v-if="authors.length">
    <h2>Contributors</h2>
    <div class="authors">
      <a
        v-for="name in authors"
        :key="name"
        :href="`https://github.com/${name}`"
        target="_blank"
        rel="noopener"
      >
        <img
          :title="name"
          :alt="name"
          :src="avatarUrl(name)"
          loading="lazy"
        />
      </a>
    </div>
  </template>
</template>

<style scoped>
h2 {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 12px;
  font-weight: bold;
  color: var(--vp-c-text-2);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.authors {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 8px;
  gap: 8px;
}

.authors a {
  transition: filter 0.2s ease-in-out;
}

.authors a:hover {
  filter: brightness(120%);
}

.authors img {
  border-radius: 50%;
  width: 32px;
  height: 32px;
}

.content-container h2 {
  display: none;
}

.content-container .authors {
  margin-bottom: 16px;
}

@media (min-width: 1280px) {
  .content-container > .authors {
    display: none;
  }
}
</style>
