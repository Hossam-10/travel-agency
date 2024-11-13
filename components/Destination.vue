<template>
  <div
    class="rounded-2xl p-4 border border-solid border-white bg-[#F0F0F073] cursor-pointer destination-container"
  >
    <NuxtImg
      class="w-full h-[11.25rem] rounded-tl-lg rounded-br-lg mb-4"
      :src="`/destinations/destination-${destinationIndex}.jpeg`"
      alt="destination"
    />
    <p class="flex items-center gap-1 text-[0.625rem] text-[#8F8F8F] mb-2">
      <IconLocation />
      {{ destination.location }}
    </p>
    <p class="font-bold text-[#183867] mb-1">{{ destination.title }}</p>
    <p class="text-gray-600 text-sm mb-4">{{ destination.duration }}</p>
    <p class="text-sm text-bold text-[#F0A41F]">{{ destination.price }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { Destination } from "~/types/destination";

defineProps<{
  destination: Destination;
  destinationIndex: number;
}>();
</script>

<style scoped lang="scss">
.destination-container {
  backdrop-filter: blur(0.25rem);
}
</style>
