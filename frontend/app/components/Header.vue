<script setup lang="ts">
const { globalData = { logo: { url: "", alt: "" } }, pages = [] } =
  defineProps<{ globalData: GlobalData; pages: Page[] }>();

const {
  public: { SITE_NAME },
} = useRuntimeConfig();
const siteName = computed(() => SITE_NAME || "Site Name");
</script>

<template>
  <header class="navigation py-6 px-2 bg-slate-50">
    <div class="sm:flex justify-between container items-center mx-auto">
      <div class="logo sm:tw-basis-1/3 font-bold p-1">
        <Logo :siteName="siteName" :logo="globalData.logo" />
      </div>
      <div>
        <Navigation :pages="pages" />
      </div>
    </div>
  </header>
</template>
