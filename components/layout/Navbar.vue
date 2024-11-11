<template>
  <div class="flex items-center justify-between px-10 py-8 pb-4">
    <img src="~/assets/icons/logo.svg" alt="logo" />
    <div class="flex items-center gap-12">
      <LocaleLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="font-bold"
        exact-active-class="text-primary"
        >{{ link.label }}</LocaleLink
      >
    </div>
    <AppButton classContent="py-3 px-6 rounded-lg bg-primary">{{
      $t("signIn")
    }}</AppButton>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const links = ref([
  {
    label: t("home"),
    to: "/",
  },
  {
    label: t("promo"),
    to: "/promo",
  },
  {
    label: t("myBooking"),
    to: "/my-booking",
  },
]);
</script>

<style scoped></style>
