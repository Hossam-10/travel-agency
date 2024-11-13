<template>
  <div
    class="bg-white ps-[0.9375rem] pe-[0.9375rem] md:ps-[7.5rem] md:pe-9 pt-[3.75rem] pb-[2.125rem] flex flex-col md:flex-row md:justify-between gap-4 md:gap-0"
  >
    <img src="~/assets/icons/logo.svg" alt="logo" />
    <div class="flex flex-col gap-3" v-for="(links, key) in footerLinks">
      <h6 class="text-[#6E7491] font-bold text-lg">{{ $t(key as string) }}</h6>
      <LocaleLink
        class="text-[#7C8DB0]"
        v-for="link in links"
        :key="link.labelKey"
        :to="link.to"
        >{{ $t(link.labelKey!) }}</LocaleLink
      >
      <template v-if="key === 'getApp'">
        <IconGetAppIos />
        <IconGetAppGoogle />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { footerLinks } from "./constants";
</script>

<style scoped></style>
