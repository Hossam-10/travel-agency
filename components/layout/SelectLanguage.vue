<template>
  <select class="p-2" @change="changeLocale">
    <option
      v-for="loc in locales"
      :key="loc.code"
      :value="loc.code"
      :selected="locale === loc.code"
    >
      {{ loc.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
const { locales, locale } = useI18n();
const localeCookie = useCookie<string>("lang");

const changeLocale = async (event: Event) => {
  localeCookie.value = (event.target as HTMLSelectElement).value;
  window.location.reload()
};
</script>
