<template>
  <section class="h-full px-[0.9375rem] md:px-10">
    <div class="background-container pt-[2.1875rem] md:pt-[7.5625rem]">
      <h1
        class="w-full md:w-1/2 mx-auto text-center mb-16 text-2xl md:text-[3.5rem] md:leading-[5.25rem] font-bold title"
      >
        {{ $t("title") }}
      </h1>

      <TravelSearch />

      <!--Popular destination-->
      <PopularDestination />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.background-container {
  background: url("../assets/images/bg.png") no-repeat;
  .title {
    background-image: linear-gradient(93.37deg, #183867 28.05%, #eaa121 44.33%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
