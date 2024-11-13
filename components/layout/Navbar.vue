<template>
  <div class="flex items-center justify-center md:justify-between pb-4 px-[0.9375rem] md:px-10 ">
    <img src="~/assets/icons/logo.svg" alt="logo" />
    <!--navbar content in large screen-->
    <div class="hidden md:flex items-center gap-12">
      <LocaleLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="font-bold"
        exact-active-class="text-primary"
        >{{ link.label }}</LocaleLink
      >
    </div>
    <div class="hidden md:flex items-center gap-2 h-11">
      <LayoutSelectLanguage class="h-full" />
      <AppButton classContent="py-3 px-6 rounded-lg bg-primary">{{
        $t("signIn")
      }}</AppButton>
    </div>

    <!--menu button and menu content in small screen-->
    <AppButton :classContent="menuButtonClasses" @click="setIsMenuOpen(true)"
      ><i class="pi pi-bars text-primary text-lg"
    /></AppButton>
    <div
      v-if="isMenuOpen"
      class="bg-[#F3F7FC] absolute inset-0 z-50 flex flex-col gap-5 ps-[0.9375rem]"
    >
      <AppButton
        classContent="self-end p-4 !text-primary"
        @click="setIsMenuOpen(false)"
        ><i class="pi pi-times text-lg"
      /></AppButton>
      <LocaleLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="font-bold"
        exact-active-class="text-primary"
        >{{ link.label }}</LocaleLink
      >
      <LayoutSelectLanguage class="self-start" />
      <AppButton classContent="self-start py-3 px-6 rounded-lg bg-primary">{{
        $t("signIn")
      }}</AppButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t, locale } = useI18n();

const links = ref<LinkItem[]>([
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
const menuButtonClasses = computed(() => {
  let classes = "md:hidden absolute top-[1.875rem] rounded p-2 bg-[#DBECFD]";
  classes += locale.value === "en" ? " left-4" : " right-4";
  return classes;
});

//handle show and hide menu
const isMenuOpen = ref(false);
const setIsMenuOpen = (val: boolean) => {
  isMenuOpen.value = val;
};
</script>

<style scoped></style>
