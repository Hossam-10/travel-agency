<template>
  <div class="pb-[5.5rem]">
    <h3 class="font-bold text-[#183867] text-4xl mb-2">
      {{ $t("popularDestinations") }}
    </h3>
    <p class="text-[#183867] mb-[2.6875rem]">
      {{ $t("vacationEnjoyable") }}
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.9375rem]">
      <Destination
        v-for="(destination, index) in destinations"
        :key="destination.id"
        :destination="destination"
        :destinationIndex="index + 1"
        :class="{
          '!border-[#F0A41F] !bg-[#EAA12112]':
            selectedDestination?.id === destination.id,
        }"
        @click="setSelectedDestination(destination)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Destination } from "~/types/destination";

const { destinations } = useDestinations();
const selectedDestination = ref<Maybe<Destination>>(null);
const setSelectedDestination = (destination: Destination) => {
  selectedDestination.value = destination;
};
</script>

<style scoped></style>
