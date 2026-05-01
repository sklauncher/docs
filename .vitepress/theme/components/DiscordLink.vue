<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <a
    class="discord-link"
    href="https://discord.com/invite/BdCcpDZ"
    target="_blank"
    rel="noopener"
    aria-label="Discord"
    title="Discord"
  >
    <Icon icon="simple-icons:discord" :width="20" :height="20" />
  </a>
</template>

<style scoped>
.discord-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: var(--vp-c-text-2);
  transition: color 0.25s, background-color 0.25s;
}

.discord-link:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-default-soft);
}
</style>
