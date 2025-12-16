<script setup lang="ts">
const route = useRoute()

const { pages = [] } = defineProps<{pages: {id: number, uri: string, title: string}[]}>()

const isCurrentPage = (path: string) => route.path === path
</script>

<template>
  <nav class="sm:tw-basis-2/3 grow-1" aria-label="Primary">
    <ul class="sm:flex">
      <li>
        <NuxtLink 
          to="/blog" 
          class="block p-2 hover:underline text-red-600 hover:text-red-600"
          active-class="text-red-600"
          :aria-current="isCurrentPage('/blog') ? 'page' : undefined"
        >
          Blog
        </NuxtLink>
      </li>
      <li>
        <NuxtLink 
          to="/guestbook" 
          class="block p-2 hover:underline text-red-600 hover:text-red-600"
          active-class="text-red-600"
          :aria-current="isCurrentPage('/guestbook') ? 'page' : undefined"
        >
          Guestbook
        </NuxtLink>
      </li>
      <li v-for="page in pages" :key="page.id">
        <NuxtLink 
          :to="`/${page.uri}`" 
          class="block p-2 hover:underline text-red-600 hover:text-red-600"
          active-class="text-red-600"
          :aria-current="isCurrentPage(`/${page.uri}`) ? 'page' : undefined"
        >
          {{ page.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>