<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup lang="ts">
import Logo from '~/assets/icons/logo.svg';
useHead({
  link: [{ rel: "icon", href: Logo }],
  title: "Goose Flight",
});

//get locale from cookies and set it to i18n
const { setLocale } = useI18n();
const localCookie = useCookie("lang");
if (localCookie.value) {
  setLocale(localCookie.value as (string & "en") | "ar");
} else {
  localCookie.value = "en";
  setLocale("en");
}

//set locale html attributes
const head = useLocaleHead({
  dir: true,
  lang: true,
});
const htmlAttrs = computed(() => head.value.htmlAttrs!);
</script>
